// ERPCore Demo Seed Data - Comprehensive Interconnected Business Dataset

import { 
  Organization, User, Role, Account, Customer, Supplier, Product, Warehouse, 
  Lead, Opportunity, Quotation, SalesOrder, Invoice, Payment, PurchaseOrder, 
  SupplierBill, InventoryItem, StockMovement, BOM, ManufacturingOrder, Employee, 
  Department, Attendance, LeaveRequest, Payslip, Project, Asset, MaintenanceOrder, 
  Workflow, AuditEvent, Notification, TaxRule, ExchangeRate, BankAccount, BankTransaction 
} from '../types';

export const INITIAL_ORGANIZATION: Organization = {
  id: 'org-global-corp',
  name: 'Acme Enterprise Global Corp',
  code: 'ACME-CORP',
  logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&auto=format&fit=crop&q=80',
  address: {
    street: '100 Enterprise Way, Suite 500',
    city: 'Tech City',
    state: 'CA',
    postalCode: '94016',
    country: 'USA'
  },
  taxId: 'US-994810293',
  baseCurrency: 'USD',
  fiscalYearStartMonth: 1,
  departments: ['Executive', 'Finance & Accounting', 'Sales & Marketing', 'Procurement', 'Inventory & Operations', 'Manufacturing', 'Human Resources', 'Project Management'],
  warehouses: ['wh-main-dc', 'wh-west-hub', 'wh-east-hub', 'wh-eu-central'],
  active: true,
  createdAt: '2025-01-01T08:00:00Z'
};

export const INITIAL_ROLES: Role[] = [
  {
    id: 'role-admin',
    name: 'Administrator',
    code: 'ADMIN',
    description: 'Full administrative access across all ERP modules and settings',
    permissions: [
      { module: 'dashboard', actions: ['view', 'export'] },
      { module: 'finance', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'accounting', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'ar', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'ap', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'banking', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'budgets', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'sales', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'crm', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'procurement', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'inventory', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'manufacturing', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'hr', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'payroll', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'projects', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'assets', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'workflows', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'approvals', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'reports', actions: ['view', 'export'] },
      { module: 'admin', actions: ['view', 'create', 'edit', 'delete', 'approve', 'export'] },
      { module: 'docs', actions: ['view'] }
    ],
    isSystemRole: true
  },
  {
    id: 'role-finance-mgr',
    name: 'Finance Manager',
    code: 'FIN_MGR',
    description: 'Manages chart of accounts, general ledger, budgets, AR/AP, and financial reports',
    permissions: [
      { module: 'dashboard', actions: ['view', 'export'] },
      { module: 'finance', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'accounting', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'ar', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'ap', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'banking', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'reports', actions: ['view', 'export'] }
    ],
    isSystemRole: true
  },
  {
    id: 'role-sales-mgr',
    name: 'Sales Manager',
    code: 'SALES_MGR',
    description: 'Oversees CRM, sales pipeline, quotations, sales orders, and customer accounts',
    permissions: [
      { module: 'dashboard', actions: ['view'] },
      { module: 'sales', actions: ['view', 'create', 'edit', 'approve', 'export'] },
      { module: 'crm', actions: ['view', 'create', 'edit', 'export'] },
      { module: 'customers', actions: ['view', 'create', 'edit'] }
    ],
    isSystemRole: true
  }
];

export const INITIAL_USERS: User[] = [
  {
    id: 'usr-admin-alex',
    name: 'Alex Mercer',
    email: 'alex.mercer@acme-corp.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    roleId: 'role-admin',
    roleName: 'Administrator',
    organizationId: 'org-global-corp',
    department: 'Executive',
    active: true,
    lastLogin: '2026-08-27T10:15:00Z'
  },
  {
    id: 'usr-fin-sarah',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@acme-corp.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    roleId: 'role-finance-mgr',
    roleName: 'Finance Manager',
    organizationId: 'org-global-corp',
    department: 'Finance & Accounting',
    active: true,
    lastLogin: '2026-08-27T09:30:00Z'
  },
  {
    id: 'usr-sales-david',
    name: 'David Vance',
    email: 'david.vance@acme-corp.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    roleId: 'role-sales-mgr',
    roleName: 'Sales Manager',
    organizationId: 'org-global-corp',
    department: 'Sales & Marketing',
    active: true,
    lastLogin: '2026-08-26T16:45:00Z'
  }
];

// Standard Chart of Accounts for ERP
export const INITIAL_ACCOUNTS: Account[] = [
  // Assets
  { id: 'acc-1010', code: '1010', name: 'Operating Bank Account (USD)', type: 'asset', category: 'bank', balance: 1485000.00, currency: 'USD', active: true, description: 'Primary business checking account' },
  { id: 'acc-1020', code: '1020', name: 'Payroll Checking Account', type: 'asset', category: 'bank', balance: 350000.00, currency: 'USD', active: true, description: 'Dedicated payroll disbursement account' },
  { id: 'acc-1100', code: '1100', name: 'Accounts Receivable', type: 'asset', category: 'accounts_receivable', balance: 642000.00, currency: 'USD', active: true, description: 'Trade customer receivables' },
  { id: 'acc-1200', code: '1200', name: 'Inventory Asset - Finished Goods', type: 'asset', category: 'current_asset', balance: 890000.00, currency: 'USD', active: true, description: 'Stock value of finished products' },
  { id: 'acc-1210', code: '1210', name: 'Inventory Asset - Raw Materials', type: 'asset', category: 'current_asset', balance: 410000.00, currency: 'USD', active: true, description: 'Component and raw material stock' },
  { id: 'acc-1500', code: '1500', name: 'Machinery & Equipment', type: 'asset', category: 'fixed_asset', balance: 1250000.00, currency: 'USD', active: true, description: 'Factory machinery and production assets' },
  { id: 'acc-1550', code: '1550', name: 'Accumulated Depreciation - Machinery', type: 'asset', category: 'fixed_asset', balance: -250000.00, currency: 'USD', active: true, description: 'Accumulated asset depreciation contra account' },
  
  // Liabilities
  { id: 'acc-2010', code: '2010', name: 'Accounts Payable', type: 'liability', category: 'accounts_payable', balance: 385000.00, currency: 'USD', active: true, description: 'Vendor trade payables' },
  { id: 'acc-2100', code: '2100', name: 'Sales Tax Payable', type: 'liability', category: 'current_liability', balance: 42500.00, currency: 'USD', active: true, description: 'Collected tax owed to tax authority' },
  { id: 'acc-2200', code: '2200', name: 'Accrued Payroll & Benefits', type: 'liability', category: 'current_liability', balance: 118000.00, currency: 'USD', active: true, description: 'Wages and tax withholdings due' },
  
  // Equity
  { id: 'acc-3010', code: '3010', name: 'Common Stock & Capital', type: 'equity', category: 'equity', balance: 2500000.00, currency: 'USD', active: true, description: 'Shareholders capital investment' },
  { id: 'acc-3020', code: '3020', name: 'Retained Earnings', type: 'equity', category: 'equity', balance: 1731500.00, currency: 'USD', active: true, description: 'Prior period accumulated earnings' },
  
  // Revenue
  { id: 'acc-4010', code: '4010', name: 'Sales Revenue - Product Solutions', type: 'revenue', category: 'operating_revenue', balance: 3450000.00, currency: 'USD', active: true, description: 'Revenue from enterprise hardware/software sales' },
  { id: 'acc-4020', code: '4020', name: 'Service & Maintenance Revenue', type: 'revenue', category: 'operating_revenue', balance: 820000.00, currency: 'USD', active: true, description: 'Annual support contracts and implementation fees' },
  
  // Expenses
  { id: 'acc-5010', code: '5010', name: 'Cost of Goods Sold (COGS)', type: 'expense', category: 'cost_of_goods', balance: 1850000.00, currency: 'USD', active: true, description: 'Direct material and labor costs' },
  { id: 'acc-6010', code: '6010', name: 'Salaries & Wages Expense', type: 'expense', category: 'payroll_expense', balance: 940000.00, currency: 'USD', active: true, description: 'Staff payroll expenses' },
  { id: 'acc-6100', code: '6100', name: 'Office Rent & Facilities', type: 'expense', category: 'operating_expense', balance: 120000.00, currency: 'USD', active: true, description: 'Building rent and utilities' },
  { id: 'acc-6200', code: '6200', name: 'Depreciation Expense', type: 'expense', category: 'operating_expense', balance: 50000.00, currency: 'USD', active: true, description: 'Monthly fixed asset depreciation charge' }
];

export const INITIAL_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'bank-1',
    accountName: 'Acme Primary Checking',
    accountNumber: 'XXXX-8829-1092',
    bankName: 'JPMorgan Chase Enterprise',
    routingNumber: '121000358',
    currency: 'USD',
    balance: 1485000.00,
    glAccountId: 'acc-1010',
    lastReconciledDate: '2026-08-01'
  },
  {
    id: 'bank-2',
    accountName: 'Acme Payroll Disbursal',
    accountNumber: 'XXXX-4410-9921',
    bankName: 'Bank of America Treasury',
    routingNumber: '026009593',
    currency: 'USD',
    balance: 350000.00,
    glAccountId: 'acc-1020',
    lastReconciledDate: '2026-08-15'
  }
];

export const INITIAL_BANK_TRANSACTIONS: BankTransaction[] = [
  {
    id: 'bt-101',
    bankAccountId: 'bank-1',
    date: '2026-08-20',
    description: 'Wire Transfer from Apex Dynamics (INV-2026-088)',
    reference: 'WIRE-891024',
    amount: 145000.00,
    type: 'deposit',
    status: 'matched',
    matchedJournalId: 'je-1002'
  },
  {
    id: 'bt-102',
    bankAccountId: 'bank-1',
    date: '2026-08-22',
    description: 'Vendor ACH Payment to Global Silicon Corp',
    reference: 'ACH-481920',
    amount: -68000.00,
    type: 'withdrawal',
    status: 'matched'
  },
  {
    id: 'bt-103',
    bankAccountId: 'bank-1',
    date: '2026-08-25',
    description: 'Incoming Electronic Receipt Nexus Tech (INV-2026-092)',
    reference: 'EFT-99104',
    amount: 88500.00,
    type: 'deposit',
    status: 'unmatched'
  }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-apex',
    customerNumber: 'CUST-1001',
    name: 'Apex Dynamics Corp',
    companyName: 'Apex Dynamics Corp',
    email: 'billing@apexdynamics.com',
    phone: '+1 (555) 234-8900',
    address: '450 Innovation Parkway',
    city: 'San Jose',
    country: 'USA',
    creditLimit: 500000,
    outstandingBalance: 145000,
    currency: 'USD',
    taxNumber: 'US-8829104',
    status: 'active',
    createdAt: '2025-02-10'
  },
  {
    id: 'cust-nexus',
    customerNumber: 'CUST-1002',
    name: 'Nexus Technologies Ltd',
    companyName: 'Nexus Technologies International',
    email: 'ap@nexustech.io',
    phone: '+1 (555) 881-3092',
    address: '88 Cybernetics Blvd',
    city: 'Austin',
    country: 'USA',
    creditLimit: 750000,
    outstandingBalance: 88500,
    currency: 'USD',
    taxNumber: 'US-7719203',
    status: 'active',
    createdAt: '2025-03-15'
  },
  {
    id: 'cust-synergy',
    customerNumber: 'CUST-1003',
    name: 'Synergy Logistics Group',
    companyName: 'Synergy Logistics Inc',
    email: 'finance@synergylogistics.com',
    phone: '+1 (555) 443-1120',
    address: '1200 Supply Chain Way',
    city: 'Chicago',
    country: 'USA',
    creditLimit: 300000,
    outstandingBalance: 0,
    currency: 'USD',
    taxNumber: 'US-4491029',
    status: 'active',
    createdAt: '2025-04-20'
  }
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  {
    id: 'sup-silicon',
    supplierNumber: 'SUP-2001',
    name: 'Global Silicon Semiconductor Corp',
    contactPerson: 'Elena Rostova',
    email: 'orders@globalsilicon.com',
    phone: '+1 (555) 902-1144',
    address: '88 Chip Foundry Rd, Phoenix, AZ',
    outstandingBalance: 68000,
    rating: 4.9,
    leadTimeDays: 7,
    paymentTerms: 'Net 30',
    status: 'active'
  },
  {
    id: 'sup-polytech',
    supplierNumber: 'SUP-2002',
    name: 'Polytech Industrial Enclosures',
    contactPerson: 'Marcus Vance',
    email: 'sales@polytech.com',
    phone: '+1 (555) 782-3399',
    address: '500 Plastics Ave, Detroit, MI',
    outstandingBalance: 24500,
    rating: 4.6,
    leadTimeDays: 5,
    paymentTerms: 'Net 15',
    status: 'active'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-server-x1',
    sku: 'ERP-SRV-X100',
    name: 'ERPCore Enterprise Node Server X100',
    description: 'High-density 2U edge computing server with dual 64-core processors and 512GB ECC RAM',
    category: 'Hardware Systems',
    brand: 'ERPCore Systems',
    unitOfMeasure: 'PCS',
    purchasePrice: 4200.00,
    salesPrice: 8500.00,
    taxRate: 8.25,
    reorderLevel: 15,
    currentStock: 48,
    supplierId: 'sup-silicon',
    supplierName: 'Global Silicon Semiconductor Corp',
    active: true,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'prod-gateway-g5',
    sku: 'ERP-GTW-G500',
    name: 'Industrial IoT Telemetry Gateway G500',
    description: 'Ruggedized industrial gateway with dual cellular failover and LoRaWAN long-range antenna',
    category: 'IoT Devices',
    brand: 'ERPCore IoT',
    unitOfMeasure: 'PCS',
    purchasePrice: 450.00,
    salesPrice: 1200.00,
    taxRate: 8.25,
    reorderLevel: 30,
    currentStock: 140,
    supplierId: 'sup-polytech',
    supplierName: 'Polytech Industrial Enclosures',
    active: true,
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&auto=format&fit=crop&q=80'
  },
  {
    id: 'prod-sensor-temp',
    sku: 'ERP-SNS-TMP01',
    name: 'Precision Thermal Sensor Probe',
    description: 'Calibrated IP68 temperature sensor probe for warehouse cold-chain monitoring',
    category: 'Components',
    brand: 'ERPCore Sensors',
    unitOfMeasure: 'PCS',
    purchasePrice: 28.00,
    salesPrice: 75.00,
    taxRate: 8.25,
    reorderLevel: 100,
    currentStock: 650,
    supplierId: 'sup-silicon',
    supplierName: 'Global Silicon Semiconductor Corp',
    active: true,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_WAREHOUSES: Warehouse[] = [
  {
    id: 'wh-main-dc',
    code: 'WH-MAIN-01',
    name: 'Central Distribution Logistics Center',
    address: '1000 Distribution Pkwy, Tech City, CA',
    manager: 'Robert Chen',
    locations: [
      { id: 'loc-a1-1', locationCode: 'Aisle-A1-Bin-01', zone: 'Zone A', shelf: 'Shelf 1', bin: 'Bin 01', capacity: 1000, occupied: 450 },
      { id: 'loc-a1-2', locationCode: 'Aisle-A1-Bin-02', zone: 'Zone A', shelf: 'Shelf 1', bin: 'Bin 02', capacity: 1000, occupied: 320 },
      { id: 'loc-b2-1', locationCode: 'Aisle-B2-Bin-01', zone: 'Zone B', shelf: 'Shelf 2', bin: 'Bin 01', capacity: 2000, occupied: 1200 }
    ],
    totalStockValue: 890000.00
  },
  {
    id: 'wh-west-hub',
    code: 'WH-WEST-02',
    name: 'West Coast Regional Hub',
    address: '400 Logistics Way, San Jose, CA',
    manager: 'Amanda Brooks',
    locations: [
      { id: 'loc-w1-1', locationCode: 'West-Zone1-Bin01', zone: 'Zone 1', shelf: 'Shelf A', bin: 'Bin 01', capacity: 1500, occupied: 600 }
    ],
    totalStockValue: 410000.00
  }
];

export const INITIAL_INVENTORIES: InventoryItem[] = [
  { id: 'inv-1', productId: 'prod-server-x1', productName: 'ERPCore Enterprise Node Server X100', sku: 'ERP-SRV-X100', warehouseId: 'wh-main-dc', locationId: 'loc-a1-1', quantity: 30, batchNumber: 'BAT-2026-08A', serialNumber: 'SRV-882019-X', expirationDate: '2030-12-31' },
  { id: 'inv-2', productId: 'prod-server-x1', productName: 'ERPCore Enterprise Node Server X100', sku: 'ERP-SRV-X100', warehouseId: 'wh-west-hub', locationId: 'loc-w1-1', quantity: 18, batchNumber: 'BAT-2026-08B', serialNumber: 'SRV-882020-X', expirationDate: '2030-12-31' },
  { id: 'inv-3', productId: 'prod-gateway-g5', productName: 'Industrial IoT Telemetry Gateway G500', sku: 'ERP-GTW-G500', warehouseId: 'wh-main-dc', locationId: 'loc-b2-1', quantity: 140, batchNumber: 'BAT-2026-07C', expirationDate: '2029-06-30' }
];

export const INITIAL_STOCK_MOVEMENTS: StockMovement[] = [
  {
    id: 'sm-101',
    movementNumber: 'STK-MOV-9001',
    type: 'receipt',
    date: '2026-08-15',
    productId: 'prod-server-x1',
    productName: 'ERPCore Enterprise Node Server X100',
    toWarehouseId: 'wh-main-dc',
    quantity: 20,
    unitCost: 4200.00,
    totalCost: 84000.00,
    reference: 'PO-2026-044',
    performedBy: 'Robert Chen',
    notes: 'Inbound shipment receipt from Global Silicon'
  },
  {
    id: 'sm-102',
    movementNumber: 'STK-MOV-9002',
    type: 'transfer',
    date: '2026-08-18',
    productId: 'prod-server-x1',
    productName: 'ERPCore Enterprise Node Server X100',
    fromWarehouseId: 'wh-main-dc',
    toWarehouseId: 'wh-west-hub',
    quantity: 5,
    unitCost: 4200.00,
    totalCost: 21000.00,
    reference: 'TRF-2026-012',
    performedBy: 'Amanda Brooks',
    notes: 'Inter-warehouse stock rebalance transfer'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Jonathan Sterling',
    company: 'Quantum Dynamics Inc',
    email: 'j.sterling@quantumdyn.com',
    phone: '+1 (555) 772-9901',
    source: 'Website Demo Request',
    status: 'qualified',
    assignedTo: 'David Vance',
    estimatedValue: 120000,
    createdAt: '2026-08-10',
    notes: 'Interested in complete manufacturing & inventory ERP module deployment'
  },
  {
    id: 'lead-2',
    name: 'Elena Gilbert',
    company: 'Vanguard Health Systems',
    email: 'egilbert@vanguardhealth.org',
    phone: '+1 (555) 302-8811',
    source: 'Industry Trade Show',
    status: 'contacted',
    assignedTo: 'David Vance',
    estimatedValue: 250000,
    createdAt: '2026-08-18'
  }
];

export const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Apex Dynamics 50x Server Cluster Expansion',
    customerName: 'Apex Dynamics Corp',
    customerId: 'cust-apex',
    value: 425000,
    stage: 'proposal',
    probability: 80,
    expectedCloseDate: '2026-09-15',
    assignedTo: 'David Vance',
    createdAt: '2026-08-01',
    notes: 'Proposal submitted for 50 units of Node Server X100 with maintenance contract'
  },
  {
    id: 'opp-2',
    title: 'Nexus Tech IoT Gateway Deployment',
    customerName: 'Nexus Technologies Ltd',
    customerId: 'cust-nexus',
    value: 144000,
    stage: 'negotiation',
    probability: 90,
    expectedCloseDate: '2026-09-01',
    assignedTo: 'David Vance',
    createdAt: '2026-08-05'
  }
];

export const INITIAL_QUOTATIONS: Quotation[] = [
  {
    id: 'quote-1001',
    quoteNumber: 'QT-2026-0801',
    customerId: 'cust-apex',
    customerName: 'Apex Dynamics Corp',
    date: '2026-08-12',
    validUntil: '2026-09-12',
    items: [
      {
        id: 'qi-1',
        productId: 'prod-server-x1',
        productName: 'ERPCore Enterprise Node Server X100',
        sku: 'ERP-SRV-X100',
        quantity: 20,
        unitPrice: 8500.00,
        taxRate: 8.25,
        discountRate: 5.00,
        subtotal: 170000.00,
        taxAmount: 13302.50,
        discountAmount: 8500.00,
        total: 174802.50
      }
    ],
    subtotal: 170000.00,
    taxTotal: 13302.50,
    discountTotal: 8500.00,
    grandTotal: 174802.50,
    status: 'accepted',
    notes: 'Volume enterprise price discount applied'
  }
];

export const INITIAL_SALES_ORDERS: SalesOrder[] = [
  {
    id: 'so-1001',
    orderNumber: 'SO-2026-0881',
    customerId: 'cust-apex',
    customerName: 'Apex Dynamics Corp',
    quotationId: 'quote-1001',
    date: '2026-08-15',
    deliveryDate: '2026-08-30',
    items: [
      {
        id: 'soi-1',
        productId: 'prod-server-x1',
        productName: 'ERPCore Enterprise Node Server X100',
        sku: 'ERP-SRV-X100',
        quantity: 20,
        unitPrice: 8500.00,
        taxRate: 8.25,
        discountRate: 5.00,
        subtotal: 170000.00,
        taxAmount: 13302.50,
        discountAmount: 8500.00,
        total: 174802.50
      }
    ],
    subtotal: 170000.00,
    taxTotal: 13302.50,
    discountTotal: 8500.00,
    grandTotal: 174802.50,
    status: 'processing',
    salesRep: 'David Vance',
    warehouseId: 'wh-main-dc'
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'inv-2026-088',
    invoiceNumber: 'INV-2026-088',
    salesOrderId: 'so-1001',
    customerId: 'cust-apex',
    customerName: 'Apex Dynamics Corp',
    issueDate: '2026-08-16',
    dueDate: '2026-09-16',
    items: [
      {
        id: 'ii-1',
        productId: 'prod-server-x1',
        productName: 'ERPCore Enterprise Node Server X100',
        sku: 'ERP-SRV-X100',
        quantity: 20,
        unitPrice: 8500.00,
        taxRate: 8.25,
        discountRate: 5.00,
        subtotal: 170000.00,
        taxAmount: 13302.50,
        discountAmount: 8500.00,
        total: 174802.50
      }
    ],
    subtotal: 170000.00,
    taxTotal: 13302.50,
    discountTotal: 8500.00,
    grandTotal: 174802.50,
    amountPaid: 145000.00,
    outstandingBalance: 29802.50,
    status: 'partially_paid',
    currency: 'USD'
  }
];

export const INITIAL_PAYMENTS: Payment[] = [
  {
    id: 'pay-7001',
    paymentNumber: 'PAY-2026-0901',
    invoiceId: 'inv-2026-088',
    partyType: 'customer',
    partyId: 'cust-apex',
    partyName: 'Apex Dynamics Corp',
    date: '2026-08-20',
    amount: 145000.00,
    paymentMethod: 'bank_transfer',
    reference: 'WIRE-891024',
    bankAccountId: 'bank-1',
    status: 'completed',
    notes: 'Partial payment on INV-2026-088'
  }
];

export const INITIAL_PURCHASE_ORDERS: PurchaseOrder[] = [
  {
    id: 'po-2026-044',
    poNumber: 'PO-2026-044',
    supplierId: 'sup-silicon',
    supplierName: 'Global Silicon Semiconductor Corp',
    date: '2026-08-05',
    expectedDeliveryDate: '2026-08-15',
    items: [
      {
        id: 'poi-1',
        productId: 'prod-server-x1',
        productName: 'ERPCore Enterprise Node Server X100',
        sku: 'ERP-SRV-X100',
        quantity: 20,
        unitPrice: 4200.00,
        taxRate: 0,
        discountRate: 0,
        subtotal: 84000.00,
        taxAmount: 0,
        discountAmount: 0,
        total: 84000.00
      }
    ],
    subtotal: 84000.00,
    taxTotal: 0,
    grandTotal: 84000.00,
    status: 'received',
    warehouseId: 'wh-main-dc'
  }
];

export const INITIAL_SUPPLIER_BILLS: SupplierBill[] = [
  {
    id: 'bill-5001',
    billNumber: 'BILL-2026-039',
    purchaseOrderId: 'po-2026-044',
    supplierId: 'sup-silicon',
    supplierName: 'Global Silicon Semiconductor Corp',
    billDate: '2026-08-16',
    dueDate: '2026-09-15',
    items: [
      {
        id: 'sbi-1',
        productId: 'prod-server-x1',
        productName: 'ERPCore Enterprise Node Server X100',
        sku: 'ERP-SRV-X100',
        quantity: 20,
        unitPrice: 4200.00,
        taxRate: 0,
        discountRate: 0,
        subtotal: 84000.00,
        taxAmount: 0,
        discountAmount: 0,
        total: 84000.00
      }
    ],
    subtotal: 84000.00,
    taxTotal: 0,
    grandTotal: 84000.00,
    amountPaid: 0,
    outstandingBalance: 84000.00,
    status: 'approved'
  }
];

export const INITIAL_BOMS: BOM[] = [
  {
    id: 'bom-server-x1',
    bomNumber: 'BOM-SRV-X100-V1',
    productId: 'prod-server-x1',
    productName: 'ERPCore Enterprise Node Server X100',
    version: '1.2.0',
    components: [
      {
        id: 'bomc-1',
        productId: 'prod-sensor-temp',
        productName: 'Precision Thermal Sensor Probe',
        sku: 'ERP-SNS-TMP01',
        quantity: 4,
        unitOfMeasure: 'PCS',
        unitCost: 28.00,
        totalCost: 112.00
      }
    ],
    operations: [
      {
        id: 'bomo-1',
        operationName: 'Final Chassis Assembly & Cable Harnessing',
        workCenterId: 'wc-assembly-1',
        workCenterName: 'Work Center 01 - Main Assembly Line',
        standardTimeHours: 2.5,
        hourlyRate: 65.00,
        totalLaborCost: 162.50
      },
      {
        id: 'bomo-2',
        operationName: 'High-Temperature Stress Burn-In & QA Testing',
        workCenterId: 'wc-test-1',
        workCenterName: 'Work Center 02 - Stress Testing Bay',
        standardTimeHours: 4.0,
        hourlyRate: 85.00,
        totalLaborCost: 340.00
      }
    ],
    materialCost: 3585.50,
    laborCost: 502.50,
    overheadCost: 112.00,
    totalCost: 4200.00,
    active: true
  }
];

export const INITIAL_MANUFACTURING_ORDERS: ManufacturingOrder[] = [
  {
    id: 'mo-2026-001',
    moNumber: 'MO-2026-091',
    bomId: 'bom-server-x1',
    productId: 'prod-server-x1',
    productName: 'ERPCore Enterprise Node Server X100',
    plannedQuantity: 10,
    producedQuantity: 8,
    scrapQuantity: 0,
    startDate: '2026-08-20',
    completionDate: '2026-08-28',
    status: 'in_progress',
    assignedWorkCenter: 'Work Center 01 - Main Assembly Line',
    totalCost: 42000.00
  }
];

export const INITIAL_DEPARTMENTS: Department[] = [
  { id: 'dept-exec', name: 'Executive', code: 'EXEC', employeeCount: 3 },
  { id: 'dept-fin', name: 'Finance & Accounting', code: 'FIN', employeeCount: 8 },
  { id: 'dept-sales', name: 'Sales & Marketing', code: 'SALES', employeeCount: 14 },
  { id: 'dept-mfg', name: 'Manufacturing & Operations', code: 'MFG', employeeCount: 22 },
  { id: 'dept-hr', name: 'Human Resources', code: 'HR', employeeCount: 4 }
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'emp-101',
    employeeNumber: 'EMP-1001',
    firstName: 'Alex',
    lastName: 'Mercer',
    email: 'alex.mercer@acme-corp.com',
    phone: '+1 (555) 019-2831',
    departmentId: 'dept-exec',
    departmentName: 'Executive',
    jobTitle: 'Chief Executive Officer',
    hireDate: '2022-01-15',
    status: 'full_time',
    baseSalary: 280000,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    skills: ['Executive Leadership', 'Strategic Planning', 'Enterprise ERP'],
    bankDetails: { accountName: 'Alex Mercer', accountNumber: 'XXXX-9918', bankName: 'Chase' }
  },
  {
    id: 'emp-102',
    employeeNumber: 'EMP-1002',
    firstName: 'Sarah',
    lastName: 'Jenkins',
    email: 'sarah.jenkins@acme-corp.com',
    phone: '+1 (555) 481-9920',
    departmentId: 'dept-fin',
    departmentName: 'Finance & Accounting',
    jobTitle: 'VP of Finance & Chief Accountant',
    reportingManagerId: 'emp-101',
    reportingManagerName: 'Alex Mercer',
    hireDate: '2023-03-01',
    status: 'full_time',
    baseSalary: 165000,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    skills: ['Double-Entry Accounting', 'Financial Analysis', 'Auditing'],
    bankDetails: { accountName: 'Sarah Jenkins', accountNumber: 'XXXX-4412', bankName: 'Bank of America' }
  },
  {
    id: 'emp-103',
    employeeNumber: 'EMP-1003',
    firstName: 'David',
    lastName: 'Vance',
    email: 'david.vance@acme-corp.com',
    phone: '+1 (555) 991-3049',
    departmentId: 'dept-sales',
    departmentName: 'Sales & Marketing',
    jobTitle: 'Global Sales Director',
    reportingManagerId: 'emp-101',
    reportingManagerName: 'Alex Mercer',
    hireDate: '2023-06-15',
    status: 'full_time',
    baseSalary: 145000,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    skills: ['B2B Enterprise Sales', 'Key Account Management', 'CRM Pipeline'],
    bankDetails: { accountName: 'David Vance', accountNumber: 'XXXX-1102', bankName: 'Wells Fargo' }
  }
];

export const INITIAL_ATTENDANCE: Attendance[] = [
  { id: 'att-1', employeeId: 'emp-101', employeeName: 'Alex Mercer', date: '2026-08-27', checkIn: '08:30 AM', checkOut: '05:45 PM', workHours: 8.75, overtimeHours: 0.75, status: 'present' },
  { id: 'att-2', employeeId: 'emp-102', employeeName: 'Sarah Jenkins', date: '2026-08-27', checkIn: '08:45 AM', checkOut: '05:30 PM', workHours: 8.25, overtimeHours: 0.25, status: 'present' },
  { id: 'att-3', employeeId: 'emp-103', employeeName: 'David Vance', date: '2026-08-27', checkIn: '09:00 AM', checkOut: '06:00 PM', workHours: 8.0, overtimeHours: 0, status: 'present' }
];

export const INITIAL_LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: 'lvr-101',
    requestNumber: 'LR-2026-012',
    employeeId: 'emp-102',
    employeeName: 'Sarah Jenkins',
    leaveType: 'annual',
    startDate: '2026-09-10',
    endDate: '2026-09-15',
    daysCount: 4,
    reason: 'Annual family vacation',
    status: 'approved',
    approverComments: 'Approved by Alex Mercer'
  }
];

export const INITIAL_PAYSLIPS: Payslip[] = [
  {
    id: 'pay-2026-07-101',
    payslipNumber: 'SLIP-2026-07-01',
    employeeId: 'emp-101',
    employeeName: 'Alex Mercer',
    departmentName: 'Executive',
    payPeriod: 'July 2026',
    basicSalary: 23333.33,
    allowances: [{ title: 'Executive Housing & Health', amount: 1500.00 }],
    deductions: [{ title: '401k Retirement Plan', amount: 1200.00 }],
    taxDeduction: 5800.00,
    grossSalary: 24833.33,
    netSalary: 17833.33,
    paymentStatus: 'paid',
    paymentDate: '2026-07-31'
  },
  {
    id: 'pay-2026-07-102',
    payslipNumber: 'SLIP-2026-07-02',
    employeeId: 'emp-102',
    employeeName: 'Sarah Jenkins',
    departmentName: 'Finance & Accounting',
    payPeriod: 'July 2026',
    basicSalary: 13750.00,
    allowances: [{ title: 'Health Insurance Benefit', amount: 600.00 }],
    deductions: [{ title: '401k Plan', amount: 650.00 }],
    taxDeduction: 2950.00,
    grossSalary: 14350.00,
    netSalary: 10750.00,
    paymentStatus: 'paid',
    paymentDate: '2026-07-31'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    projectCode: 'PRJ-2026-01',
    name: 'Apex Dynamics Server Fleet Integration',
    customerId: 'cust-apex',
    customerName: 'Apex Dynamics Corp',
    startDate: '2026-08-01',
    endDate: '2026-11-30',
    budget: 180000,
    spent: 45000,
    progressPercent: 35,
    managerName: 'David Vance',
    status: 'active',
    tasks: [
      { id: 'tsk-1', title: 'Site Inspection & Power Audit', projectId: 'proj-1', assigneeId: 'emp-103', assigneeName: 'David Vance', dueDate: '2026-08-20', estimatedHours: 40, loggedHours: 38, priority: 'high', status: 'done' },
      { id: 'tsk-2', title: 'Hardware Rack Assembly & Fiber Wiring', projectId: 'proj-1', assigneeId: 'emp-103', assigneeName: 'David Vance', dueDate: '2026-09-05', estimatedHours: 80, loggedHours: 25, priority: 'urgent', status: 'in_progress' }
    ]
  }
];

export const INITIAL_ASSETS: Asset[] = [
  {
    id: 'ast-101',
    assetNumber: 'AST-MACH-001',
    name: 'SMT Automated PCB Assembly Line Machine',
    category: 'machinery',
    purchaseDate: '2024-01-15',
    purchaseCost: 850000.00,
    salvageValue: 50000.00,
    usefulLifeYears: 10,
    depreciationMethod: 'straight_line',
    accumulatedDepreciation: 160000.00,
    currentValue: 690000.00,
    location: 'Central Distribution Logistics Center - Factory Floor 1',
    status: 'active'
  }
];

export const INITIAL_WORKFLOWS: Workflow[] = [
  {
    id: 'wf-inv-approval',
    name: 'High-Value Invoice Multi-Level Approval',
    module: 'invoices',
    description: 'Automatically routes customer invoices greater than $10,000 to Finance Manager approval before dispatch',
    triggerEvent: 'Invoice Created',
    nodes: [
      { id: 'n1', type: 'trigger', title: 'Invoice Created Event', config: {}, position: { x: 50, y: 100 } },
      { id: 'n2', type: 'condition', title: 'Amount > $10,000?', config: { field: 'grandTotal', operator: 'gt', value: 10000 }, position: { x: 250, y: 100 } },
      { id: 'n3', type: 'approval', title: 'Finance Manager Approval Required', config: { approverRole: 'FIN_MGR' }, position: { x: 450, y: 100 } },
      { id: 'n4', type: 'action', title: 'Post Invoice to AR & General Ledger', config: { action: 'post_invoice' }, position: { x: 650, y: 100 } }
    ],
    active: true,
    createdAt: '2026-01-01'
  }
];

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    title: 'High-Value Sales Order Confirmed',
    message: 'Apex Dynamics Corp confirmed Sales Order SO-2026-0881 ($174,802.50)',
    type: 'success',
    module: 'sales_orders',
    timestamp: '2026-08-27T09:15:00Z',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Stock Reorder Threshold Alert',
    message: 'Precision Thermal Sensor Probe (ERP-SNS-TMP01) is approaching reorder level',
    type: 'warning',
    module: 'stock',
    timestamp: '2026-08-27T08:30:00Z',
    read: false
  }
];

export const INITIAL_AUDIT_LOGS: AuditEvent[] = [
  {
    id: 'aud-101',
    timestamp: '2026-08-27T10:14:00Z',
    userId: 'usr-admin-alex',
    userName: 'Alex Mercer',
    module: 'accounting',
    action: 'POST_JOURNAL',
    recordId: 'je-1002',
    recordRef: 'JE-2026-089',
    previousValue: 'Status: DRAFT',
    newValue: 'Status: POSTED (Total Debit: $145,000.00, Total Credit: $145,000.00)'
  }
];

export const INITIAL_TAX_RULES: TaxRule[] = [
  { id: 'tax-std', code: 'TAX-STD-825', name: 'Standard State Sales Tax', ratePercent: 8.25, type: 'exclusive', active: true },
  { id: 'tax-reduced', code: 'TAX-RED-500', name: 'Reduced Commercial Tax', ratePercent: 5.00, type: 'exclusive', active: true },
  { id: 'tax-exempt', code: 'TAX-EXEMPT', name: 'Tax Exempt / Zero Rate', ratePercent: 0, type: 'exclusive', active: true }
];

export const INITIAL_EXCHANGE_RATES: ExchangeRate[] = [
  { id: 'er-usd-eur', fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.92, effectiveDate: '2026-08-27', source: 'Demo Exchange Rates' },
  { id: 'er-usd-gbp', fromCurrency: 'USD', toCurrency: 'GBP', rate: 0.78, effectiveDate: '2026-08-27', source: 'Demo Exchange Rates' },
  { id: 'er-usd-jpy', fromCurrency: 'USD', toCurrency: 'JPY', rate: 146.50, effectiveDate: '2026-08-27', source: 'Demo Exchange Rates' },
  { id: 'er-usd-inr', fromCurrency: 'USD', toCurrency: 'INR', rate: 83.90, effectiveDate: '2026-08-27', source: 'Demo Exchange Rates' }
];
