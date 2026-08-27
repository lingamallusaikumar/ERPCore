import React, { useState, useEffect } from 'react';
import { DomainModule, User, Organization, Notification } from './types';
import * as Storage from './lib/storage';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { NotificationsDrawer } from './components/layout/NotificationsDrawer';
import { CommandPalette } from './components/ui/CommandPalette';
import { INITIAL_ORGANIZATION, INITIAL_USERS } from './data/seedData';
import { runSimulatedSaleFlow } from './engine/simulation';

// Import Feature Modules
import { ExecutiveDashboard } from './modules/ExecutiveDashboard';
import { FinanceModule } from './modules/FinanceModule';
import { SalesModule } from './modules/SalesModule';
import { ProcurementModule } from './modules/ProcurementModule';
import { InventoryModule } from './modules/InventoryModule';
import { ManufacturingModule } from './modules/ManufacturingModule';
import { HRModule } from './modules/HRModule';
import { ProjectsModule } from './modules/ProjectsModule';
import { AssetsModule } from './modules/AssetsModule';
import { WorkflowsModule } from './modules/WorkflowsModule';
import { ReportsModule } from './modules/ReportsModule';
import { AdminModule } from './modules/AdminModule';
import { DocumentationModule } from './modules/DocumentationModule';

export function App() {
  const [activeModule, setActiveModule] = useState<DomainModule>('dashboard');
  const [currentUser, setCurrentUser] = useState<User>(INITIAL_USERS[0]);
  const [organization, setOrganization] = useState<Organization>(INITIAL_ORGANIZATION);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadAppState = async () => {
    await Storage.initializeStorage();
    const notifs = await Storage.getAll<Notification>('notifications');
    setNotifications(notifs);
    setIsInitialized(true);
  };

  useEffect(() => {
    loadAppState();
  }, []);

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const handleMarkAllNotificationsRead = async () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
    for (const n of updated) {
      await Storage.saveItem('notifications', n);
    }
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return (
          <ExecutiveDashboard
            onNavigate={(mod) => setActiveModule(mod)}
            onTriggerSimulation={async () => {
              await runSimulatedSaleFlow();
              loadAppState();
            }}
          />
        );
      case 'finance':
      case 'accounting':
      case 'ar':
      case 'ap':
      case 'banking':
      case 'budgets':
        return <FinanceModule />;
      case 'sales':
      case 'crm':
      case 'quotations':
      case 'sales_orders':
      case 'customers':
      case 'deliveries':
      case 'invoices':
      case 'payments':
        return <SalesModule />;
      case 'procurement':
      case 'suppliers':
      case 'purchase_requests':
      case 'purchase_orders':
      case 'goods_receipts':
      case 'supplier_bills':
        return <ProcurementModule />;
      case 'inventory':
      case 'products':
      case 'warehouses':
      case 'stock':
      case 'transfers':
        return <InventoryModule />;
      case 'manufacturing':
      case 'bom':
      case 'production_planning':
      case 'manufacturing_orders':
        return <ManufacturingModule />;
      case 'hr':
      case 'employees':
      case 'attendance':
      case 'leave':
      case 'payroll':
      case 'recruitment':
        return <HRModule />;
      case 'projects':
      case 'tasks':
      case 'expenses':
        return <ProjectsModule />;
      case 'assets':
      case 'maintenance':
        return <AssetsModule />;
      case 'workflows':
      case 'approvals':
        return <WorkflowsModule />;
      case 'reports':
        return <ReportsModule />;
      case 'admin':
        return <AdminModule onRefreshData={loadAppState} />;
      case 'docs':
        return <DocumentationModule />;
      default:
        return <ExecutiveDashboard onNavigate={(mod) => setActiveModule(mod)} onTriggerSimulation={loadAppState} />;
    }
  };

  if (!isInitialized) {
    return (
      <div className="h-screen w-screen bg-gray-950 flex flex-col items-center justify-center text-gray-400 gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-600 animate-bounce flex items-center justify-center text-white font-bold text-xl shadow-lg">
          E
        </div>
        <p className="text-sm font-semibold text-gray-200">Initializing ERPCore Local Persistence Database...</p>
      </div>
    );
  }

  const unreadNotifCount = notifications.filter((n) => !n.read).length;

  return (
    <div className={`h-screen w-screen flex overflow-hidden ${theme}`}>
      {/* Sidebar Navigation */}
      <Sidebar
        activeModule={activeModule}
        onSelectModule={(mod) => setActiveModule(mod)}
      />

      {/* Main Application Container */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-950">
        {/* Header Top Bar */}
        <Header
          activeModule={activeModule}
          currentUser={currentUser}
          organization={organization}
          unreadNotifCount={unreadNotifCount}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onToggleNotifications={() => setIsNotificationsOpen(true)}
          onRefreshData={loadAppState}
        />

        {/* Viewport Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveModule()}
        </main>
      </div>

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={(mod) => setActiveModule(mod)}
        onAction={() => setIsCommandPaletteOpen(true)}
      />

      {/* Notifications Drawer */}
      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllNotificationsRead}
      />
    </div>
  );
}

export default App;
