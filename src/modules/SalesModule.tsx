import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Users, FileText, Plus, CheckCircle, ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { KanbanBoard } from '../components/ui/KanbanBoard';
import { Customer, Opportunity, Quotation, SalesOrder } from '../types';
import * as Storage from '../lib/storage';

export const SalesModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'crm' | 'quotations' | 'orders' | 'customers'>('crm');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [quotes, setQuotes] = useState<Quotation[]>([]);
  const [orders, setOrders] = useState<SalesOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const cList = await Storage.getAll<Customer>('customers');
    const oList = await Storage.getAll<Opportunity>('opportunities');
    const qList = await Storage.getAll<Quotation>('quotations');
    const sList = await Storage.getAll<SalesOrder>('salesOrders');

    setCustomers(cList);
    setOpportunities(oList);
    setQuotes(qList);
    setOrders(sList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const kanbanColumns = [
    { id: 'new', title: 'New Leads', badgeColor: 'bg-blue-500', items: opportunities.filter((o) => o.stage === 'new') },
    { id: 'qualification', title: 'Qualification', badgeColor: 'bg-indigo-500', items: opportunities.filter((o) => o.stage === 'qualification') },
    { id: 'proposal', title: 'Proposal Sent', badgeColor: 'bg-purple-500', items: opportunities.filter((o) => o.stage === 'proposal') },
    { id: 'negotiation', title: 'Negotiation', badgeColor: 'bg-amber-500', items: opportunities.filter((o) => o.stage === 'negotiation') },
    { id: 'closed_won', title: 'Closed Won', badgeColor: 'bg-emerald-500', items: opportunities.filter((o) => o.stage === 'closed_won') }
  ];

  const customerColumns: Column<Customer>[] = [
    { key: 'customerNumber', header: 'Customer #', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.customerNumber}</span> },
    { key: 'name', header: 'Customer / Company Name', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'email', header: 'Email Contact', accessor: (item) => <span className="text-gray-400">{item.email}</span> },
    { key: 'creditLimit', header: 'Credit Limit ($)', accessor: (item) => <span className="font-mono">${item.creditLimit.toLocaleString()}</span> },
    { key: 'outstandingBalance', header: 'Balance Due ($)', accessor: (item) => <span className="font-mono font-semibold text-amber-400">${item.outstandingBalance.toLocaleString()}</span> },
    { key: 'status', header: 'Status', accessor: (item) => <Badge variant="success">{item.status.toUpperCase()}</Badge> }
  ];

  const quoteColumns: Column<Quotation>[] = [
    { key: 'quoteNumber', header: 'Quote #', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.quoteNumber}</span> },
    { key: 'customerName', header: 'Customer', accessor: (item) => <span className="font-medium">{item.customerName}</span> },
    { key: 'date', header: 'Quote Date', accessor: (item) => item.date },
    { key: 'validUntil', header: 'Valid Until', accessor: (item) => item.validUntil },
    { key: 'grandTotal', header: 'Grand Total ($)', accessor: (item) => <span className="font-mono font-semibold">${item.grandTotal.toLocaleString()}</span> },
    { key: 'status', header: 'Status', accessor: (item) => <Badge variant={item.status === 'accepted' ? 'success' : 'info'}>{item.status.toUpperCase()}</Badge> }
  ];

  const orderColumns: Column<SalesOrder>[] = [
    { key: 'orderNumber', header: 'Order #', accessor: (item) => <span className="font-mono text-blue-400 font-semibold">{item.orderNumber}</span> },
    { key: 'customerName', header: 'Customer', accessor: (item) => <span className="font-medium">{item.customerName}</span> },
    { key: 'date', header: 'Order Date', accessor: (item) => item.date },
    { key: 'grandTotal', header: 'Order Amount ($)', accessor: (item) => <span className="font-mono font-semibold">${item.grandTotal.toLocaleString()}</span> },
    { key: 'status', header: 'Fulfillment Status', accessor: (item) => <Badge variant={item.status === 'delivered' ? 'success' : 'warning'}>{item.status.toUpperCase()}</Badge> }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Sales & CRM Operations Engine
            <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/40">Lead → Order → Invoice</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage CRM deal pipeline, quotations, sales order fulfillment, customer profiles, and credit terms.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['crm', 'quotations', 'orders', 'customers'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'crm' ? 'CRM Pipeline Kanban' : t === 'quotations' ? 'Quotations' : t === 'orders' ? 'Sales Orders' : 'Customer Directory'}
          </button>
        ))}
      </div>

      {/* CRM Kanban View */}
      {subTab === 'crm' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Drag or move opportunities through sales stages</span>
            <span className="font-semibold text-blue-400">Total Active Pipeline: $569,000.00</span>
          </div>
          <KanbanBoard
            columns={kanbanColumns}
            renderCard={(item) => (
              <Card className="p-3 bg-gray-900 border-gray-700/80 hover:border-blue-500 cursor-pointer">
                <h5 className="text-xs font-semibold text-gray-100">{item.title}</h5>
                <p className="text-[11px] text-gray-400 mt-1">{item.customerName}</p>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-800 text-[11px]">
                  <span className="font-mono font-bold text-emerald-400">${item.value.toLocaleString()}</span>
                  <span className="text-gray-500">{item.probability}% Win Prob</span>
                </div>
              </Card>
            )}
          />
        </div>
      )}

      {/* Quotations View */}
      {subTab === 'quotations' && (
        <DataGrid
          title="Quotations Register"
          subtitle="Formal customer price quotes and validity dates"
          columns={quoteColumns}
          data={quotes}
          loading={loading}
        />
      )}

      {/* Orders View */}
      {subTab === 'orders' && (
        <DataGrid
          title="Sales Orders Register"
          subtitle="Confirmed customer orders queued for inventory fulfillment"
          columns={orderColumns}
          data={orders}
          loading={loading}
        />
      )}

      {/* Customer Directory View */}
      {subTab === 'customers' && (
        <DataGrid
          title="Customer 360° Directory"
          subtitle="Master records for enterprise customer accounts and credit limits"
          columns={customerColumns}
          data={customers}
          loading={loading}
        />
      )}
    </div>
  );
};
