import React, { useEffect, useState } from 'react';
import { Search, FileText, UserPlus, ShoppingBag, PlusCircle, CreditCard, FolderPlus, BarChart2, Settings, ArrowRight } from 'lucide-react';
import { DomainModule } from '../../types';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (module: DomainModule) => void;
  onAction: (actionKey: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onAction
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onAction('toggle_command_palette');
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onAction]);

  if (!isOpen) return null;

  const commands = [
    { id: 'create_invoice', title: 'Create Customer Invoice', icon: <FileText className="w-4 h-4 text-blue-400" />, module: 'invoices' as DomainModule },
    { id: 'create_customer', title: 'Create New Customer Profile', icon: <UserPlus className="w-4 h-4 text-emerald-400" />, module: 'customers' as DomainModule },
    { id: 'create_product', title: 'Create Product Catalog Master', icon: <ShoppingBag className="w-4 h-4 text-purple-400" />, module: 'products' as DomainModule },
    { id: 'create_sales_order', title: 'Create Sales Order', icon: <PlusCircle className="w-4 h-4 text-cyan-400" />, module: 'sales_orders' as DomainModule },
    { id: 'create_po', title: 'Create Purchase Order', icon: <PlusCircle className="w-4 h-4 text-amber-400" />, module: 'purchase_orders' as DomainModule },
    { id: 'create_journal', title: 'Post Double-Entry Journal', icon: <CreditCard className="w-4 h-4 text-rose-400" />, module: 'accounting' as DomainModule },
    { id: 'create_project', title: 'Create Project & Tasks', icon: <FolderPlus className="w-4 h-4 text-indigo-400" />, module: 'projects' as DomainModule },
    { id: 'open_reports', title: 'Open Financial & BI Reports', icon: <BarChart2 className="w-4 h-4 text-emerald-400" />, module: 'reports' as DomainModule },
    { id: 'open_settings', title: 'Open System Administration', icon: <Settings className="w-4 h-4 text-gray-400" />, module: 'admin' as DomainModule }
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl glass-panel bg-gray-900/95 rounded-xl shadow-2xl border border-gray-700/80 overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-800">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search modules... (Ctrl+K)"
            className="w-full bg-transparent text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-800 rounded border border-gray-700">ESC</kbd>
        </div>

        {/* Command Options List */}
        <div className="max-h-80 overflow-y-auto p-2">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-3 py-1.5">Quick Actions & Navigation</p>
          {filteredCommands.map((cmd) => (
            <button
              key={cmd.id}
              onClick={() => {
                onNavigate(cmd.module);
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-gray-200 hover:bg-gray-800 hover:text-white transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gray-800/80 border border-gray-700/60">{cmd.icon}</div>
                <span className="font-medium">{cmd.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
            </button>
          ))}
          {filteredCommands.length === 0 && (
            <p className="text-xs text-gray-500 p-4 text-center">No matching command found</p>
          )}
        </div>
      </div>
    </div>
  );
};
