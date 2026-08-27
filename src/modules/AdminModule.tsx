import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Users, Lock, History, Globe, Mail, CreditCard, Truck, Download, Upload, RefreshCw, CheckCircle2, AlertTriangle 
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DataGrid, Column } from '../components/ui/DataGrid';
import { User, Role, AuditEvent, TaxRule, ExchangeRate } from '../types';
import * as Storage from '../lib/storage';
import { LocalEmailProvider, LocalPaymentProvider, LocalShippingProvider, EmailMessage } from '../adapters';

export interface AdminModuleProps {
  onRefreshData: () => void;
}

export const AdminModule: React.FC<AdminModuleProps> = ({ onRefreshData }) => {
  const [subTab, setSubTab] = useState<'rbac' | 'audit' | 'email' | 'backup'>('rbac');
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditEvent[]>([]);
  const [emails, setEmails] = useState<EmailMessage[]>([]);
  const [loading, setLoading] = useState(true);

  // Backup & Import state
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const emailAdapter = new LocalEmailProvider();

  const loadData = async () => {
    setLoading(true);
    const uList = await Storage.getAll<User>('users');
    const rList = await Storage.getAll<Role>('roles');
    const aList = await Storage.getAll<AuditEvent>('auditLogs');
    const eList = await emailAdapter.getEmailQueue();

    setUsers(uList);
    setRoles(rList);
    setAuditLogs(aList);
    setEmails(eList);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleExportBackup = async () => {
    const jsonStr = await Storage.exportBackupJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ERPCore-Backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleImportBackup = async () => {
    setImportStatus(null);
    if (!importJsonText.trim()) return;
    const success = await Storage.importBackupJSON(importJsonText);
    if (success) {
      setImportStatus('Backup restored successfully!');
      onRefreshData();
      loadData();
    } else {
      setImportStatus('Failed to restore backup. Invalid JSON schema.');
    }
  };

  const handleResetDemoData = async () => {
    if (confirm('Are you sure you want to reset all data back to original demo seed state?')) {
      await Storage.resetToDemoData();
      onRefreshData();
      loadData();
    }
  };

  const userColumns: Column<User>[] = [
    { key: 'name', header: 'User Name', accessor: (item) => (
      <div className="flex items-center gap-2">
        <img src={item.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
        <span className="font-medium">{item.name}</span>
      </div>
    ) },
    { key: 'email', header: 'Email', accessor: (item) => <span className="text-gray-400 font-mono text-xs">{item.email}</span> },
    { key: 'roleName', header: 'Assigned RBAC Role', accessor: (item) => <Badge variant="info">{item.roleName}</Badge> },
    { key: 'department', header: 'Department', accessor: (item) => item.department },
    { key: 'active', header: 'Status', accessor: (item) => <Badge variant="success">ACTIVE</Badge> }
  ];

  const auditColumns: Column<AuditEvent>[] = [
    { key: 'timestamp', header: 'Timestamp', accessor: (item) => <span className="font-mono text-xs text-gray-400">{new Date(item.timestamp).toLocaleString()}</span> },
    { key: 'userName', header: 'User / System', accessor: (item) => <span className="font-semibold text-gray-200">{item.userName}</span> },
    { key: 'module', header: 'Module', accessor: (item) => <Badge variant="purple">{item.module.toUpperCase()}</Badge> },
    { key: 'action', header: 'Action', accessor: (item) => <span className="font-mono text-xs font-bold text-blue-400">{item.action}</span> },
    { key: 'recordRef', header: 'Record Ref', accessor: (item) => <span className="font-mono text-xs">{item.recordRef}</span> },
    { key: 'newValue', header: 'AuditEvent Audit Details', accessor: (item) => <span className="text-xs text-gray-300">{item.newValue}</span> }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
            System Administration & Security Control Center
            <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">RBAC & Audit Trails</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage user RBAC permission matrix, immutable audit trails, email queue simulator, and JSON system backup/restore.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="danger" icon={<RefreshCw className="w-4 h-4" />} onClick={handleResetDemoData}>
            Reset Demo Data
          </Button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-800 gap-2">
        {(['rbac', 'audit', 'email', 'backup'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
              subTab === t
                ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            {t === 'rbac' ? 'Users & RBAC Roles' : t === 'audit' ? 'Immutable Audit Logs' : t === 'email' ? 'Local Email Simulator Inbox' : 'System JSON Backup & Restore'}
          </button>
        ))}
      </div>

      {subTab === 'rbac' && (
        <div className="space-y-6">
          <DataGrid
            title="Registered ERP Users"
            subtitle="Local session authentication and role bindings"
            columns={userColumns}
            data={users}
            loading={loading}
          />

          <Card title="RBAC Role Permission Matrix" subtitle="Module-level action permissions">
            <div className="space-y-4">
              {roles.map((r) => (
                <div key={r.id} className="p-4 rounded-lg bg-gray-900 border border-gray-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-100">{r.name} ({r.code})</span>
                    <Badge variant="purple">{r.permissions.length} Modules Authorized</Badge>
                  </div>
                  <p className="text-xs text-gray-400">{r.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {subTab === 'audit' && (
        <DataGrid
          title="Immutable Audit Event Trail"
          subtitle="System-wide record updates, journal postings, and approval actions"
          columns={auditColumns}
          data={auditLogs}
          loading={loading}
        />
      )}

      {subTab === 'email' && (
        <Card title="Local Email Dispatch Center (Demo Simulation)" subtitle="Simulated outgoing customer invoices and vendor PO emails">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/50 text-xs text-blue-300 flex items-center justify-between">
              <span className="font-semibold">Local Email Dispatch Queue — No External Mail Server Required</span>
              <Badge variant="info">Local Email Simulation</Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="erp-table">
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Subject</th>
                    <th>Template</th>
                    <th>Dispatch Status</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((m) => (
                    <tr key={m.id}>
                      <td className="font-mono text-xs text-blue-400">{m.recipient}</td>
                      <td className="font-medium">{m.subject}</td>
                      <td className="text-gray-400 text-xs">{m.templateName}</td>
                      <td><Badge variant="success">{m.status.toUpperCase()}</Badge></td>
                      <td className="font-mono text-xs text-gray-400">{new Date(m.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {subTab === 'backup' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Export Local Database Backup" subtitle="Download complete IndexedDB data as a JSON file">
            <div className="space-y-4 pt-2">
              <p className="text-xs text-gray-400">Generates a full standalone JSON backup containing all 50+ domain tables (Chart of Accounts, Invoices, Sales Orders, Stock Movements, Employees, BOMs, Assets, Audit Logs).</p>
              <Button variant="primary" icon={<Download className="w-4 h-4" />} onClick={handleExportBackup}>
                Export Backup JSON
              </Button>
            </div>
          </Card>

          <Card title="Restore Application State from JSON" subtitle="Import JSON data backup file">
            <div className="space-y-4 pt-2">
              {importStatus && (
                <div className={`p-3 rounded-lg text-xs font-semibold ${importStatus.includes('success') ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-rose-950/80 text-rose-300 border border-rose-800'}`}>
                  {importStatus}
                </div>
              )}
              <textarea
                rows={4}
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                placeholder="Paste backup JSON string here to restore local state..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-xs font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="secondary" icon={<Upload className="w-4 h-4" />} onClick={handleImportBackup}>
                Restore State JSON
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
