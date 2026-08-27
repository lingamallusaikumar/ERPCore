import React, { useState, useEffect } from 'react';
import { 
  DollarSign, FileText, CheckCircle2, AlertCircle, Plus, RefreshCw, Landmark, ArrowUpRight, ArrowDownRight, Scale
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { Modal } from '../components/ui/Modal';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Account, JournalEntry, Invoice, BankAccount, BankTransaction } from '../types';
import * as Storage from '../lib/storage';
import { postJournalEntry, generateTrialBalance, generateProfitAndLoss, generateBalanceSheet } from '../engine/accounting';

export const FinanceModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'overview' | 'coa' | 'gl' | 'ar' | 'ap' | 'banking' | 'statements'>('overview');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [bankTxns, setBankTxns] = useState<BankTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  // Journal Entry Modal State
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [journalDesc, setJournalDesc] = useState('');
  const [journalRef, setJournalRef] = useState('');
  const [journalLines, setJournalLines] = useState<{ accountId: string; debit: number; credit: number }[]>([
    { accountId: 'acc-1010', debit: 1000, credit: 0 },
    { accountId: 'acc-4010', debit: 0, credit: 1000 }
  ]);
  const [journalError, setJournalError] = useState<string | null>(null);

  // Statements State
  const [statementType, setStatementType] = useState<'trial_balance' | 'pnl' | 'balance_sheet'>('trial_balance');
  const [trialBalanceData, setTrialBalanceData] = useState<any>(null);
  const [pnlData, setPnlData] = useState<any>(null);
  const [balanceSheetData, setBalanceSheetData] = useState<any>(null);

  const loadData = async () => {
    setLoading(true);
    const accs = await Storage.getAll<Account>('accounts');
    const invs = await Storage.getAll<Invoice>('invoices');
    const bAccs = await Storage.getAll<BankAccount>('bankAccounts');
    const bTx = await Storage.getAll<BankTransaction>('bankTransactions');
    
    setAccounts(accs);
    setInvoices(invs);
    setBankAccounts(bAccs);
    setBankTxns(bTx);

    const tb = await generateTrialBalance();
    const pnl = await generateProfitAndLoss();
    const bs = await generateBalanceSheet();
    setTrialBalanceData(tb);
    setPnlData(pnl);
    setBalanceSheetData(bs);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePostJournal = async () => {
    setJournalError(null);
    const preparedLines = journalLines.map((line, idx) => {
      const acc = accounts.find((a) => a.id === line.accountId);
      return {
        id: `line-${idx}`,
        accountId: line.accountId,
        accountCode: acc?.code || '',
        accountName: acc?.name || '',
        debit: Number(line.debit) || 0,
        credit: Number(line.credit) || 0
      };
    });

    const result = await postJournalEntry({
      date: new Date().toISOString().split('T')[0],
      reference: journalRef || 'JE-REF-MANUAL',
      description: journalDesc || 'Manual Journal Entry',
      lines: preparedLines,
      postedBy: 'Alex Mercer (Finance Manager)',
      currency: 'USD'
    });

    if (!result.success) {
      setJournalError(result.error || 'Failed to post journal');
    } else {
      setIsJournalModalOpen(false);
      setJournalDesc('');
      setJournalRef('');
      loadData();
    }
  };

  // CoA Columns
  const coaColumns: Column<Account>[] = [
    { key: 'code', header: 'Account Code', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.code}</span> },
    { key: 'name', header: 'Account Name', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'type', header: 'Account Type', accessor: (item) => <Badge variant={item.type === 'asset' ? 'info' : item.type === 'liability' ? 'danger' : item.type === 'revenue' ? 'success' : 'warning'}>{item.type.toUpperCase()}</Badge> },
    { key: 'category', header: 'Category', accessor: (item) => <span className="text-xs text-gray-400 font-mono">{item.category}</span> },
    { key: 'balance', header: 'Balance (USD)', accessor: (item) => <span className={`font-mono font-semibold ${item.balance < 0 ? 'text-rose-400' : 'text-gray-100'}`}>${item.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>, sortAccessor: (item) => item.balance }
  ];

  // AR Invoice Columns
  const arColumns: Column<Invoice>[] = [
    { key: 'invoiceNumber', header: 'Invoice #', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.invoiceNumber}</span> },
    { key: 'customerName', header: 'Customer', accessor: (item) => <span className="font-medium">{item.customerName}</span> },
    { key: 'issueDate', header: 'Issue Date', accessor: (item) => item.issueDate },
    { key: 'dueDate', header: 'Due Date', accessor: (item) => item.dueDate },
    { key: 'grandTotal', header: 'Total ($)', accessor: (item) => <span className="font-mono">${item.grandTotal.toLocaleString()}</span> },
    { key: 'outstandingBalance', header: 'Balance Due ($)', accessor: (item) => <span className="font-mono font-semibold text-amber-400">${item.outstandingBalance.toLocaleString()}</span> },
    { key: 'status', header: 'Lifecycle Status', accessor: (item) => <Badge variant={item.status === 'paid' ? 'success' : item.status === 'partially_paid' ? 'warning' : 'info'}>{item.status.toUpperCase()}</Badge> }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Top Section Header & Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Finance & General Ledger Engine
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">Double-Entry Enforced</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage Chart of Accounts, post journal entries, reconcile simulated banking, and generate trial balance financial statements.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            icon={<Plus className="w-4 h-4" />}
            onClick={() => setIsJournalModalOpen(true)}
          >
            Post Double-Entry Journal
          </Button>
        </div>
      </div>

      {/* Sub Tab Navigation */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['overview', 'coa', 'ar', 'banking', 'statements'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'coa' ? 'Chart of Accounts' : t === 'ar' ? 'Accounts Receivable' : t === 'banking' ? 'Simulated Banking' : t === 'statements' ? 'Financial Statements' : 'Overview'}
          </button>
        ))}
      </div>

      {/* TAB CONTENT: Overview */}
      {subTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Operating Cash Balance" subtitle="Primary Bank Accounts">
              <p className="text-2xl font-bold font-mono text-emerald-400 mt-2">$1,835,000.00</p>
              <p className="text-xs text-gray-400 mt-1">100% matched in General Ledger Account 1010</p>
            </Card>
            <Card title="Accounts Receivable" subtitle="Total Uncollected Customer Invoices">
              <p className="text-2xl font-bold font-mono text-blue-400 mt-2">$642,000.00</p>
              <p className="text-xs text-gray-400 mt-1">3 Active invoices pending payment settlement</p>
            </Card>
            <Card title="Accounts Payable" subtitle="Total Vendor Trade Payables">
              <p className="text-2xl font-bold font-mono text-rose-400 mt-2">$385,000.00</p>
              <p className="text-xs text-gray-400 mt-1">2 Supplier bills scheduled Net 30</p>
            </Card>
          </div>

          <DataGrid
            title="Chart of Accounts Summary"
            subtitle="Real-time balances calculated via double-entry journal postings"
            columns={coaColumns}
            data={accounts}
            loading={loading}
          />
        </div>
      )}

      {/* TAB CONTENT: Chart of Accounts */}
      {subTab === 'coa' && (
        <DataGrid
          title="Master Chart of Accounts"
          subtitle="All Asset, Liability, Equity, Revenue, and Expense accounts"
          columns={coaColumns}
          data={accounts}
          loading={loading}
        />
      )}

      {/* TAB CONTENT: Accounts Receivable */}
      {subTab === 'ar' && (
        <DataGrid
          title="Accounts Receivable (AR) Invoices"
          subtitle="Customer invoice lifecycle from draft to approved, sent, and paid"
          columns={arColumns}
          data={invoices}
          loading={loading}
        />
      )}

      {/* TAB CONTENT: Banking Simulator */}
      {subTab === 'banking' && (
        <div className="space-y-6">
          <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/50 text-xs text-blue-300 flex items-center justify-between">
            <span className="font-semibold">Simulated Banking & Transaction Reconciliation Mode</span>
            <Badge variant="info">Local Demo Banking</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bankAccounts.map((b) => (
              <Card key={b.id} title={b.accountName} subtitle={`${b.bankName} • Acc #${b.accountNumber}`}>
                <div className="space-y-3 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Current Statement Balance</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">${b.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
                    <span>GL Account Code:</span>
                    <span className="font-mono text-blue-400 font-semibold">{b.glAccountId}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Last Reconciled:</span>
                    <span>{b.lastReconciledDate}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card title="Bank Statement Feed & Matching" subtitle="Unmatched and matched electronic deposits and wire transfers">
            <div className="overflow-x-auto">
              <table className="erp-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Reference</th>
                    <th>Amount ($)</th>
                    <th>Reconciliation Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bankTxns.map((tx) => (
                    <tr key={tx.id}>
                      <td className="font-mono text-xs">{tx.date}</td>
                      <td className="font-medium text-xs">{tx.description}</td>
                      <td className="font-mono text-xs text-blue-400">{tx.reference}</td>
                      <td className={`font-mono text-xs font-semibold ${tx.amount < 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {tx.amount > 0 ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                      </td>
                      <td>
                        <Badge variant={tx.status === 'matched' ? 'success' : 'warning'}>
                          {tx.status.toUpperCase()}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* TAB CONTENT: Financial Statements */}
      {subTab === 'statements' && (
        <div className="space-y-6">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={statementType === 'trial_balance' ? 'primary' : 'outline'}
              onClick={() => setStatementType('trial_balance')}
            >
              Trial Balance
            </Button>
            <Button
              size="sm"
              variant={statementType === 'pnl' ? 'primary' : 'outline'}
              onClick={() => setStatementType('pnl')}
            >
              Profit & Loss (P&L)
            </Button>
            <Button
              size="sm"
              variant={statementType === 'balance_sheet' ? 'primary' : 'outline'}
              onClick={() => setStatementType('balance_sheet')}
            >
              Balance Sheet
            </Button>
          </div>

          {statementType === 'trial_balance' && trialBalanceData && (
            <Card title="Trial Balance Statement" subtitle="Enforces Total Debits = Total Credits">
              <div className="overflow-x-auto">
                <table className="erp-table">
                  <thead>
                    <tr>
                      <th>Account Code</th>
                      <th>Account Name</th>
                      <th>Account Type</th>
                      <th>Debit ($)</th>
                      <th>Credit ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trialBalanceData.accounts.map((acc: any) => (
                      <tr key={acc.id}>
                        <td className="font-mono text-blue-400 font-semibold">{acc.code}</td>
                        <td className="font-medium">{acc.name}</td>
                        <td><Badge variant="neutral">{acc.type.toUpperCase()}</Badge></td>
                        <td className="font-mono">{acc.debit > 0 ? `$${acc.debit.toLocaleString()}` : '-'}</td>
                        <td className="font-mono">{acc.credit > 0 ? `$${acc.credit.toLocaleString()}` : '-'}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-800/80 font-bold border-t-2 border-gray-700">
                      <td colSpan={3} className="text-right uppercase tracking-wider">Total Trial Balance Equivalent:</td>
                      <td className="font-mono text-emerald-400">${trialBalanceData.totalDebit.toLocaleString()}</td>
                      <td className="font-mono text-emerald-400">${trialBalanceData.totalCredit.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {statementType === 'pnl' && pnlData && (
            <Card title="Profit & Loss Statement (Income Statement)" subtitle="Operating Revenues minus Operating Expenses">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider mb-2">Revenues</h4>
                  {pnlData.revenues.map((r: any) => (
                    <div key={r.id} className="flex justify-between text-xs py-1 border-b border-gray-800">
                      <span>{r.code} - {r.name}</span>
                      <span className="font-mono font-semibold">${r.balance.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs font-bold py-2 text-emerald-400">
                    <span>Total Revenues:</span>
                    <span className="font-mono">${pnlData.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-rose-400 tracking-wider mb-2">Operating Expenses</h4>
                  {pnlData.expenses.map((e: any) => (
                    <div key={e.id} className="flex justify-between text-xs py-1 border-b border-gray-800">
                      <span>{e.code} - {e.name}</span>
                      <span className="font-mono font-semibold">${e.balance.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs font-bold py-2 text-rose-400">
                    <span>Total Expenses:</span>
                    <span className="font-mono">${pnlData.totalExpense.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-700 flex justify-between text-sm font-bold bg-blue-950/40 p-3 rounded-lg border border-blue-800/40">
                  <span>Net Net Income / Profit:</span>
                  <span className="font-mono text-emerald-400">${pnlData.netProfit.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          )}

          {statementType === 'balance_sheet' && balanceSheetData && (
            <Card title="Balance Sheet" subtitle="Assets = Liabilities + Owner Equity">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-blue-400 tracking-wider mb-2">Assets</h4>
                  {balanceSheetData.assets.map((a: any) => (
                    <div key={a.id} className="flex justify-between text-xs py-1 border-b border-gray-800">
                      <span>{a.code} - {a.name}</span>
                      <span className="font-mono font-semibold">${a.balance.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs font-bold py-2 text-blue-400 border-t border-gray-700">
                    <span>Total Assets:</span>
                    <span className="font-mono">${balanceSheetData.totalAssets.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-rose-400 tracking-wider mb-2">Liabilities & Equity</h4>
                  {balanceSheetData.liabilities.map((l: any) => (
                    <div key={l.id} className="flex justify-between text-xs py-1 border-b border-gray-800">
                      <span>{l.code} - {l.name}</span>
                      <span className="font-mono font-semibold">${l.balance.toLocaleString()}</span>
                    </div>
                  ))}
                  {balanceSheetData.equity.map((eq: any) => (
                    <div key={eq.id} className="flex justify-between text-xs py-1 border-b border-gray-800">
                      <span>{eq.code} - {eq.name}</span>
                      <span className="font-mono font-semibold">${eq.balance.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs font-bold py-2 text-rose-400 border-t border-gray-700">
                    <span>Total Liabilities & Equity:</span>
                    <span className="font-mono">${(balanceSheetData.totalLiabilities + balanceSheetData.totalEquity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Double-Entry Journal Modal */}
      <Modal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
        title="Post Double-Entry Journal Entry"
        subtitle="Every journal entry MUST satisfy Total Debits = Total Credits"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsJournalModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handlePostJournal}>Post Journal</Button>
          </>
        }
      >
        <div className="space-y-4">
          {journalError && (
            <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-800 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{journalError}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Journal Description"
              value={journalDesc}
              onChange={(e) => setJournalDesc(e.target.value)}
              placeholder="e.g. Monthly Accrual Adjustment"
            />
            <Input
              label="Reference / Document #"
              value={journalRef}
              onChange={(e) => setJournalRef(e.target.value)}
              placeholder="e.g. JE-2026-MAN"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Journal Lines (Debits vs Credits)</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setJournalLines([...journalLines, { accountId: accounts[0]?.id || '', debit: 0, credit: 0 }])}
              >
                + Add Line
              </Button>
            </div>

            {journalLines.map((line, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-6">
                  <Select
                    options={accounts.map((a) => ({ value: a.id, label: `${a.code} - ${a.name} (${a.type})` }))}
                    value={line.accountId}
                    onChange={(e) => {
                      const updated = [...journalLines];
                      updated[idx].accountId = e.target.value;
                      setJournalLines(updated);
                    }}
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="number"
                    placeholder="Debit ($)"
                    value={line.debit || ''}
                    onChange={(e) => {
                      const updated = [...journalLines];
                      updated[idx].debit = parseFloat(e.target.value) || 0;
                      setJournalLines(updated);
                    }}
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="number"
                    placeholder="Credit ($)"
                    value={line.credit || ''}
                    onChange={(e) => {
                      const updated = [...journalLines];
                      updated[idx].credit = parseFloat(e.target.value) || 0;
                      setJournalLines(updated);
                    }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-3 border-t border-gray-800 flex justify-between text-xs font-semibold">
              <span className="text-gray-400">Total Lines Summary:</span>
              <div className="space-x-4 font-mono">
                <span className="text-blue-400">Total Debit: ${journalLines.reduce((s, l) => s + (l.debit || 0), 0).toFixed(2)}</span>
                <span className="text-emerald-400">Total Credit: ${journalLines.reduce((s, l) => s + (l.credit || 0), 0).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
