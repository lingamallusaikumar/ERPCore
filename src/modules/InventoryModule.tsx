import React, { useState, useEffect } from 'react';
import { Package, MapPin, ArrowRightLeft, AlertTriangle, Layers, Eye } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { Product, Warehouse, StockMovement, InventoryItem } from '../types';
import * as Storage from '../lib/storage';

export const InventoryModule: React.FC = () => {
  const [subTab, setSubTab] = useState<'products' | 'warehouses' | 'stock' | 'batches'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [movements, setMovements] = useState<StockMovement[]>([]);
  const [batches, setBatches] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const pList = await Storage.getAll<Product>('products');
    const wList = await Storage.getAll<Warehouse>('warehouses');
    const mList = await Storage.getAll<StockMovement>('stockMovements');
    const bList = await Storage.getAll<InventoryItem>('inventories');

    setProducts(pList);
    setWarehouses(wList);
    setMovements(mList);
    setBatches(bList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const productColumns: Column<Product>[] = [
    { key: 'sku', header: 'SKU Code', accessor: (item) => <span className="font-mono text-purple-400 font-semibold">{item.sku}</span> },
    { key: 'name', header: 'Product Name', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'category', header: 'Category', accessor: (item) => <Badge variant="purple">{item.category}</Badge> },
    { key: 'purchasePrice', header: 'Buy Price ($)', accessor: (item) => <span className="font-mono">${item.purchasePrice.toFixed(2)}</span> },
    { key: 'salesPrice', header: 'Sell Price ($)', accessor: (item) => <span className="font-mono font-semibold text-emerald-400">${item.salesPrice.toFixed(2)}</span> },
    { key: 'currentStock', header: 'Current Stock', accessor: (item) => (
      <span className={`font-mono font-bold ${item.currentStock <= item.reorderLevel ? 'text-amber-400' : 'text-gray-100'}`}>
        {item.currentStock} {item.unitOfMeasure}
      </span>
    ) },
    { key: 'reorderLevel', header: 'Reorder Point', accessor: (item) => <span className="font-mono text-gray-400">{item.reorderLevel}</span> }
  ];

  const movementColumns: Column<StockMovement>[] = [
    { key: 'movementNumber', header: 'Movement #', accessor: (item) => <span className="font-mono text-purple-400 font-semibold">{item.movementNumber}</span> },
    { key: 'type', header: 'Movement Type', accessor: (item) => (
      <Badge variant={item.type === 'receipt' ? 'success' : item.type === 'issue' ? 'danger' : 'info'}>
        {item.type.toUpperCase()}
      </Badge>
    ) },
    { key: 'productName', header: 'Product', accessor: (item) => item.productName },
    { key: 'quantity', header: 'Qty', accessor: (item) => <span className="font-mono font-bold">{item.quantity}</span> },
    { key: 'reference', header: 'Reference Doc', accessor: (item) => <span className="font-mono text-blue-400">{item.reference}</span> },
    { key: 'date', header: 'Date', accessor: (item) => item.date },
    { key: 'performedBy', header: 'Performed By', accessor: (item) => item.performedBy }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Inventory & Warehouse Management
            <span className="text-xs px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800/40">Multi-Warehouse Stock</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage product catalog, multi-location warehouse layouts, stock movements, batch/serial numbers, and reorder levels.</p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['products', 'warehouses', 'stock', 'batches'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-purple-500 text-purple-400 bg-purple-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'products' ? 'Product Master Catalog' : t === 'warehouses' ? '2D Warehouse Layout Map' : t === 'stock' ? 'Stock Movement Audit Logs' : 'Batch & Serial Tracking'}
          </button>
        ))}
      </div>

      {subTab === 'products' && (
        <DataGrid
          title="Product Master Catalog"
          subtitle="All raw materials, component probes, and finished enterprise servers"
          columns={productColumns}
          data={products}
          loading={loading}
        />
      )}

      {subTab === 'warehouses' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {warehouses.map((wh) => (
              <Card key={wh.id} title={wh.name} subtitle={`${wh.code} • Manager: ${wh.manager}`}>
                <div className="space-y-4">
                  <p className="text-xs text-gray-400">{wh.address}</p>

                  <div className="flex justify-between text-xs font-semibold pt-2 border-t border-gray-800">
                    <span className="text-gray-400">Total Stock Value:</span>
                    <span className="font-mono text-emerald-400">${wh.totalStockValue.toLocaleString()}</span>
                  </div>

                  {/* Visual 2D Layout Map */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">Aisle & Bin Occupancy Map</p>
                    <div className="grid grid-cols-2 gap-2">
                      {wh.locations.map((loc) => {
                        const occupancyPercent = Math.round((loc.occupied / loc.capacity) * 100);
                        return (
                          <div key={loc.id} className="p-2.5 rounded bg-gray-900 border border-gray-800 text-xs space-y-1">
                            <div className="flex justify-between font-mono font-semibold text-purple-300 text-[11px]">
                              <span>{loc.locationCode}</span>
                              <span>{occupancyPercent}%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-purple-500 h-full" style={{ width: `${occupancyPercent}%` }} />
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                              <span>Cap: {loc.capacity}</span>
                              <span>Occ: {loc.occupied}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {subTab === 'stock' && (
        <DataGrid
          title="Stock Movement Audit Logs"
          subtitle="Immutable receipts, issues, transfers, and adjustments"
          columns={movementColumns}
          data={movements}
          loading={loading}
        />
      )}

      {subTab === 'batches' && (
        <Card title="Batch & Serial Number Tracking Register" subtitle="Traceability for manufacturing lots and warranty expirations">
          <div className="overflow-x-auto">
            <table className="erp-table">
              <thead>
                <tr>
                  <th>Product SKU</th>
                  <th>Product Name</th>
                  <th>Batch Number</th>
                  <th>Serial Number</th>
                  <th>Quantity</th>
                  <th>Expiration Date</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((b) => (
                  <tr key={b.id}>
                    <td className="font-mono text-purple-400 font-semibold">{b.sku}</td>
                    <td className="font-medium">{b.productName}</td>
                    <td className="font-mono text-amber-400">{b.batchNumber || '-'}</td>
                    <td className="font-mono text-cyan-400">{b.serialNumber || '-'}</td>
                    <td className="font-mono font-bold">{b.quantity}</td>
                    <td className="font-mono text-gray-400">{b.expirationDate || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};
