import { describe, it, expect } from 'vitest';
import { calculateSalesTax, formatCurrency } from '../src/lib/financialUtils';
import { convertToCSV } from '../src/lib/exportUtils';

describe('Financial Utils', () => {
  it('should calculate sales tax correctly', () => {
    const result = calculateSalesTax(100, 8.5);
    expect(result.subtotal).toBe(100);
    expect(result.taxAmount).toBe(8.5);
    expect(result.total).toBe(108.5);
  });

  it('should format currency values', () => {
    const formatted = formatCurrency(1254.5, 'USD', 'en-US');
    expect(formatted).toContain('$1,254.50');
  });

  it('should convert tabular data to CSV', () => {
    const data = [
      { id: '1', name: 'Widget A', price: 10.5 },
      { id: '2', name: 'Widget B', price: 20.0 }
    ];
    const csv = convertToCSV(data);
    expect(csv).toContain('id,name,price');
    expect(csv).toContain('1,Widget A,10.5');
  });
});
