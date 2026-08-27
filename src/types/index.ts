// ERPCore Domain Type Definitions - Comprehensive Schema for 50+ Domain Entities

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'INR' | 'SGD';

export interface Currency {
  code: CurrencyCode;
  name: string;
  symbol: string;
  isBase: boolean;
  active: boolean;
}

export interface ExchangeRate {
  id: string;
  fromCurrency: CurrencyCode;
  toCurrency: CurrencyCode;
  rate: number;
  effectiveDate: string;
  source: 'Demo Exchange Rates';
}

export interface Organization {
  id: string;
  name: string;
  code: string;
  logo: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  taxId: string;
  baseCurrency: CurrencyCode;
  fiscalYearStartMonth: number; // 1-12
  departments: string[];
  warehouses: string[];
  active: boolean;
  createdAt: string;
}

export type PermissionAction = 'view' | 'create' | 'edit' | 'delete' | 'approve' | 'export';
export type DomainModule = 
  | 'dashboard' | 'finance' | 'accounting' | 'ar' | 'ap' | 'banking' | 'budgets'
  | 'sales' | 'crm' | 'leads' | 'opportunities' | 'quotations' | 'sales_orders' | 'customers' | 'deliveries' | 'invoices' | 'payments'
  | 'procurement' | 'suppliers' | 'purchase_requests' | 'rfqs' | 'purchase_orders' | 'goods_receipts' | 'supplier_bills'
  | 'inventory' | 'products' | 'warehouses' | 'stock' | 'transfers' | 'adjustments' | 'batches'
  | 'manufacturing' | 'bom' | 'production_planning' | 'manufacturing_orders' | 'work_centers' | 'quality'
  | 'hr' | 'employees' | 'departments' | 'attendance' | 'leave' | 'payroll' | 'recruitment'
  | 'projects' | 'tasks' | 'timesheets' | 'expenses'
  | 'assets' | 'maintenance'
  | 'workflows' | 'approvals'
  | 'reports' | 'admin' | 'docs';

export interface Permission {
  module: DomainModule;
  actions: PermissionAction[];
}

export interface Role {
  id: string;
  name: string;
  code: string;
  description: string;
  permissions: Permission[];
  isSystemRole: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roleId: string;
  roleName: string;
  organizationId: string;
  department: string;
  active: boolean;
  lastLogin: string;
}

// Financials & Double-Entry Accounting
export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
export type AccountCategory = 
  | 'current_asset' | 'fixed_asset' | 'bank' | 'accounts_receivable'
  | 'current_liability' | 'accounts_payable' | 'long_term_liability'
  | 'equity' | 'operating_revenue' | 'other_revenue'
  | 'cost_of_goods' | 'operating_expense' | 'payroll_expense' | 'tax_expense';

export interface Account {
  id: string;
  code: string;
  name: string;
  type: AccountType;
  category: AccountCategory;
  balance: number;
  currency: CurrencyCode;
  active: boolean;
  parentAccountId?: string;
  description?: string;
}

export interface JournalEntryLine {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
  description?: string;
  costCenter?: string;
  department?: string;
}

export type JournalStatus = 'draft' | 'posted' | 'reversed';

export interface JournalEntry {
  id: string;
  entryNumber: string;
  date: string;
  reference: string;
  description: string;
  lines: JournalEntryLine[];
  totalDebit: number;
  totalCredit: number;
  status: JournalStatus;
  postedBy: string;
  postedAt?: string;
  currency: CurrencyCode;
  moduleSource?: DomainModule;
  relatedEntityId?: string;
}

export interface LedgerEntry {
  id: string;
  accountId: string;
  journalEntryId: string;
  journalNumber: string;
  date: string;
  reference: string;
  description: string;
  debit: number;
  credit: number;
  runningBalance: number;
}

export interface Budget {
  id: string;
  name: string;
  fiscalYear: number;
  period: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Annual';
  accountId: string;
  accountName: string;
  allocatedAmount: number;
  spentAmount: number;
  department: string;
}

// Banking Simulator
export interface BankAccount {
  id: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  routingNumber: string;
  currency: CurrencyCode;
  balance: number;
  glAccountId: string;
  lastReconciledDate: string;
}

export interface BankTransaction {
  id: string;
  bankAccountId: string;
  date: string;
  description: string;
  reference: string;
  amount: number; // positive for deposit, negative for withdrawal
  type: 'deposit' | 'withdrawal' | 'transfer' | 'fee';
  status: 'unmatched' | 'matched' | 'reconciled';
  matchedJournalId?: string;
}

// CRM & Sales
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'unqualified' | 'converted';
export type OpportunityStage = 'new' | 'qualification' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  status: LeadStatus;
  assignedTo: string;
  estimatedValue: number;
  createdAt: string;
  notes?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  customerName: string;
  customerId?: string;
  value: number;
  stage: OpportunityStage;
  probability: number;
  expectedCloseDate: string;
  assignedTo: string;
  createdAt: string;
  notes?: string;
}

export interface Customer {
  id: string;
  customerNumber: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  creditLimit: number;
  outstandingBalance: number;
  currency: CurrencyCode;
  taxNumber: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface LineItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  discountRate: number;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  total: number;
}

export interface Quotation {
  id: string;
  quoteNumber: string;
  customerId: string;
  customerName: string;
  date: string;
  validUntil: string;
  items: LineItem[];
  subtotal: number;
  taxTotal: number;
  discountTotal: number;
  grandTotal: number;
  status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'converted';
  notes?: string;
}

export type SalesOrderStatus = 'draft' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'invoiced' | 'cancelled';

export interface SalesOrder {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  quotationId?: string;
  date: string;
  deliveryDate: string;
  items: LineItem[];
  subtotal: number;
  taxTotal: number;
  discountTotal: number;
  grandTotal: number;
  status: SalesOrderStatus;
  salesRep: string;
  warehouseId: string;
}

export interface Delivery {
  id: string;
  deliveryNumber: string;
  salesOrderId: string;
  customerName: string;
  date: string;
  carrier: string;
  trackingNumber: string;
  items: { productId: string; productName: string; quantity: number }[];
  status: 'pending' | 'in_transit' | 'delivered' | 'failed';
}

export type InvoiceStatus = 'draft' | 'approved' | 'sent' | 'partially_paid' | 'paid' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  salesOrderId?: string;
  customerId: string;
  customerName: string;
  issueDate: string;
  dueDate: string;
  items: LineItem[];
  subtotal: number;
  taxTotal: number;
  discountTotal: number;
  grandTotal: number;
  amountPaid: number;
  outstandingBalance: number;
  status: InvoiceStatus;
  currency: CurrencyCode;
}

export interface Payment {
  id: string;
  paymentNumber: string;
  invoiceId?: string;
  billId?: string;
  partyType: 'customer' | 'supplier';
  partyId: string;
  partyName: string;
  date: string;
  amount: number;
  paymentMethod: 'bank_transfer' | 'credit_card' | 'check' | 'cash';
  reference: string;
  bankAccountId: string;
  status: 'completed' | 'failed' | 'refunded';
  notes?: string;
}

// Procurement & Suppliers
export interface Supplier {
  id: string;
  supplierNumber: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  outstandingBalance: number;
  rating: number; // 1-5
  leadTimeDays: number;
  paymentTerms: string;
  status: 'active' | 'inactive';
}

export interface PurchaseRequest {
  id: string;
  requestNumber: string;
  requestedBy: string;
  department: string;
  date: string;
  requiredDate: string;
  items: { productId: string; productName: string; quantity: number; estimatedCost: number }[];
  status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'ordered';
  reason: string;
}

export interface RFQ {
  id: string;
  rfqNumber: string;
  purchaseRequestId?: string;
  supplierIds: string[];
  date: string;
  deadline: string;
  items: { productId: string; productName: string; quantity: number }[];
  status: 'draft' | 'sent' | 'responses_received' | 'closed';
}

export type PurchaseOrderStatus = 'draft' | 'sent' | 'confirmed' | 'received' | 'billed' | 'cancelled';

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplierId: string;
  supplierName: string;
  date: string;
  expectedDeliveryDate: string;
  items: LineItem[];
  subtotal: number;
  taxTotal: number;
  grandTotal: number;
  status: PurchaseOrderStatus;
  warehouseId: string;
}

export interface GoodsReceipt {
  id: string;
  receiptNumber: string;
  purchaseOrderId: string;
  supplierName: string;
  receivedDate: string;
  warehouseId: string;
  items: { productId: string; productName: string; quantityOrdered: number; quantityReceived: number; batchNumber?: string }[];
  status: 'inspecting' | 'accepted' | 'rejected';
  inspectedBy: string;
}

export type SupplierBillStatus = 'draft' | 'approved' | 'paid' | 'overdue' | 'cancelled';

export interface SupplierBill {
  id: string;
  billNumber: string;
  purchaseOrderId?: string;
  supplierId: string;
  supplierName: string;
  billDate: string;
  dueDate: string;
  items: LineItem[];
  subtotal: number;
  taxTotal: number;
  grandTotal: number;
  amountPaid: number;
  outstandingBalance: number;
  status: SupplierBillStatus;
}

// Inventory & Warehouse
export interface ProductVariant {
  id: string;
  sku: string;
  variantName: string;
  attributes: Record<string, string>;
  priceAdjustment: number;
  stockQuantity: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  unitOfMeasure: 'PCS' | 'KG' | 'LITER' | 'METER' | 'BOX' | 'SET';
  purchasePrice: number;
  salesPrice: number;
  taxRate: number;
  reorderLevel: number;
  currentStock: number;
  supplierId: string;
  supplierName: string;
  variants?: ProductVariant[];
  active: boolean;
  imageUrl?: string;
}

export interface WarehouseLocation {
  id: string;
  locationCode: string;
  zone: string;
  shelf: string;
  bin: string;
  capacity: number;
  occupied: number;
}

export interface Warehouse {
  id: string;
  code: string;
  name: string;
  address: string;
  manager: string;
  locations: WarehouseLocation[];
  totalStockValue: number;
}

export interface InventoryItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  warehouseId: string;
  locationId: string;
  quantity: number;
  batchNumber?: string;
  serialNumber?: string;
  expirationDate?: string;
}

export type StockMovementType = 'receipt' | 'issue' | 'transfer' | 'adjustment' | 'return' | 'manufacturing_use' | 'manufacturing_output';

export interface StockMovement {
  id: string;
  movementNumber: string;
  type: StockMovementType;
  date: string;
  productId: string;
  productName: string;
  fromWarehouseId?: string;
  toWarehouseId?: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
  reference: string;
  performedBy: string;
  notes?: string;
}

// Manufacturing & BOM
export interface BOMComponent {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitOfMeasure: string;
  unitCost: number;
  totalCost: number;
}

export interface BOMOperation {
  id: string;
  operationName: string;
  workCenterId: string;
  workCenterName: string;
  standardTimeHours: number;
  hourlyRate: number;
  totalLaborCost: number;
}

export interface BOM {
  id: string;
  bomNumber: string;
  productId: string;
  productName: string;
  version: string;
  components: BOMComponent[];
  operations: BOMOperation[];
  materialCost: number;
  laborCost: number;
  overheadCost: number;
  totalCost: number;
  active: boolean;
}

export interface WorkCenter {
  id: string;
  code: string;
  name: string;
  capacityPerDay: number;
  hourlyRate: number;
  status: 'active' | 'maintenance' | 'offline';
}

export type ManufacturingOrderStatus = 'planned' | 'released' | 'in_progress' | 'completed' | 'cancelled';

export interface ManufacturingOrder {
  id: string;
  moNumber: string;
  bomId: string;
  productId: string;
  productName: string;
  plannedQuantity: number;
  producedQuantity: number;
  scrapQuantity: number;
  startDate: string;
  completionDate: string;
  status: ManufacturingOrderStatus;
  assignedWorkCenter: string;
  totalCost: number;
}

export interface ProductionPlan {
  id: string;
  planNumber: string;
  period: string;
  targetOrdersCount: number;
  requiredMaterialsCount: number;
  estimatedTotalCost: number;
  status: 'draft' | 'approved' | 'executing';
}

// Human Resources & Payroll
export interface Department {
  id: string;
  name: string;
  code: string;
  managerId?: string;
  managerName?: string;
  employeeCount: number;
}

export type EmploymentStatus = 'full_time' | 'part_time' | 'contract' | 'intern';

export interface Employee {
  id: string;
  employeeNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  departmentName: string;
  jobTitle: string;
  reportingManagerId?: string;
  reportingManagerName?: string;
  hireDate: string;
  status: EmploymentStatus;
  baseSalary: number;
  avatar: string;
  skills: string[];
  bankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
}

export interface Attendance {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  workHours: number;
  overtimeHours: number;
  status: 'present' | 'late' | 'absent' | 'half_day';
}

export interface LeaveRequest {
  id: string;
  requestNumber: string;
  employeeId: string;
  employeeName: string;
  leaveType: 'annual' | 'sick' | 'maternity' | 'unpaid';
  startDate: string;
  endDate: string;
  daysCount: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  approverComments?: string;
}

export interface Payslip {
  id: string;
  payslipNumber: string;
  employeeId: string;
  employeeName: string;
  departmentName: string;
  payPeriod: string;
  basicSalary: number;
  allowances: { title: string; amount: number }[];
  deductions: { title: string; amount: number }[];
  taxDeduction: number;
  grossSalary: number;
  netSalary: number;
  paymentStatus: 'draft' | 'processed' | 'paid';
  paymentDate?: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobOpening: string;
  stage: 'applied' | 'screening' | 'interview' | 'evaluation' | 'offer' | 'hired' | 'rejected';
  experienceYears: number;
  expectedSalary: number;
  appliedDate: string;
}

// Projects & Expenses
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  title: string;
  projectId: string;
  assigneeId: string;
  assigneeName: string;
  dueDate: string;
  estimatedHours: number;
  loggedHours: number;
  priority: TaskPriority;
  status: TaskStatus;
}

export interface Project {
  id: string;
  projectCode: string;
  name: string;
  customerId?: string;
  customerName?: string;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  progressPercent: number;
  managerName: string;
  status: 'planning' | 'active' | 'on_hold' | 'completed';
  tasks: Task[];
}

export interface Timesheet {
  id: string;
  employeeId: string;
  employeeName: string;
  projectId: string;
  projectName: string;
  taskId: string;
  date: string;
  hours: number;
  description: string;
  billable: boolean;
}

export type ExpenseStatus = 'draft' | 'submitted' | 'approved' | 'reimbursed' | 'rejected';

export interface Expense {
  id: string;
  expenseNumber: string;
  employeeId: string;
  employeeName: string;
  category: 'travel' | 'meals' | 'software' | 'office' | 'other';
  amount: number;
  currency: CurrencyCode;
  date: string;
  description: string;
  receiptAttachment?: string;
  status: ExpenseStatus;
}

// Assets & Maintenance
export interface Asset {
  id: string;
  assetNumber: string;
  name: string;
  category: 'machinery' | 'vehicles' | 'it_hardware' | 'furniture' | 'real_estate';
  purchaseDate: string;
  purchaseCost: number;
  salvageValue: number;
  usefulLifeYears: number;
  depreciationMethod: 'straight_line' | 'declining_balance';
  accumulatedDepreciation: number;
  currentValue: number;
  location: string;
  assignedEmployeeName?: string;
  status: 'active' | 'in_maintenance' | 'disposed';
}

export interface MaintenanceOrder {
  id: string;
  orderNumber: string;
  assetId: string;
  assetName: string;
  type: 'preventive' | 'corrective';
  scheduledDate: string;
  technicianName: string;
  cost: number;
  status: 'scheduled' | 'in_progress' | 'completed';
  notes?: string;
}

// Workflows & Approvals
export type WorkflowNodeType = 'trigger' | 'condition' | 'approval' | 'action' | 'notification' | 'end';

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  title: string;
  config: Record<string, any>;
  position: { x: number; y: number };
}

export interface Workflow {
  id: string;
  name: string;
  module: DomainModule;
  description: string;
  triggerEvent: string;
  nodes: WorkflowNode[];
  active: boolean;
  createdAt: string;
}

export type ApprovalStatus = 'pending' | 'approved' | 'rejected' | 'changes_requested';

export interface Approval {
  id: string;
  approvalNumber: string;
  module: DomainModule;
  referenceRecordId: string;
  referenceNumber: string;
  title: string;
  requestedBy: string;
  approverRole: string;
  amount?: number;
  status: ApprovalStatus;
  requestDate: string;
  comments?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  module: DomainModule;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  module: DomainModule;
  action: string;
  recordId: string;
  recordRef: string;
  previousValue?: string;
  newValue?: string;
}

export interface TaxRule {
  id: string;
  code: string;
  name: string;
  ratePercent: number;
  type: 'inclusive' | 'exclusive';
  active: boolean;
}
