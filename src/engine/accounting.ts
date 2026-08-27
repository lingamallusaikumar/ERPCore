// ERPCore Double-Entry Accounting Engine

import { Account, JournalEntry, JournalEntryLine, LedgerEntry } from '../types';
import * as Storage from '../lib/storage';

export interface AccountingValidationResult {
  valid: boolean;
  message?: string;
  totalDebit: number;
  totalCredit: number;
}

export function validateJournalEntryLines(lines: JournalEntryLine[]): AccountingValidationResult {
  if (!lines || lines.length < 2) {
    return { valid: false, message: 'A valid journal entry requires at least 2 line items', totalDebit: 0, totalCredit: 0 };
  }

  let totalDebit = 0;
  let totalCredit = 0;

  for (const line of lines) {
    if (!line.accountId) {
      return { valid: false, message: 'Every journal line must specify a valid account', totalDebit, totalCredit };
    }
    const debit = Number(line.debit) || 0;
    const credit = Number(line.credit) || 0;

    if (debit < 0 || credit < 0) {
      return { valid: false, message: 'Debit and credit values cannot be negative numbers', totalDebit, totalCredit };
    }
    if (debit === 0 && credit === 0) {
      return { valid: false, message: 'Each journal line must contain either a non-zero debit or credit amount', totalDebit, totalCredit };
    }

    totalDebit += debit;
    totalCredit += credit;
  }

  // Floating point precision tolerance check (e.g. within 0.001)
  const diff = Math.abs(totalDebit - totalCredit);
  if (diff > 0.001) {
    return {
      valid: false,
      message: `Unbalanced journal entry rejected. Total Debits ($${totalDebit.toFixed(2)}) must equal Total Credits ($${totalCredit.toFixed(2)}). Variance: $${diff.toFixed(2)}`,
      totalDebit,
      totalCredit
    };
  }

  return { valid: true, totalDebit, totalCredit };
}

export async function postJournalEntry(entry: Omit<JournalEntry, 'id' | 'entryNumber' | 'totalDebit' | 'totalCredit' | 'status'>): Promise<{ success: boolean; entry?: JournalEntry; error?: string }> {
  const validation = validateJournalEntryLines(entry.lines);
  if (!validation.valid) {
    return { success: false, error: validation.message };
  }

  const accounts = await Storage.getAll<Account>('accounts');
  const accountMap = new Map<string, Account>();
  accounts.forEach((acc) => accountMap.set(acc.id, acc));

  // Verify accounts exist
  for (const line of entry.lines) {
    if (!accountMap.has(line.accountId)) {
      return { success: false, error: `Account with ID ${line.accountId} does not exist in Chart of Accounts` };
    }
  }

  const journalId = `je-${Date.now()}`;
  const entryNumber = `JE-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const fullEntry: JournalEntry = {
    ...entry,
    id: journalId,
    entryNumber,
    totalDebit: validation.totalDebit,
    totalCredit: validation.totalCredit,
    status: 'posted',
    postedAt: new Date().toISOString()
  };

  // Update account balances based on account types
  // Asset & Expense increase with Debit, decrease with Credit
  // Liability, Equity & Revenue increase with Credit, decrease with Debit
  for (const line of fullEntry.lines) {
    const acc = accountMap.get(line.accountId)!;
    const debit = Number(line.debit) || 0;
    const credit = Number(line.credit) || 0;

    if (acc.type === 'asset' || acc.type === 'expense') {
      acc.balance += (debit - credit);
    } else {
      acc.balance += (credit - debit);
    }

    await Storage.saveItem('accounts', acc);
  }

  await Storage.saveItem('auditLogs', {
    id: `aud-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: 'system',
    userName: entry.postedBy || 'Finance System',
    module: 'accounting',
    action: 'POST_JOURNAL_ENTRY',
    recordId: journalId,
    recordRef: entryNumber,
    newValue: `Posted journal ${entryNumber}: Debits=$${validation.totalDebit}, Credits=$${validation.totalCredit}`
  });

  return { success: true, entry: fullEntry };
}

export async function generateTrialBalance(): Promise<{ accounts: Account[]; totalDebit: number; totalCredit: number; isBalanced: boolean }> {
  const accounts = await Storage.getAll<Account>('accounts');
  let totalDebit = 0;
  let totalCredit = 0;

  const resultAccounts = accounts.map((acc) => {
    let debit = 0;
    let credit = 0;

    if (acc.type === 'asset' || acc.type === 'expense') {
      if (acc.balance >= 0) debit = acc.balance;
      else credit = Math.abs(acc.balance);
    } else {
      if (acc.balance >= 0) credit = acc.balance;
      else debit = Math.abs(acc.balance);
    }

    totalDebit += debit;
    totalCredit += credit;

    return { ...acc, debit, credit };
  });

  const diff = Math.abs(totalDebit - totalCredit);
  return {
    accounts: resultAccounts,
    totalDebit,
    totalCredit,
    isBalanced: diff < 0.01
  };
}

export async function generateProfitAndLoss(): Promise<{ revenues: Account[]; expenses: Account[]; totalRevenue: number; totalExpense: number; netProfit: number }> {
  const accounts = await Storage.getAll<Account>('accounts');
  const revenues = accounts.filter((a) => a.type === 'revenue');
  const expenses = accounts.filter((a) => a.type === 'expense');

  const totalRevenue = revenues.reduce((sum, a) => sum + Math.max(0, a.balance), 0);
  const totalExpense = expenses.reduce((sum, a) => sum + Math.max(0, a.balance), 0);
  const netProfit = totalRevenue - totalExpense;

  return { revenues, expenses, totalRevenue, totalExpense, netProfit };
}

export async function generateBalanceSheet(): Promise<{ assets: Account[]; liabilities: Account[]; equity: Account[]; totalAssets: number; totalLiabilities: number; totalEquity: number; isBalanced: boolean }> {
  const accounts = await Storage.getAll<Account>('accounts');
  const { netProfit } = await generateProfitAndLoss();

  const assets = accounts.filter((a) => a.type === 'asset');
  const liabilities = accounts.filter((a) => a.type === 'liability');
  const equity = accounts.filter((a) => a.type === 'equity');

  const totalAssets = assets.reduce((sum, a) => sum + a.balance, 0);
  const totalLiabilities = liabilities.reduce((sum, a) => sum + a.balance, 0);
  let totalEquity = equity.reduce((sum, a) => sum + a.balance, 0) + netProfit;

  const diff = Math.abs(totalAssets - (totalLiabilities + totalEquity));

  return {
    assets,
    liabilities,
    equity,
    totalAssets,
    totalLiabilities,
    totalEquity,
    isBalanced: diff < 0.01
  };
}
