import React, { useState, useEffect } from 'react';
import { Truck, ShoppingCart, Plus, CheckCircle, Package } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { Supplier, PurchaseOrder, SupplierBill } from '../types';
import * as Storage from '../lib/storage';

export const ProcurementModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'suppliers' | 'pos' | 'bills'>('suppliers');
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [pos, setPos] = useState<PurchaseOrder[]>([]);
  const [bills, setBills] = useState<SupplierBill[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const sList = await Storage.getAll<Supplier>('suppliers');
    const poList = await Storage.getAll<PurchaseOrder>('purchaseOrders');
    const bList = await Storage.getAll<SupplierBill>('supplierBills');

    setSuppliers(sList);
    setPos(poList);
    setBills(bList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const supplierColumns: Column<Supplier>[] = [
    { key: 'supplierNumber', header: 'Supplier #', accessor: (item) => <span className="font-mono text-amber-400 font-semibold">{item.supplierNumber}</span> },
    { key: 'name', header: 'Supplier Organization', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'contactPerson', header: 'Contact Representative', accessor: (item) => item.contactPerson },
    { key: 'leadTimeDays', header: 'Lead Time', accessor: (item) => <span className="font-mono">{item.leadTimeDays} Days</span> },
    { key: 'rating', header: 'Vendor Rating', accessor: (item) => <span className="text-amber-400 font-bold">★ {item.rating}</span> },
    { key: 'outstandingBalance', header: 'Balance Payable ($)', accessor: (item) => <span className="font-mono font-semibold text-rose-400">${item.outstandingBalance.toLocaleString()}</span> },
    { key: 'status', header: 'Status', accessor: (item) => <Badge variant="success">{item.status.toUpperCase()}</Badge> }
  ];

  const poColumns: Column<PurchaseOrder>[] = [
    { key: 'poNumber', header: 'PO #', accessor: (item) => <span className="font-mono text-amber-400 font-semibold">{item.poNumber}</span> },
    { key: 'supplierName', header: 'Supplier Name', accessor: (item) => <span className="font-medium">{item.supplierName}</span> },
    { key: 'date', header: 'Order Date', accessor: (item) => item.date },
    { key: 'expectedDeliveryDate', header: 'Expected Delivery', accessor: (item) => item.expectedDeliveryDate },
    { key: 'grandTotal', header: 'PO Amount ($)', accessor: (item) => <span className="font-mono font-semibold">${item.grandTotal.toLocaleString()}</span> },
    { key: 'status', header: 'Receiving Status', accessor: (item) => <Badge variant={item.status === 'received' ? 'success' : 'warning'}>{item.status.toUpperCase()}</Badge> }
  ];

  const billColumns: Column<SupplierBill>[] = [
    { key: 'billNumber', header: 'Bill #', accessor: (item) => <span className="font-mono text-amber-400 font-semibold">{item.billNumber}</span> },
    { key: 'supplierName', header: 'Supplier Name', accessor: (item) => <span className="font-medium">{item.supplierName}</span> },
    { key: 'billDate', header: 'Bill Date', accessor: (item) => item.billDate },
    { key: 'dueDate', header: 'Due Date', accessor: (item) => item.dueDate },
    { key: 'grandTotal', header: 'Bill Total ($)', accessor: (item) => <span className="font-mono font-semibold">${item.grandTotal.toLocaleString()}</span> },
    { key: 'outstandingBalance', header: 'Balance Due ($)', accessor: (item) => <span className="font-mono font-semibold text-rose-400">${item.outstandingBalance.toLocaleString()}</span> },
    { key: 'status', header: 'Approval Status', accessor: (item) => <Badge variant={item.status === 'approved' ? 'info' : 'warning'}>{item.status.toUpperCase()}</Badge> }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Procurement & Purchasing Operations
            <span className="text-xs px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/40">Request → PO → Receipt → Bill</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage vendor suppliers, purchase order commitments, goods receipts, and vendor bill accounts payable.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['suppliers', 'pos', 'bills'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'suppliers' ? 'Supplier Master Directory' : t === 'pos' ? 'Purchase Orders' : 'Supplier Bills (AP)'}
          </button>
        ))}
      </div>

      {subTab === 'suppliers' && (
        <DataGrid
          title="Supplier Master Directory"
          subtitle="Vendor performance ratings, lead times, and payment terms"
          columns={supplierColumns}
          data={suppliers}
          loading={loading}
        />
      )}

      {subTab === 'pos' && (
        <DataGrid
          title="Purchase Orders Register"
          subtitle="Approved purchase orders submitted to component suppliers"
          columns={poColumns}
          data={pos}
          loading={loading}
        />
      )}

      {subTab === 'bills' && (
        <DataGrid
          title="Supplier Bills Register"
          subtitle="Vendor bills queued for Accounts Payable disbursement"
          columns={billColumns}
          data={bills}
          loading={loading}
        />
      )}
    </div>
  );
};
