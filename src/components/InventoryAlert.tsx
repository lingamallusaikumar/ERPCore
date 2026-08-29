import React from 'react';

export interface InventoryItem {
  id: string;
  name: string;
  currentStock: number;
  reorderPoint: number;
}

interface InventoryAlertProps {
  items: InventoryItem[];
}

export const InventoryAlert: React.FC<InventoryAlertProps> = ({ items }) => {
  const lowStockItems = items.filter(item => item.currentStock <= item.reorderPoint);

  if (lowStockItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 text-amber-800 rounded">
      <div className="flex items-center font-bold text-lg mb-2">
        <span className="mr-2">⚠️</span> Low Stock Alert ({lowStockItems.length} items)
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {lowStockItems.map(item => (
          <li key={item.id}>
            <span className="font-semibold">{item.name}</span>: {item.currentStock} units remaining (Reorder threshold: {item.reorderPoint})
          </li>
        ))}
      </ul>
    </div>
  );
};
