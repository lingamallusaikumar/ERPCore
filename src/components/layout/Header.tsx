import React, { useState } from 'react';
import { 
  Search, Bell, Moon, Sun, Building, User as UserIcon, ChevronDown, Command, RefreshCw, Zap
} from 'lucide-react';
import { DomainModule, User, Organization } from '../../types';
import { runSimulatedSaleFlow } from '../../engine/simulation';

export interface HeaderProps {
  activeModule: DomainModule;
  currentUser: User;
  organization: Organization;
  unreadNotifCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onToggleNotifications: () => void;
  onRefreshData: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeModule,
  currentUser,
  organization,
  unreadNotifCount,
  theme,
  onToggleTheme,
  onOpenCommandPalette,
  onToggleNotifications,
  onRefreshData
}) => {
  const [isSimulating, setIsSimulating] = useState(false);

  const formatModuleName = (mod: DomainModule): string => {
    return mod.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const handleTriggerSimulation = async () => {
    setIsSimulating(true);
    await runSimulatedSaleFlow();
    onRefreshData();
    setTimeout(() => setIsSimulating(false), 800);
  };

  return (
    <header className="h-16 glass-panel bg-gray-900/80 border-b border-gray-800 px-6 flex items-center justify-between z-20 shrink-0">
      {/* Left: Breadcrumbs & Module Context */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="text-gray-500 font-medium">{organization.name}</span>
          <span>/</span>
          <span className="text-gray-200 font-semibold uppercase tracking-wider">{formatModuleName(activeModule)}</span>
        </div>
      </div>

      {/* Center: Search & Command Palette Launcher */}
      <button
        onClick={onOpenCommandPalette}
        className="w-96 flex items-center justify-between px-3 py-1.5 rounded-lg bg-gray-900/90 border border-gray-700/80 text-xs text-gray-400 hover:border-gray-600 hover:text-gray-200 transition-all cursor-pointer shadow-inner"
      >
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-gray-400" />
          <span>Global Search customers, POs, invoices...</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono bg-gray-800 px-1.5 py-0.5 rounded border border-gray-700">
          <Command className="w-3 h-3" />
          <span>K</span>
        </div>
      </button>

      {/* Right: Actions, Simulation Trigger, Notifications, Profile */}
      <div className="flex items-center gap-3">
        {/* Simulation Engine Quick Trigger */}
        <button
          onClick={handleTriggerSimulation}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/50 hover:bg-amber-900/60 text-xs font-medium transition-colors cursor-pointer"
          title="Run Business Simulation: Creates connected Sale, Inventory Issue, Invoice, GL Journal & Bank Payment"
        >
          <Zap className={`w-3.5 h-3.5 ${isSimulating ? 'animate-bounce text-amber-300' : ''}`} />
          <span>{isSimulating ? 'Simulating...' : 'Simulate Transaction'}</span>
        </button>

        {/* Theme Switcher */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-800 transition-colors cursor-pointer"
          title="Toggle Dark/Light Mode"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </button>

        {/* Refresh Data */}
        <button
          onClick={onRefreshData}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-800 transition-colors cursor-pointer"
          title="Refresh Local DB"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Notifications Drawer Toggle */}
        <button
          onClick={onToggleNotifications}
          className="relative p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <Bell className="w-4 h-4" />
          {unreadNotifCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          )}
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-800"></div>

        {/* Organization Switcher */}
        <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-gray-900 px-2.5 py-1.5 rounded-lg border border-gray-700/80">
          <Building className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-medium">{organization.code}</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 text-xs text-gray-200 pl-1">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-7 h-7 rounded-full object-cover border border-gray-700" />
          <div className="hidden md:block text-left">
            <p className="font-medium text-gray-200 leading-none">{currentUser.name}</p>
            <p className="text-[10px] text-gray-400 leading-tight">{currentUser.roleName}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
