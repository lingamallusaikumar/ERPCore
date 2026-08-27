import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from './Button';

export interface KanbanColumn<T> {
  id: string;
  title: string;
  badgeColor?: string;
  items: T[];
}

export interface KanbanBoardProps<T extends { id: string }> {
  columns: KanbanColumn<T>[];
  renderCard: (item: T) => React.ReactNode;
  onAddItem?: (columnId: string) => void;
  onMoveItem?: (itemId: string, targetColumnId: string) => void;
}

export function KanbanBoard<T extends { id: string }>({
  columns,
  renderCard,
  onAddItem
}: KanbanBoardProps<T>) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 items-start">
      {columns.map((col) => (
        <div
          key={col.id}
          className="w-80 shrink-0 glass-panel bg-gray-900/60 rounded-xl border border-gray-800 p-3 flex flex-col max-h-[75vh]"
        >
          {/* Column Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${col.badgeColor || 'bg-blue-500'}`} />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-200">{col.title}</h4>
              <span className="text-xs text-gray-400 font-mono bg-gray-800 px-1.5 py-0.5 rounded border border-gray-700">
                {col.items.length}
              </span>
            </div>
            {onAddItem && (
              <Button
                size="sm"
                variant="ghost"
                className="p-1 h-7 w-7 rounded-lg hover:bg-gray-800"
                onClick={() => onAddItem(col.id)}
              >
                <Plus className="w-3.5 h-3.5 text-gray-400" />
              </Button>
            )}
          </div>

          {/* Column Items */}
          <div className="overflow-y-auto space-y-3 flex-1 pr-1">
            {col.items.map((item) => (
              <div key={item.id} className="transition-transform hover:-translate-y-0.5">
                {renderCard(item)}
              </div>
            ))}
            {col.items.length === 0 && (
              <div className="p-6 border border-dashed border-gray-800 rounded-lg text-center text-xs text-gray-500">
                Empty Stage
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
