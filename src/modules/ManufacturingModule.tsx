import React, { useState, useEffect } from 'react';
import { Factory, Cpu, Layers, AlertCircle, Play, CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { BOM, ManufacturingOrder } from '../types';
import * as Storage from '../lib/storage';
import { calculateMRPRequirementsForBOM, MRPRequirement } from '../engine/mrp';

export const ManufacturingModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'bom' | 'mrp' | 'orders'>('bom');
  const [boms, setBoms] = useState<BOM[]>([]);
  const [orders, setOrders] = useState<ManufacturingOrder[]>([]);
  const [mrpResult, setMrpResult] = useState<{ bom: BOM; requirements: MRPRequirement[]; totalMaterialCost: number } | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const bList = await Storage.getAll<BOM>('boms');
    const mList = await Storage.getAll<ManufacturingOrder>('manufacturingOrders');
    setBoms(bList);
    setOrders(mList);

    if (bList.length > 0) {
      const mrp = await calculateMRPRequirementsForBOM(bList[0].id, 10);
      setMrpResult(mrp);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const moColumns: Column<ManufacturingOrder>[] = [
    { key: 'moNumber', header: 'MO #', accessor: (item) => <span className="font-mono text-rose-400 font-semibold">{item.moNumber}</span> },
    { key: 'productName', header: 'Target Assembly', accessor: (item) => <span className="font-medium">{item.productName}</span> },
    { key: 'plannedQuantity', header: 'Planned Qty', accessor: (item) => <span className="font-mono">{item.plannedQuantity}</span> },
    { key: 'producedQuantity', header: 'Produced Qty', accessor: (item) => <span className="font-mono font-bold text-emerald-400">{item.producedQuantity}</span> },
    { key: 'assignedWorkCenter', header: 'Assigned Line / Work Center', accessor: (item) => item.assignedWorkCenter },
    { key: 'status', header: 'Order Status', accessor: (item) => <Badge variant={item.status === 'completed' ? 'success' : 'warning'}>{item.status.toUpperCase()}</Badge> }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Manufacturing & MRP Production Planning Engine
            <span className="text-xs px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800/40">BOM → MRP → Production Order</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage Bills of Materials (BOM), explode material requirements via MRP, and execute manufacturing orders.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['bom', 'mrp', 'orders'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-rose-500 text-rose-400 bg-rose-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'bom' ? 'Bills of Materials (BOM)' : t === 'mrp' ? 'MRP Material Explosion' : 'Manufacturing Work Orders'}
          </button>
        ))}
      </div>

      {subTab === 'bom' && (
        <div className="space-y-6">
          {boms.map((bom) => (
            <Card key={bom.id} title={`${bom.bomNumber} - ${bom.productName}`} subtitle={`BOM Version ${bom.version} • Active Standard Cost: $${bom.totalCost.toFixed(2)}`}>
              <div className="space-y-4">
                {/* Component Breakdown */}
                <div>
                  <h4 className="text-xs font-semibold uppercase text-purple-400 tracking-wider mb-2">Component Ingredients</h4>
                  <div className="overflow-x-auto">
                    <table className="erp-table">
                      <thead>
                        <tr>
                          <th>Component SKU</th>
                          <th>Description</th>
                          <th>Qty Required</th>
                          <th>Unit Cost ($)</th>
                          <th>Total Component Cost ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bom.components.map((c) => (
                          <tr key={c.id}>
                            <td className="font-mono text-purple-400">{c.sku}</td>
                            <td className="font-medium">{c.productName}</td>
                            <td className="font-mono">{c.quantity} {c.unitOfMeasure}</td>
                            <td className="font-mono">${c.unitCost.toFixed(2)}</td>
                            <td className="font-mono font-semibold">${c.totalCost.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Operations & Labor */}
                <div>
                  <h4 className="text-xs font-semibold uppercase text-rose-400 tracking-wider mb-2">Assembly & QA Operations</h4>
                  <div className="overflow-x-auto">
                    <table className="erp-table">
                      <thead>
                        <tr>
                          <th>Operation Step</th>
                          <th>Assigned Work Center</th>
                          <th>Standard Hours</th>
                          <th>Hourly Rate ($)</th>
                          <th>Total Operation Cost ($)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bom.operations.map((o) => (
                          <tr key={o.id}>
                            <td className="font-medium">{o.operationName}</td>
                            <td className="font-mono text-gray-400">{o.workCenterName}</td>
                            <td className="font-mono">{o.standardTimeHours} hrs</td>
                            <td className="font-mono">${o.hourlyRate.toFixed(2)}</td>
                            <td className="font-mono font-semibold">${o.totalLaborCost.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {subTab === 'mrp' && mrpResult && (
        <Card title={`MRP Recommendation for ${mrpResult.bom.productName}`} subtitle="Calculation based on 10 Planned Manufacturing Orders">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs p-3 bg-gray-900 rounded-lg border border-gray-800">
              <span className="text-gray-400">Total Material Cost Requirement:</span>
              <span className="font-mono text-xl font-bold text-emerald-400">${mrpResult.totalMaterialCost.toLocaleString()}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="erp-table">
                <thead>
                  <tr>
                    <th>Component SKU</th>
                    <th>Component Name</th>
                    <th>Required Qty</th>
                    <th>Current Warehouse Stock</th>
                    <th>Shortage Qty</th>
                    <th>Estimated Purchase Cost Needed ($)</th>
                    <th>Reorder Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {mrpResult.requirements.map((req, idx) => (
                    <tr key={idx}>
                      <td className="font-mono text-purple-400 font-semibold">{req.sku}</td>
                      <td className="font-medium">{req.productName}</td>
                      <td className="font-mono font-bold">{req.requiredQuantity}</td>
                      <td className="font-mono">{req.currentStock}</td>
                      <td className="font-mono text-rose-400 font-bold">{req.shortageQuantity}</td>
                      <td className="font-mono">${req.totalPurchaseCostNeeded.toLocaleString()}</td>
                      <td>
                        <Badge variant={req.reorderStatus === 'shortage' ? 'warning' : 'success'}>
                          {req.reorderStatus === 'shortage' ? 'CREATE PO' : 'STOCK SUFFICIENT'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {subTab === 'orders' && (
        <DataGrid
          title="Manufacturing Orders Register"
          subtitle="Shop-floor work orders in production assembly"
          columns={moColumns}
          data={orders}
          loading={loading}
        />
      )}
    </div>
  );
};
