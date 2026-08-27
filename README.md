# ERPCore — Production-Grade Enterprise Resource Planning Platform

**ERPCore** is a modern, modular, production-grade enterprise resource planning platform. It empowers enterprise businesses to manage their complete end-to-end operations — from finance, accounting, sales, and procurement to inventory, manufacturing, HR, payroll, projects, assets, and visual workflow automation — within a unified interactive web application.

> **Tagline**: The core of every business operation. One platform. Every business process.

---

## 1. Zero External Dependencies & Local Demo Mode

ERPCore is designed to run **100% locally** in **Local Demo / Simulation Mode**:

- **NO `.env` FILE REQUIRED**: Operates without any environment variable configuration.
- **NO API KEYS REQUIRED**: Zero third-party cloud API keys or secret credentials needed.
- **NO CLOUD DATABASE REQUIRED**: Uses local **IndexedDB** browser storage with fallback to local memory state.
- **LOCAL SIMULATORS INCLUDED**: Simulated payment processing, local email dispatch queue, bank statement reconciliation matching, and shipping tracking simulator.

---

## 2. Key Modules & Capabilities

- **Executive Command Center**: Real-time KPI cards, revenue/expense/cash flow charts, AR/AP aging summaries, pending approval inbox, and instant business simulation trigger.
- **Finance & Double-Entry Accounting**: Master Chart of Accounts tree, double-entry journal poster enforcing $\text{Debits} = \text{Credits}$, Accounts Receivable (AR), Accounts Payable (AP), Banking statement simulator with reconciliation, Trial Balance, Profit & Loss, and Balance Sheet.
- **Sales & CRM**: CRM opportunity Kanban deal pipeline, Quotations, Sales Orders, Customer 360° directory with credit limits and outstanding balances, Deliveries, and Invoices.
- **Procurement & Purchasing**: Supplier directory with vendor ratings, Purchase Requests, RFQs, Purchase Orders, Goods receipts, and Supplier bills.
- **Inventory & Warehouse Management**: Product catalog master, 2D Visual Warehouse Layout Map, Stock movement audit logs, Stock transfers, and Batch/Serial number tracking.
- **Manufacturing & MRP**: Bills of Materials (BOM) multi-level explosion visualizer, Material Requirements Planning (MRP) shortage calculator, Work centers, and Manufacturing orders.
- **Human Resources & Payroll**: Employee directory, Department Org Chart, Daily attendance clock-in/out log, Leave request calendar, Progressive tax tier payroll engine, and Payslip generator.
- **Projects & Expenses**: Project portfolio, Task Kanban board, Timesheet hours logger, and Employee expense claims.
- **Assets & Maintenance**: Fixed asset register, Straight-line & Double Declining-Balance asset depreciation schedule calculators, and Maintenance work orders.
- **Visual Workflows & Approvals**: Visual drag-and-drop node canvas flow builder, and Centralized Approval Center inbox.
- **Reports & Business Intelligence**: Multi-dimensional financial, sales, inventory, and HR BI analytics with CSV export and print view support.
- **Administration & Security**: Role-Based Access Control (RBAC) permission matrix, Immutable audit logs, Local email inbox center, Multi-organization selector, and System JSON backup/restore.

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Enterprise Theme Tokens
- **Icons**: Lucide React
- **Charts**: Recharts
- **Persistence**: IndexedDB (`idb`)
- **Testing**: Vitest

---

## 4. Installation & Getting Started

### Requirements
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd erpcore
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://127.0.0.1:3000` (or `http://localhost:5173`).

---

## 5. Build & Production Deployment

To compile and build the production bundle:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 6. Testing & Quality Assurance

ERPCore includes an automated test suite verifying core business logic:

```bash
# Run unit tests with Vitest
npm run test

# Run test coverage report
npm run coverage
```

The test suite validates:
- Double-entry accounting debit/credit balancing enforcement.
- Rejection of unbalanced journal entries.
- Stock movement calculations ($\text{Opening} + \text{In} - \text{Out} = \text{Current}$).
- HR payroll gross-to-net salary math across progressive tax brackets.
- Asset depreciation schedules (straight-line and declining-balance).

---

## 7. License

Proprietary / Enterprise Demo Software. All rights reserved.
