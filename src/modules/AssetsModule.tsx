import React, { useState, useEffect } from 'react';
import { Wrench, Calendar, DollarSign, Calculator } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { Asset } from '../types';
import * as Storage from '../lib/storage';
import { calculateStraightLineDepreciation, calculateDecliningBalanceDepreciation } from '../engine/depreciation';

export const AssetsModule: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const aList = await Storage.getAll<Asset>('assets');
    setAssets(aList);
    if (aList.length > 0) setSelectedAsset(aList[0]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const assetColumns: Column<Asset>[] = [
    { key: 'assetNumber', header: 'Asset #', accessor: (item) => <span className="font-mono text-orange-400 font-semibold">{item.assetNumber}</span> },
    { key: 'name', header: 'Asset Description', accessor: (item) => <span className="font-medium">{item.name}</span> },
    { key: 'category', header: 'Category', accessor: (item) => <Badge variant="neutral">{item.category.toUpperCase()}</Badge> },
    { key: 'purchaseCost', header: 'Purchase Cost ($)', accessor: (item) => <span className="font-mono">${item.purchaseCost.toLocaleString()}</span> },
    { key: 'accumulatedDepreciation', header: 'Accumulated Dep. ($)', accessor: (item) => <span className="font-mono text-rose-400">-${item.accumulatedDepreciation.toLocaleString()}</span> },
    { key: 'currentValue', header: 'Net Book Value ($)', accessor: (item) => <span className="font-mono font-bold text-emerald-400">${item.currentValue.toLocaleString()}</span> },
    { key: 'status', header: 'Status', accessor: (item) => <Badge variant="success">{item.status.toUpperCase()}</Badge> }
  ];

  const straightLineSchedule = selectedAsset ? calculateStraightLineDepreciation(selectedAsset) : [];
  const decliningSchedule = selectedAsset ? calculateDecliningBalanceDepreciation(selectedAsset) : [];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            Asset Register & Depreciation Engine
            <span className="text-xs px-2 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-800/40">Straight-Line & Declining Balance</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage fixed asset register, compute annual depreciation schedules, and track machine maintenance.</p>
        </div>
      </div>

      <DataGrid
        title="Fixed Asset Master Register"
        subtitle="Machinery, vehicles, IT hardware, and factory equipment"
        columns={assetColumns}
        data={assets}
        onRowClick={(item) => setSelectedAsset(item)}
        loading={loading}
      />

      {/* Selected Asset Depreciation Schedule Calculator */}
      {selectedAsset && (
        <Card title={`Depreciation Schedule for ${selectedAsset.name}`} subtitle={`Original Purchase Cost: $${selectedAsset.purchaseCost.toLocaleString()} • Salvage Value: $${selectedAsset.salvageValue.toLocaleString()} • Useful Life: ${selectedAsset.usefulLifeYears} Years`}>
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase text-blue-400 tracking-wider mb-2">Method 1: Straight-Line Depreciation Schedule</h4>
              <div className="overflow-x-auto">
                <table className="erp-table">
                  <thead>
                    <tr>
                      <th>Fiscal Year</th>
                      <th>Beginning Book Value ($)</th>
                      <th>Depreciation Charge ($)</th>
                      <th>Accumulated Depreciation ($)</th>
                      <th>Ending Book Value ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {straightLineSchedule.map((s) => (
                      <tr key={s.year}>
                        <td className="font-mono font-bold text-gray-200">{s.year}</td>
                        <td className="font-mono">${s.beginningValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-rose-400 font-semibold">${s.depreciationExpense.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-amber-400">${s.accumulatedDepreciation.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-emerald-400 font-bold">${s.endingValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase text-purple-400 tracking-wider mb-2">Method 2: Double Declining-Balance Depreciation Schedule (Accelerated)</h4>
              <div className="overflow-x-auto">
                <table className="erp-table">
                  <thead>
                    <tr>
                      <th>Fiscal Year</th>
                      <th>Beginning Book Value ($)</th>
                      <th>Depreciation Charge ($)</th>
                      <th>Accumulated Depreciation ($)</th>
                      <th>Ending Book Value ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decliningSchedule.map((s) => (
                      <tr key={s.year}>
                        <td className="font-mono font-bold text-gray-200">{s.year}</td>
                        <td className="font-mono">${s.beginningValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-rose-400 font-semibold">${s.depreciationExpense.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-amber-400">${s.accumulatedDepreciation.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                        <td className="font-mono text-purple-400 font-bold">${s.endingValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
