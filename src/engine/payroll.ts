// ERPCore Payroll Calculation Engine

import { Employee, Payslip } from '../types';

export interface PayslipCalculationInput {
  employee: Employee;
  payPeriod: string;
  allowances: { title: string; amount: number }[];
  deductions: { title: string; amount: number }[];
  bonusAmount?: number;
}

export function calculatePayslip(input: PayslipCalculationInput): Payslip {
  const basicSalary = input.employee.baseSalary / 12;
  const allowancesTotal = input.allowances.reduce((sum, a) => sum + a.amount, 0) + (input.bonusAmount || 0);
  const deductionsTotal = input.deductions.reduce((sum, d) => sum + d.amount, 0);

  const grossSalary = basicSalary + allowancesTotal;

  // Progressive Tax Bracket Calculation (Simulated Local Tax Rules)
  let taxDeduction = 0;
  if (grossSalary <= 5000) {
    taxDeduction = grossSalary * 0.10;
  } else if (grossSalary <= 15000) {
    taxDeduction = 500 + (grossSalary - 5000) * 0.18;
  } else {
    taxDeduction = 2300 + (grossSalary - 15000) * 0.25;
  }

  const netSalary = grossSalary - deductionsTotal - taxDeduction;

  const payslipNumber = `SLIP-${input.payPeriod.replace(/\s+/g, '-')}-${Math.floor(100 + Math.random() * 900)}`;

  return {
    id: `pay-${Date.now()}`,
    payslipNumber,
    employeeId: input.employee.id,
    employeeName: `${input.employee.firstName} ${input.employee.lastName}`,
    departmentName: input.employee.departmentName,
    payPeriod: input.payPeriod,
    basicSalary,
    allowances: input.allowances,
    deductions: input.deductions,
    taxDeduction,
    grossSalary,
    netSalary,
    paymentStatus: 'processed',
    paymentDate: new Date().toISOString().split('T')[0]
  };
}
