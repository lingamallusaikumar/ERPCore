import React from 'react';
import { X, Bell, CheckCircle2, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { Notification } from '../../types';

export interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAllRead: () => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead
}) => {
  if (!isOpen) return null;

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-rose-400" />;
      default: return <Info className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-96 glass-panel bg-gray-900 border-l border-gray-800 h-full flex flex-col shadow-2xl">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-semibold text-gray-100">Notifications Center</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onMarkAllRead}
              className="text-xs text-blue-400 hover:underline cursor-pointer"
            >
              Mark all read
            </button>
            <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-100 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-3 rounded-lg border transition-colors ${
                notif.read ? 'bg-gray-900/40 border-gray-800 opacity-70' : 'bg-gray-800/80 border-gray-700'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5">{getIcon(notif.type)}</div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-200">{notif.title}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">{notif.message}</p>
                  <p className="text-[10px] text-gray-500 mt-2">{new Date(notif.timestamp).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <p className="text-xs text-gray-500 text-center py-8">No notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};
