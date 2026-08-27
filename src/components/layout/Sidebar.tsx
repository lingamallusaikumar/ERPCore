import React, { useState } from 'react';
import { 
  LayoutDashboard, DollarSign, ShoppingCart, Truck, Package, Factory, Users, 
  Briefcase, Wrench, BarChart3, ShieldCheck, ChevronDown, ChevronRight, BookOpen, Layers
} from 'lucide-react';
import { DomainModule } from '../../types';

export interface SidebarProps {
  activeModule: DomainModule;
  onSelectModule: (module: DomainModule) => void;
  collapsed?: boolean;
}

interface NavGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  module: DomainModule;
  children?: { id: DomainModule; title: string }[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  onSelectModule
}) => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    finance: true,
    sales: true,
    inventory: true
  });

  const navGroups: NavGroup[] = [
    { id: 'dash', title: 'Executive Dashboard', icon: <LayoutDashboard className="w-4 h-4 text-blue-400" />, module: 'dashboard' },
    {
      id: 'finance',
      title: 'Finance & Accounting',
      icon: <DollarSign className="w-4 h-4 text-emerald-400" />,
      module: 'finance',
      children: [
        { id: 'finance', title: 'Financial Overview' },
        { id: 'accounting', title: 'General Ledger & Chart of Accounts' },
        { id: 'ar', title: 'Accounts Receivable (AR)' },
        { id: 'ap', title: 'Accounts Payable (AP)' },
        { id: 'banking', title: 'Banking Simulator' },
        { id: 'budgets', title: 'Budgets & Cost Centers' }
      ]
    },
    {
      id: 'sales',
      title: 'Sales & CRM',
      icon: <ShoppingCart className="w-4 h-4 text-cyan-400" />,
      module: 'sales',
      children: [
        { id: 'crm', title: 'CRM & Pipeline Kanban' },
        { id: 'quotations', title: 'Quotations' },
        { id: 'sales_orders', title: 'Sales Orders' },
        { id: 'customers', title: 'Customer Directory' },
        { id: 'deliveries', title: 'Deliveries' },
        { id: 'invoices', title: 'Customer Invoices' },
        { id: 'payments', title: 'Customer Payments' }
      ]
    },
    {
      id: 'procurement',
      title: 'Procurement',
      icon: <Truck className="w-4 h-4 text-amber-400" />,
      module: 'procurement',
      children: [
        { id: 'suppliers', title: 'Supplier Directory' },
        { id: 'purchase_requests', title: 'Purchase Requests & RFQs' },
        { id: 'purchase_orders', title: 'Purchase Orders' },
        { id: 'goods_receipts', title: 'Goods Receipts' },
        { id: 'supplier_bills', title: 'Supplier Bills' }
      ]
    },
    {
      id: 'inventory',
      title: 'Inventory & Warehouse',
      icon: <Package className="w-4 h-4 text-purple-400" />,
      module: 'inventory',
      children: [
        { id: 'products', title: 'Product Catalog' },
        { id: 'warehouses', title: 'Warehouses & 2D Layout' },
        { id: 'stock', title: 'Stock Movement Logs' },
        { id: 'transfers', title: 'Stock Transfers & Batches' }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: <Factory className="w-4 h-4 text-rose-400" />,
      module: 'manufacturing',
      children: [
        { id: 'bom', title: 'Bills of Materials (BOM)' },
        { id: 'production_planning', title: 'MRP Production Planning' },
        { id: 'manufacturing_orders', title: 'Manufacturing Orders' }
      ]
    },
    {
      id: 'hr',
      title: 'Human Resources',
      icon: <Users className="w-4 h-4 text-indigo-400" />,
      module: 'hr',
      children: [
        { id: 'employees', title: 'Employee Directory & Org Chart' },
        { id: 'attendance', title: 'Attendance & Clock-In' },
        { id: 'leave', title: 'Leave Requests' },
        { id: 'payroll', title: 'Payroll & Payslips Engine' },
        { id: 'recruitment', title: 'Recruitment ATS' }
      ]
    },
    {
      id: 'projects',
      title: 'Projects & Expenses',
      icon: <Briefcase className="w-4 h-4 text-blue-400" />,
      module: 'projects',
      children: [
        { id: 'projects', title: 'Project Portfolio' },
        { id: 'tasks', title: 'Task Kanban & Timesheets' },
        { id: 'expenses', title: 'Employee Expenses' }
      ]
    },
    {
      id: 'assets',
      title: 'Assets & Maintenance',
      icon: <Wrench className="w-4 h-4 text-orange-400" />,
      module: 'assets',
      children: [
        { id: 'assets', title: 'Asset Register & Depreciation' },
        { id: 'maintenance', title: 'Maintenance Orders' }
      ]
    },
    { id: 'workflows', title: 'Workflows & Approvals', icon: <Layers className="w-4 h-4 text-emerald-400" />, module: 'workflows' },
    { id: 'reports', title: 'Reports & Business Intelligence', icon: <BarChart3 className="w-4 h-4 text-cyan-400" />, module: 'reports' },
    { id: 'admin', title: 'Administration & RBAC', icon: <ShieldCheck className="w-4 h-4 text-gray-400" />, module: 'admin' },
    { id: 'docs', title: 'Documentation & Test Suite', icon: <BookOpen className="w-4 h-4 text-teal-400" />, module: 'docs' }
  ];

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  return (
    <aside className="w-64 glass-panel bg-gray-900/90 border-r border-gray-800 flex flex-col h-screen select-none shrink-0 z-30">
      {/* Brand Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
            E
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              ERPCore
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-blue-950 text-blue-400 rounded border border-blue-800/40">PRO</span>
            </h1>
            <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">Enterprise Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation Tree */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {navGroups.map((group) => {
          const hasChildren = group.children && group.children.length > 0;
          const isGroupOpen = openGroups[group.id];
          const isGroupActive = activeModule === group.module || (group.children && group.children.some((c) => c.id === activeModule));

          return (
            <div key={group.id} className="space-y-0.5">
              <button
                onClick={() => {
                  if (hasChildren) toggleGroup(group.id);
                  onSelectModule(group.module);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isGroupActive
                    ? 'bg-blue-950/60 text-blue-300 border border-blue-800/40'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {group.icon}
                  <span>{group.title}</span>
                </div>
                {hasChildren && (
                  isGroupOpen ? <ChevronDown className="w-3.5 h-3.5 text-gray-400" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                )}
              </button>

              {hasChildren && isGroupOpen && (
                <div className="pl-7 space-y-0.5 border-l border-gray-800 ml-4 py-1">
                  {group.children!.map((child) => {
                    const isChildActive = activeModule === child.id;
                    return (
                      <button
                        key={child.id}
                        onClick={() => onSelectModule(child.id)}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-[11px] transition-colors cursor-pointer ${
                          isChildActive
                            ? 'text-blue-400 font-semibold bg-blue-900/30'
                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
                        }`}
                      >
                        {child.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Demo Status Footer */}
      <div className="p-3 border-t border-gray-800 bg-gray-950/40">
        <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[10px] text-emerald-400">
          <span className="font-semibold uppercase tracking-wider">Local Demo Mode</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </aside>
  );
};
