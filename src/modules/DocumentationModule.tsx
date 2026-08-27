import React, { useState } from 'react';
import { BookOpen, CheckCircle, Play, FileCode, Shield, Layers, RefreshCw } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { validateJournalEntryLines } from '../engine/accounting';
import { calculatePayslip } from '../engine/payroll';
import { calculateStraightLineDepreciation } from '../engine/depreciation';
import { INITIAL_EMPLOYEES, INITIAL_ASSETS } from '../data/seedData';

export const DocumentationModule: React.FC = () => {
  const [docTab, setDocTab] = useState<'guide' | 'tests'>('guide');
  const [testResults, setTestResults] = useState<{ name: string; category: string; passed: boolean; message: string }[] | null>(null);

  const runAllUnitTests = () => {
    const results: { name: string; category: string; passed: boolean; message: string }[] = [];

    // Test 1: Accounting Double-Entry Balancing
    const validLines = [
      { id: '1', accountId: 'acc-1', accountCode: '1010', accountName: 'Cash', debit: 1500, credit: 0 },
      { id: '2', accountId: 'acc-2', accountCode: '4010', accountName: 'Revenue', debit: 0, credit: 1500 }
    ];
    const valResult1 = validateJournalEntryLines(validLines);
    results.push({
      name: 'Double-Entry Accounting Balancing Validation',
      category: 'Accounting',
      passed: valResult1.valid,
      message: valResult1.valid ? `Passed: Total Debits ($${valResult1.totalDebit}) = Total Credits ($${valResult1.totalCredit})` : `Failed: ${valResult1.message}`
    });

    // Test 2: Unbalanced Journal Rejection
    const invalidLines = [
      { id: '1', accountId: 'acc-1', accountCode: '1010', accountName: 'Cash', debit: 1500, credit: 0 },
      { id: '2', accountId: 'acc-2', accountCode: '4010', accountName: 'Revenue', debit: 0, credit: 1000 }
    ];
    const valResult2 = validateJournalEntryLines(invalidLines);
    results.push({
      name: 'Unbalanced Journal Entry Rejection Guard',
      category: 'Accounting',
      passed: !valResult2.valid,
      message: !valResult2.valid ? 'Passed: Correctly rejected unbalanced journal entry (Debits $1500 != Credits $1000)' : 'Failed: Allowed unbalanced entry'
    });

    // Test 3: Payroll Engine Math Accuracy
    const emp = INITIAL_EMPLOYEES[0];
    const slip = calculatePayslip({
      employee: emp,
      payPeriod: 'Test Period',
      allowances: [{ title: 'Bonus', amount: 500 }],
      deductions: [{ title: '401k', amount: 300 }]
    });
    const expectedNet = slip.grossSalary - 300 - slip.taxDeduction;
    const payrollPassed = Math.abs(slip.netSalary - expectedNet) < 0.01;
    results.push({
      name: 'HR Payroll Gross-to-Net Salary Math',
      category: 'Payroll',
      passed: payrollPassed,
      message: payrollPassed ? `Passed: Net Pay ($${slip.netSalary.toFixed(2)}) = Gross ($${slip.grossSalary.toFixed(2)}) - Deductions ($300) - Tax ($${slip.taxDeduction.toFixed(2)})` : 'Failed: Salary math variance detected'
    });

    // Test 4: Asset Depreciation Schedule Calculation
    const asset = INITIAL_ASSETS[0];
    const schedule = calculateStraightLineDepreciation(asset);
    const depPassed = schedule.length === asset.usefulLifeYears;
    results.push({
      name: 'Asset Straight-Line Depreciation Years Calculation',
      category: 'Assets',
      passed: depPassed,
      message: depPassed ? `Passed: Generated exact ${schedule.length}-year depreciation schedule matching useful life` : 'Failed: Schedule year mismatch'
    });

    setTestResults(results);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Documentation, Manual & Test Runner
            <span className="text-xs px-2 py-0.5 rounded bg-teal-950 text-teal-400 border border-teal-800/40">In-App Manual</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Explore platform architecture, domain engine design rules, and execute integrated unit test suites.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="success" icon={<Play className="w-4 h-4" />} onClick={runAllUnitTests}>
            Run Integrated Unit Tests
          </Button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        <button
          onClick={() => setDocTab('guide')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            docTab === 'guide'
              ? 'border-teal-500 text-teal-400 bg-teal-950/20'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Architecture & Domain Guide
        </button>
        <button
          onClick={() => setDocTab('tests')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            docTab === 'tests'
              ? 'border-teal-500 text-teal-400 bg-teal-950/20'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Executable Unit Test Suite ({testResults ? testResults.length : 0})
        </button>
      </div>

      {docTab === 'guide' && (
        <div className="space-y-6 text-xs text-gray-300">
          <Card title="1. Getting Started & System Architecture" subtitle="100% Local Enterprise Demo Platform">
            <div className="space-y-3 leading-relaxed">
              <p>ERPCore is built with standard web technologies (React, TypeScript, Tailwind CSS, IndexedDB). It is designed to run seamlessly in <strong>Local Demo Mode</strong> without external API keys, environment variables, or cloud database credentials.</p>
              <div className="p-3 rounded bg-gray-900 border border-gray-800 font-mono text-[11px] space-y-1">
                <p className="text-blue-400 font-bold">// Quick Start Instructions</p>
                <p>npm install</p>
                <p>npm run dev</p>
              </div>
            </div>
          </Card>

          <Card title="2. Double-Entry Accounting Rules" subtitle="Strict Ledger Integrity">
            <div className="space-y-3 leading-relaxed">
              <p>The Accounting Engine validates every journal entry. The sum of all Debit entries MUST equal the sum of all Credit entries:</p>
              <div className="p-3 rounded bg-blue-950/40 border border-blue-800 text-blue-300 font-mono text-center font-bold">
                Total Debits = Total Credits
              </div>
              <p>Invalid or unbalanced journal entries are rejected by the system guard before posting to the General Ledger.</p>
            </div>
          </Card>
        </div>
      )}

      {docTab === 'tests' && (
        <div className="space-y-6">
          <Card title="Integrated Unit Test Suite Runner" subtitle="Click 'Run Integrated Unit Tests' to execute domain logic verifications">
            <div className="space-y-4">
              {testResults ? (
                <div className="space-y-3">
                  {testResults.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-100">{t.name}</span>
                          <Badge variant="purple">{t.category}</Badge>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{t.message}</p>
                      </div>
                      <Badge variant={t.passed ? 'success' : 'danger'}>
                        {t.passed ? 'PASSED' : 'FAILED'}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <Play className="w-8 h-8 text-teal-500 mx-auto mb-2 opacity-50" />
                  <p>Click "Run Integrated Unit Tests" above to execute domain unit tests.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
