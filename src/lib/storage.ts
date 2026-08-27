// ERPCore Storage Service - IndexedDB Local Persistence Engine with Seed & Backup Support

import { openDB, IDBPDatabase } from 'idb';
import * as SeedData from '../data/seedData';

const DB_NAME = 'ERPCore_Enterprise_DB';
const DB_VERSION = 1;

export type StoreName = 
  | 'organizations' | 'users' | 'roles' | 'accounts' | 'bankAccounts' | 'bankTransactions'
  | 'customers' | 'suppliers' | 'products' | 'warehouses' | 'inventories' | 'stockMovements'
  | 'leads' | 'opportunities' | 'quotations' | 'salesOrders' | 'deliveries' | 'invoices' | 'payments'
  | 'purchaseOrders' | 'supplierBills' | 'boms' | 'manufacturingOrders'
  | 'departments' | 'employees' | 'attendance' | 'leaveRequests' | 'payslips'
  | 'projects' | 'tasks' | 'expenses' | 'assets' | 'maintenanceOrders' | 'workflows' | 'approvals' | 'notifications' | 'auditLogs'
  | 'taxRules' | 'exchangeRates';

const ALL_STORES: StoreName[] = [
  'organizations', 'users', 'roles', 'accounts', 'bankAccounts', 'bankTransactions',
  'customers', 'suppliers', 'products', 'warehouses', 'inventories', 'stockMovements',
  'leads', 'opportunities', 'quotations', 'salesOrders', 'deliveries', 'invoices', 'payments',
  'purchaseOrders', 'supplierBills', 'boms', 'manufacturingOrders',
  'departments', 'employees', 'attendance', 'leaveRequests', 'payslips',
  'projects', 'tasks', 'expenses', 'assets', 'maintenanceOrders', 'workflows', 'approvals', 'notifications', 'auditLogs',
  'taxRules', 'exchangeRates'
];

let dbPromise: Promise<IDBPDatabase> | null = null;
const memoryStore: Record<string, any[]> = {};

export async function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        ALL_STORES.forEach((store) => {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store, { keyPath: 'id' });
          }
        });
      }
    }).catch((err) => {
      console.warn('IndexedDB unavailable, using in-memory state fallback', err);
      return null as any;
    });
  }
  return dbPromise;
}

export async function initializeStorage(): Promise<void> {
  try {
    const db = await getDB();
    if (db) {
      const orgs = await db.getAll('organizations');
      if (!orgs || orgs.length === 0) {
        await resetToDemoData();
      }
    } else {
      if (!memoryStore['organizations'] || memoryStore['organizations'].length === 0) {
        seedMemoryStore();
      }
    }
  } catch (err) {
    console.error('Storage initialization failed:', err);
    seedMemoryStore();
  }
}

function seedMemoryStore() {
  memoryStore['organizations'] = [SeedData.INITIAL_ORGANIZATION];
  memoryStore['roles'] = SeedData.INITIAL_ROLES;
  memoryStore['users'] = SeedData.INITIAL_USERS;
  memoryStore['accounts'] = SeedData.INITIAL_ACCOUNTS;
  memoryStore['bankAccounts'] = SeedData.INITIAL_BANK_ACCOUNTS;
  memoryStore['bankTransactions'] = SeedData.INITIAL_BANK_TRANSACTIONS;
  memoryStore['customers'] = SeedData.INITIAL_CUSTOMERS;
  memoryStore['suppliers'] = SeedData.INITIAL_SUPPLIERS;
  memoryStore['products'] = SeedData.INITIAL_PRODUCTS;
  memoryStore['warehouses'] = SeedData.INITIAL_WAREHOUSES;
  memoryStore['inventories'] = SeedData.INITIAL_INVENTORIES;
  memoryStore['stockMovements'] = SeedData.INITIAL_STOCK_MOVEMENTS;
  memoryStore['leads'] = SeedData.INITIAL_LEADS;
  memoryStore['opportunities'] = SeedData.INITIAL_OPPORTUNITIES;
  memoryStore['quotations'] = SeedData.INITIAL_QUOTATIONS;
  memoryStore['salesOrders'] = SeedData.INITIAL_SALES_ORDERS;
  memoryStore['invoices'] = SeedData.INITIAL_INVOICES;
  memoryStore['payments'] = SeedData.INITIAL_PAYMENTS;
  memoryStore['purchaseOrders'] = SeedData.INITIAL_PURCHASE_ORDERS;
  memoryStore['supplierBills'] = SeedData.INITIAL_SUPPLIER_BILLS;
  memoryStore['boms'] = SeedData.INITIAL_BOMS;
  memoryStore['manufacturingOrders'] = SeedData.INITIAL_MANUFACTURING_ORDERS;
  memoryStore['departments'] = SeedData.INITIAL_DEPARTMENTS;
  memoryStore['employees'] = SeedData.INITIAL_EMPLOYEES;
  memoryStore['attendance'] = SeedData.INITIAL_ATTENDANCE;
  memoryStore['leaveRequests'] = SeedData.INITIAL_LEAVE_REQUESTS;
  memoryStore['payslips'] = SeedData.INITIAL_PAYSLIPS;
  memoryStore['projects'] = SeedData.INITIAL_PROJECTS;
  memoryStore['assets'] = SeedData.INITIAL_ASSETS;
  memoryStore['workflows'] = SeedData.INITIAL_WORKFLOWS;
  memoryStore['notifications'] = SeedData.INITIAL_NOTIFICATIONS;
  memoryStore['auditLogs'] = SeedData.INITIAL_AUDIT_LOGS;
  memoryStore['taxRules'] = SeedData.INITIAL_TAX_RULES;
  memoryStore['exchangeRates'] = SeedData.INITIAL_EXCHANGE_RATES;
}

export async function getAll<T = any>(store: StoreName): Promise<T[]> {
  try {
    const db = await getDB();
    if (db) {
      return (await db.getAll(store)) as T[];
    }
  } catch (e) {
    // fallback
  }
  return (memoryStore[store] || []) as T[];
}

export async function getById<T = any>(store: StoreName, id: string): Promise<T | undefined> {
  try {
    const db = await getDB();
    if (db) {
      return (await db.get(store, id)) as T;
    }
  } catch (e) {
    // fallback
  }
  const list = memoryStore[store] || [];
  return list.find((item) => item.id === id);
}

export async function saveItem<T extends { id: string }>(store: StoreName, item: T): Promise<T> {
  try {
    const db = await getDB();
    if (db) {
      await db.put(store, item);
    }
  } catch (e) {
    // fallback
  }
  if (!memoryStore[store]) memoryStore[store] = [];
  const idx = memoryStore[store].findIndex((i) => i.id === item.id);
  if (idx >= 0) {
    memoryStore[store][idx] = item;
  } else {
    memoryStore[store].unshift(item);
  }
  return item;
}

export async function deleteItem(store: StoreName, id: string): Promise<void> {
  try {
    const db = await getDB();
    if (db) {
      await db.delete(store, id);
    }
  } catch (e) {
    // fallback
  }
  if (memoryStore[store]) {
    memoryStore[store] = memoryStore[store].filter((i) => i.id !== id);
  }
}

export async function resetToDemoData(): Promise<void> {
  seedMemoryStore();
  try {
    const db = await getDB();
    if (db) {
      const tx = db.transaction(ALL_STORES, 'readwrite');
      await Promise.all(ALL_STORES.map((s) => tx.objectStore(s).clear()));
      await tx.done;

      const txSeed = db.transaction(ALL_STORES, 'readwrite');
      await txSeed.objectStore('organizations').put(SeedData.INITIAL_ORGANIZATION);
      await Promise.all(SeedData.INITIAL_ROLES.map((item) => txSeed.objectStore('roles').put(item)));
      await Promise.all(SeedData.INITIAL_USERS.map((item) => txSeed.objectStore('users').put(item)));
      await Promise.all(SeedData.INITIAL_ACCOUNTS.map((item) => txSeed.objectStore('accounts').put(item)));
      await Promise.all(SeedData.INITIAL_BANK_ACCOUNTS.map((item) => txSeed.objectStore('bankAccounts').put(item)));
      await Promise.all(SeedData.INITIAL_BANK_TRANSACTIONS.map((item) => txSeed.objectStore('bankTransactions').put(item)));
      await Promise.all(SeedData.INITIAL_CUSTOMERS.map((item) => txSeed.objectStore('customers').put(item)));
      await Promise.all(SeedData.INITIAL_SUPPLIERS.map((item) => txSeed.objectStore('suppliers').put(item)));
      await Promise.all(SeedData.INITIAL_PRODUCTS.map((item) => txSeed.objectStore('products').put(item)));
      await Promise.all(SeedData.INITIAL_WAREHOUSES.map((item) => txSeed.objectStore('warehouses').put(item)));
      await Promise.all(SeedData.INITIAL_INVENTORIES.map((item) => txSeed.objectStore('inventories').put(item)));
      await Promise.all(SeedData.INITIAL_STOCK_MOVEMENTS.map((item) => txSeed.objectStore('stockMovements').put(item)));
      await Promise.all(SeedData.INITIAL_LEADS.map((item) => txSeed.objectStore('leads').put(item)));
      await Promise.all(SeedData.INITIAL_OPPORTUNITIES.map((item) => txSeed.objectStore('opportunities').put(item)));
      await Promise.all(SeedData.INITIAL_QUOTATIONS.map((item) => txSeed.objectStore('quotations').put(item)));
      await Promise.all(SeedData.INITIAL_SALES_ORDERS.map((item) => txSeed.objectStore('salesOrders').put(item)));
      await Promise.all(SeedData.INITIAL_INVOICES.map((item) => txSeed.objectStore('invoices').put(item)));
      await Promise.all(SeedData.INITIAL_PAYMENTS.map((item) => txSeed.objectStore('payments').put(item)));
      await Promise.all(SeedData.INITIAL_PURCHASE_ORDERS.map((item) => txSeed.objectStore('purchaseOrders').put(item)));
      await Promise.all(SeedData.INITIAL_SUPPLIER_BILLS.map((item) => txSeed.objectStore('supplierBills').put(item)));
      await Promise.all(SeedData.INITIAL_BOMS.map((item) => txSeed.objectStore('boms').put(item)));
      await Promise.all(SeedData.INITIAL_MANUFACTURING_ORDERS.map((item) => txSeed.objectStore('manufacturingOrders').put(item)));
      await Promise.all(SeedData.INITIAL_DEPARTMENTS.map((item) => txSeed.objectStore('departments').put(item)));
      await Promise.all(SeedData.INITIAL_EMPLOYEES.map((item) => txSeed.objectStore('employees').put(item)));
      await Promise.all(SeedData.INITIAL_ATTENDANCE.map((item) => txSeed.objectStore('attendance').put(item)));
      await Promise.all(SeedData.INITIAL_LEAVE_REQUESTS.map((item) => txSeed.objectStore('leaveRequests').put(item)));
      await Promise.all(SeedData.INITIAL_PAYSLIPS.map((item) => txSeed.objectStore('payslips').put(item)));
      await Promise.all(SeedData.INITIAL_PROJECTS.map((item) => txSeed.objectStore('projects').put(item)));
      await Promise.all(SeedData.INITIAL_ASSETS.map((item) => txSeed.objectStore('assets').put(item)));
      await Promise.all(SeedData.INITIAL_WORKFLOWS.map((item) => txSeed.objectStore('workflows').put(item)));
      await Promise.all(SeedData.INITIAL_NOTIFICATIONS.map((item) => txSeed.objectStore('notifications').put(item)));
      await Promise.all(SeedData.INITIAL_AUDIT_LOGS.map((item) => txSeed.objectStore('auditLogs').put(item)));
      await Promise.all(SeedData.INITIAL_TAX_RULES.map((item) => txSeed.objectStore('taxRules').put(item)));
      await Promise.all(SeedData.INITIAL_EXCHANGE_RATES.map((item) => txSeed.objectStore('exchangeRates').put(item)));
      await txSeed.done;
    }
  } catch (e) {
    console.error('Failed to reset IndexedDB demo data:', e);
  }
}

export async function exportBackupJSON(): Promise<string> {
  const exportData: Record<string, any[]> = {};
  for (const store of ALL_STORES) {
    exportData[store] = await getAll(store);
  }
  return JSON.stringify({
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    system: 'ERPCore Enterprise Local Demo',
    data: exportData
  }, null, 2);
}

export async function importBackupJSON(jsonStr: string): Promise<boolean> {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || !parsed.data) return false;
    
    const db = await getDB();
    if (db) {
      const tx = db.transaction(ALL_STORES, 'readwrite');
      for (const store of ALL_STORES) {
        if (Array.isArray(parsed.data[store])) {
          await tx.objectStore(store).clear();
          for (const item of parsed.data[store]) {
            await tx.objectStore(store).put(item);
          }
        }
      }
      await tx.done;
    }
    for (const store of ALL_STORES) {
      if (Array.isArray(parsed.data[store])) {
        memoryStore[store] = parsed.data[store];
      }
    }
    return true;
  } catch (err) {
    console.error('Failed to import backup JSON:', err);
    return false;
  }
}
