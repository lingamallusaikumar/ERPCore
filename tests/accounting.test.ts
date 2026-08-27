import { describe, it, expect } from 'vitest';
import { validateJournalEntryLines } from '../src/engine/accounting';

describe('Accounting Double-Entry Engine Unit Tests', () => {
  it('should validate balanced journal entry lines (Debits = Credits)', () => {
    const lines = [
      { id: 'l1', accountId: 'acc-1010', accountCode: '1010', accountName: 'Cash', debit: 5000, credit: 0 },
      { id: 'l2', accountId: 'acc-4010', accountCode: '4010', accountName: 'Revenue', debit: 0, credit: 5000 }
    ];

    const result = validateJournalEntryLines(lines);
    expect(result.valid).toBe(true);
    expect(result.totalDebit).toBe(5000);
    expect(result.totalCredit).toBe(5000);
  });

  it('should reject unbalanced journal entry lines', () => {
    const lines = [
      { id: 'l1', accountId: 'acc-1010', accountCode: '1010', accountName: 'Cash', debit: 5000, credit: 0 },
      { id: 'l2', accountId: 'acc-4010', accountCode: '4010', accountName: 'Revenue', debit: 0, credit: 4000 }
    ];

    const result = validateJournalEntryLines(lines);
    expect(result.valid).toBe(false);
    expect(result.message).toContain('Unbalanced journal entry rejected');
  });

  it('should require at least two lines for double-entry posting', () => {
    const lines = [
      { id: 'l1', accountId: 'acc-1010', accountCode: '1010', accountName: 'Cash', debit: 5000, credit: 0 }
    ];

    const result = validateJournalEntryLines(lines);
    expect(result.valid).toBe(false);
  });
});
