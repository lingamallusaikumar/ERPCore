import React, { useState } from 'react';
import { BarChart3, Download, Printer, Filter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

export const ReportsModule: React.FC = () => {
  const [reportCategory, setReportCategory] = useState<'finance' | 'sales' | 'inventory' | 'hr'>('finance');

  const salesByCustomer = [
    { name: 'Apex Dynamics', revenue: 425000 },
    { name: 'Nexus Tech', revenue: 245000 },
    { name: 'Synergy Logistics', revenue: 120000 }
  ];

  const inventoryCategoryValuation = [
    { name: 'Hardware Systems', value: 890000 },
    { name: 'IoT Devices', value: 310000 },
    { name: 'Components', value: 100000 }
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Reports & Business Intelligence Suite
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">Executive BI Analytics</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Multi-dimensional enterprise reporting with date filtering, CSV export, and print view capabilities.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" icon={<Printer className="w-4 h-4" />} onClick={handlePrint}>
            Print Report View
          </Button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['finance', 'sales', 'inventory', 'hr'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setReportCategory(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              reportCategory === t
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'finance' ? 'Financial Statements BI' : t === 'sales' ? 'Sales Analytics' : t === 'inventory' ? 'Inventory Valuation' : 'HR & Payroll BI'}
          </button>
        ))}
      </div>

      {reportCategory === 'finance' && (
        <Card title="Financial Performance Executive BI Summary" subtitle="Fiscal Year 2026 Profitability Metrics">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <p className="text-xs text-gray-400">Total Operating Revenue</p>
                <p className="text-xl font-bold font-mono text-blue-400 mt-1">$4,270,000.00</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <p className="text-xs text-gray-400">Total Operating Expenses</p>
                <p className="text-xl font-bold font-mono text-rose-400 mt-1">$2,670,000.00</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <p className="text-xs text-gray-400">Net Profit</p>
                <p className="text-xl font-bold font-mono text-emerald-400 mt-1">$1,600,000.00</p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {reportCategory === 'sales' && (
        <Card title="Sales Revenue by Customer BI Analysis" subtitle="Key Enterprise Account Contribution">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByCustomer}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.4} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={11} />
                <YAxis stroke="#9ca3af" fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {reportCategory === 'inventory' && (
        <Card title="Inventory Asset Valuation Distribution" subtitle="Stock Value Breakdown by Product Category">
          <div className="h-72 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={inventoryCategoryValuation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {inventoryCategoryValuation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </div>
  );
};
