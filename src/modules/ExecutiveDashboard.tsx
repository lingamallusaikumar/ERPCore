import React from 'react';
import { 
  DollarSign, TrendingUp, ShoppingBag, Package, Users, CheckCircle, AlertCircle, ArrowUpRight, Plus, RefreshCw, Zap
} from 'lucide-react';
import { MetricCard } from '../components/ui/MetricCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { DomainModule } from '../types';

export interface ExecutiveDashboardProps {
  onNavigate: (module: DomainModule) => void;
  onTriggerSimulation: () => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  onNavigate,
  onTriggerSimulation
}) => {
  const chartData = [
    { month: 'Jan', revenue: 420000, expenses: 280000, profit: 140000, cash: 1200000 },
    { month: 'Feb', revenue: 490000, expenses: 310000, profit: 180000, cash: 1310000 },
    { month: 'Mar', revenue: 580000, expenses: 340000, profit: 240000, cash: 1420000 },
    { month: 'Apr', revenue: 510000, expenses: 320000, profit: 190000, cash: 1390000 },
    { month: 'May', revenue: 640000, expenses: 390000, profit: 250000, cash: 1480000 },
    { month: 'Jun', revenue: 720000, expenses: 410000, profit: 310000, cash: 1560000 },
    { month: 'Jul', revenue: 810000, expenses: 450000, profit: 360000, cash: 1680000 },
    { month: 'Aug', revenue: 890000, expenses: 480000, profit: 410000, cash: 1835000 }
  ];

  const salesByProductData = [
    { name: 'Node Server X100', sales: 425000 },
    { name: 'IoT Gateway G500', sales: 180000 },
    { name: 'Thermal Probes', sales: 65000 },
    { name: 'Support Contracts', sales: 220000 }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header Banner */}
      <div className="glass-panel rounded-xl p-6 border border-gray-800 bg-gradient-to-r from-blue-950/40 via-gray-900/60 to-purple-950/40 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Acme Enterprise Command Center
            <span className="text-xs px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">Fiscal Year 2026</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Real-time financial performance, inventory valuation, active sales orders, and pending approval workflows.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="success"
            size="sm"
            icon={<Zap className="w-4 h-4" />}
            onClick={onTriggerSimulation}
          >
            Run Business Simulation Flow
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={<Plus className="w-4 h-4" />}
            onClick={() => onNavigate('invoices')}
          >
            New Invoice
          </Button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue YTD"
          value="$4,270,000"
          change={14.2}
          icon={<DollarSign className="w-5 h-5" />}
          subtitle="Operating Product & Service Sales"
        />
        <MetricCard
          title="Net Gross Profit"
          value="$1,600,000"
          change={8.5}
          icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
          subtitle="Gross Profit Margin 37.4%"
        />
        <MetricCard
          title="Cash Balance (Bank)"
          value="$1,835,000"
          change={5.1}
          icon={<CheckCircle className="w-5 h-5 text-cyan-400" />}
          subtitle="Operating & Payroll Accounts"
        />
        <MetricCard
          title="Inventory Valuation"
          value="$1,300,000"
          change={-2.4}
          icon={<Package className="w-5 h-5 text-amber-400" />}
          subtitle="Finished Goods & Components"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue vs Expense Trend Chart */}
        <Card className="lg:col-span-2" title="Financial Performance & Cash Flow Trend" subtitle="Monthly Revenue, Expenses & Net Profit Trajectory">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
                <YAxis stroke="#9ca3af" fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRev)" name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#f43f5e" fillOpacity={1} fill="url(#colorExp)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Sales by Product Line */}
        <Card title="Sales Revenue Breakdown" subtitle="By Key Product & Service Categories">
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByProductData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis type="number" stroke="#9ca3af" fontSize={10} tickFormatter={(v) => `$${v / 1000}k`} />
                <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={10} width={100} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                <Bar dataKey="sales" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Sales ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Operational Widgets Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AR & AP Aging Summary */}
        <Card title="AR & AP Aging Balance" subtitle="Outstanding Receivables vs Payables">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Accounts Receivable (AR)</span>
                <span className="font-semibold text-emerald-400">$642,000.00</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500 h-full" style={{ width: '65%' }} title="Current 0-30 days ($417k)" />
                <div className="bg-amber-500 h-full" style={{ width: '25%' }} title="31-60 days ($160k)" />
                <div className="bg-rose-500 h-full" style={{ width: '10%' }} title="60+ days overdue ($65k)" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Accounts Payable (AP)</span>
                <span className="font-semibold text-rose-400">$385,000.00</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden flex">
                <div className="bg-blue-500 h-full" style={{ width: '75%' }} title="Due Net 30 ($288k)" />
                <div className="bg-rose-500 h-full" style={{ width: '25%' }} title="Due Net 15 ($97k)" />
              </div>
            </div>

            <div className="pt-2 border-t border-gray-800 flex justify-between text-xs">
              <span className="text-gray-400">Net Working Capital</span>
              <span className="font-bold text-blue-400">$257,000.00</span>
            </div>
          </div>
        </Card>

        {/* Pending Approvals Inbox */}
        <Card title="Pending Approvals Inbox" subtitle="Invoices, POs & Leave Requests" action={
          <Button size="sm" variant="ghost" onClick={() => onNavigate('approvals')}>View All</Button>
        }>
          <div className="space-y-3">
            <div className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-gray-200">Invoice INV-2026-088 ($174,802.50)</p>
                <p className="text-gray-400 text-[10px]">Apex Dynamics Corp • High Value Rule</p>
              </div>
              <Badge variant="warning">Pending Approval</Badge>
            </div>

            <div className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-gray-200">Purchase Order PO-2026-044 ($84,000)</p>
                <p className="text-gray-400 text-[10px]">Global Silicon • Component Supply</p>
              </div>
              <Badge variant="info">Under Review</Badge>
            </div>
          </div>
        </Card>

        {/* Quick Operations Navigation */}
        <Card title="Quick Operations Launcher" subtitle="Direct access to core ERP workflows">
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => onNavigate('accounting')} className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 hover:border-gray-700 text-left hover:bg-gray-800 transition-colors">
              <p className="text-xs font-semibold text-blue-400">General Ledger</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Post journals & trial balance</p>
            </button>
            <button onClick={() => onNavigate('crm')} className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 hover:border-gray-700 text-left hover:bg-gray-800 transition-colors">
              <p className="text-xs font-semibold text-emerald-400">CRM Kanban</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Sales pipeline opportunities</p>
            </button>
            <button onClick={() => onNavigate('manufacturing_orders')} className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 hover:border-gray-700 text-left hover:bg-gray-800 transition-colors">
              <p className="text-xs font-semibold text-rose-400">Manufacturing</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Production planning & BOMs</p>
            </button>
            <button onClick={() => onNavigate('payroll')} className="p-3 rounded-lg bg-gray-900/80 border border-gray-800 hover:border-gray-700 text-left hover:bg-gray-800 transition-colors">
              <p className="text-xs font-semibold text-purple-400">Payroll Engine</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Calculate staff payslips</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
