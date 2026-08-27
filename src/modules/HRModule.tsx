import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Calendar, Clock, Briefcase, FileText, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { Modal } from '../components/ui/Modal';
import { Employee, Department, Attendance, LeaveRequest, Payslip } from '../types';
import * as Storage from '../lib/storage';
import { calculatePayslip } from '../engine/payroll';

export const HRModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'employees' | 'attendance' | 'leave' | 'payroll'>('employees');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
  const [payslips, setPayslips] = useState<Payslip[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected Payslip Modal
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);

  const loadData = async () => {
    setLoading(true);
    const eList = await Storage.getAll<Employee>('employees');
    const dList = await Storage.getAll<Department>('departments');
    const aList = await Storage.getAll<Attendance>('attendance');
    const lList = await Storage.getAll<LeaveRequest>('leaveRequests');
    const pList = await Storage.getAll<Payslip>('payslips');

    setEmployees(eList);
    setDepartments(dList);
    setAttendance(aList);
    setLeaves(lList);
    setPayslips(pList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleGeneratePayslip = async (emp: Employee) => {
    const slip = calculatePayslip({
      employee: emp,
      payPeriod: 'August 2026',
      allowances: [{ title: 'Executive Health & Wellness', amount: 800 }],
      deductions: [{ title: '401k Plan', amount: 750 }]
    });

    await Storage.saveItem('payslips', slip);
    setSelectedPayslip(slip);
    loadData();
  };

  const empColumns: Column<Employee>[] = [
    { key: 'employeeNumber', header: 'Emp #', accessor: (item) => <span className="font-mono text-indigo-400 font-semibold">{item.employeeNumber}</span> },
    { key: 'firstName', header: 'Employee Name', accessor: (item) => (
      <div className="flex items-center gap-2">
        <img src={item.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
        <span className="font-medium">{item.firstName} {item.lastName}</span>
      </div>
    ) },
    { key: 'jobTitle', header: 'Job Title', accessor: (item) => item.jobTitle },
    { key: 'departmentName', header: 'Department', accessor: (item) => <Badge variant="purple">{item.departmentName}</Badge> },
    { key: 'baseSalary', header: 'Annual Base Salary ($)', accessor: (item) => <span className="font-mono font-semibold text-emerald-400">${item.baseSalary.toLocaleString()}</span> },
    { key: 'status', header: 'Employment Status', accessor: (item) => <Badge variant="success">{item.status.toUpperCase()}</Badge> },
    { key: 'actions', header: 'Actions', accessor: (item) => (
      <Button size="sm" variant="outline" onClick={() => handleGeneratePayslip(item)}>
        Generate Payslip
      </Button>
    ) }
  ];

  const payslipColumns: Column<Payslip>[] = [
    { key: 'payslipNumber', header: 'Payslip #', accessor: (item) => <span className="font-mono text-indigo-400 font-semibold">{item.payslipNumber}</span> },
    { key: 'employeeName', header: 'Employee', accessor: (item) => <span className="font-medium">{item.employeeName}</span> },
    { key: 'payPeriod', header: 'Pay Period', accessor: (item) => item.payPeriod },
    { key: 'grossSalary', header: 'Gross Pay ($)', accessor: (item) => <span className="font-mono">${item.grossSalary.toLocaleString()}</span> },
    { key: 'taxDeduction', header: 'Tax Withheld ($)', accessor: (item) => <span className="font-mono text-rose-400">${item.taxDeduction.toLocaleString()}</span> },
    { key: 'netSalary', header: 'Net Pay Disbursed ($)', accessor: (item) => <span className="font-mono font-bold text-emerald-400">${item.netSalary.toLocaleString()}</span> },
    { key: 'paymentStatus', header: 'Status', accessor: (item) => <Badge variant="success">{item.paymentStatus.toUpperCase()}</Badge> },
    { key: 'view', header: 'View', accessor: (item) => (
      <Button size="sm" variant="ghost" onClick={() => setSelectedPayslip(item)}>
        View
      </Button>
    ) }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Human Resources & Payroll Engine
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">Demo Payroll — Local Calculations</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage staff directory, org structure, attendance records, leave approvals, and tax payslips.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['employees', 'attendance', 'leave', 'payroll'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-indigo-500 text-indigo-400 bg-indigo-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'employees' ? 'Employee Directory' : t === 'attendance' ? 'Daily Attendance' : t === 'leave' ? 'Leave Requests' : 'Payroll Engine'}
          </button>
        ))}
      </div>

      {subTab === 'employees' && (
        <DataGrid
          title="Employee Master Directory"
          subtitle="Staff profiles, compensation details, and department allocations"
          columns={empColumns}
          data={employees}
          loading={loading}
        />
      )}

      {subTab === 'attendance' && (
        <Card title="Attendance & Working Hours Log" subtitle="Daily clock-in/out records and overtime tracking">
          <div className="overflow-x-auto">
            <table className="erp-table">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Work Hours</th>
                  <th>Overtime Hours</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a) => (
                  <tr key={a.id}>
                    <td className="font-medium">{a.employeeName}</td>
                    <td className="font-mono text-xs">{a.date}</td>
                    <td className="font-mono text-emerald-400">{a.checkIn}</td>
                    <td className="font-mono text-rose-400">{a.checkOut}</td>
                    <td className="font-mono font-bold">{a.workHours} hrs</td>
                    <td className="font-mono text-amber-400">{a.overtimeHours} hrs</td>
                    <td><Badge variant="success">{a.status.toUpperCase()}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {subTab === 'leave' && (
        <Card title="Employee Leave Calendar & Requests" subtitle="Paid annual, sick, and personal leave requests">
          <div className="overflow-x-auto">
            <table className="erp-table">
              <thead>
                <tr>
                  <th>Request #</th>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Duration</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((l) => (
                  <tr key={l.id}>
                    <td className="font-mono text-indigo-400">{l.requestNumber}</td>
                    <td className="font-medium">{l.employeeName}</td>
                    <td><Badge variant="info">{l.leaveType.toUpperCase()}</Badge></td>
                    <td className="font-mono">{l.startDate}</td>
                    <td className="font-mono">{l.endDate}</td>
                    <td className="font-mono font-bold">{l.daysCount} Days</td>
                    <td className="text-gray-400 text-xs">{l.reason}</td>
                    <td><Badge variant="success">{l.status.toUpperCase()}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {subTab === 'payroll' && (
        <DataGrid
          title="Payroll Disbursal Register"
          subtitle="Gross salary, allowances, tax withholdings, and net salary slips"
          columns={payslipColumns}
          data={payslips}
          loading={loading}
        />
      )}

      {/* Selected Payslip Detail Modal */}
      {selectedPayslip && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedPayslip(null)}
          title={`Employee Payslip — ${selectedPayslip.payslipNumber}`}
          subtitle={`Pay Period: ${selectedPayslip.payPeriod}`}
          footer={<Button variant="outline" onClick={() => setSelectedPayslip(null)}>Close</Button>}
        >
          <div className="space-y-4 p-2 bg-gray-950/80 rounded-lg border border-gray-800 text-xs">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Employee Name:</span>
              <span className="font-bold text-gray-100">{selectedPayslip.employeeName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Basic Salary (Monthly):</span>
              <span className="font-mono font-semibold">${selectedPayslip.basicSalary.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Gross Salary (Inc Allowances):</span>
              <span className="font-mono font-semibold text-blue-400">${selectedPayslip.grossSalary.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">Progressive Tax Withheld:</span>
              <span className="font-mono font-semibold text-rose-400">-${selectedPayslip.taxDeduction.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 text-sm font-bold bg-emerald-950/40 p-2 rounded text-emerald-400 border border-emerald-800/40">
              <span>Net Disbursed Pay:</span>
              <span className="font-mono">${selectedPayslip.netSalary.toFixed(2)}</span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
