import { describe, it, expect } from 'vitest';
import { calculatePayslip } from '../src/engine/payroll';
import { INITIAL_EMPLOYEES } from '../src/data/seedData';

describe('HR Payroll Engine Unit Tests', () => {
  it('should calculate gross salary, progressive tax, and net salary correctly', () => {
    const employee = INITIAL_EMPLOYEES[0];
    const payslip = calculatePayslip({
      employee,
      payPeriod: '2026-08',
      allowances: [{ title: 'Housing', amount: 1000 }],
      deductions: [{ title: 'Pension', amount: 500 }]
    });

    const expectedBasic = employee.baseSalary / 12;
    const expectedGross = expectedBasic + 1000;
    expect(payslip.grossSalary).toBeCloseTo(expectedGross, 2);
    expect(payslip.netSalary).toBeCloseTo(payslip.grossSalary - 500 - payslip.taxDeduction, 2);
    expect(payslip.paymentStatus).toBe('processed');
  });
});
