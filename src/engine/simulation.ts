// ERPCore Central Business Simulation Engine

import * as Storage from '../lib/storage';
import { postJournalEntry } from './accounting';
import { recordStockMovement } from './inventory';
import { Invoice, Payment, SalesOrder, Product, Customer } from '../types';

export interface SimulationStepResult {
  stepName: string;
  details: string;
  affectedEntities: string[];
  timestamp: string;
}

export async function runSimulatedSaleFlow(): Promise<SimulationStepResult[]> {
  const steps: SimulationStepResult[] = [];
  const timestamp = new Date().toISOString();

  // 1. Pick Customer & Product
  const customers = await Storage.getAll<Customer>('customers');
  const products = await Storage.getAll<Product>('products');

  if (customers.length === 0 || products.length === 0) {
    return [{ stepName: 'Simulation Aborted', details: 'Insufficient customer or product demo data', affectedEntities: [], timestamp }];
  }

  const customer = customers[0];
  const product = products[0];

  const orderNum = `SO-SIM-${Math.floor(1000 + Math.random() * 9000)}`;
  const qty = 2;
  const unitPrice = product.salesPrice;
  const subtotal = qty * unitPrice;
  const tax = subtotal * 0.0825;
  const grandTotal = subtotal + tax;

  // Step 1: Create Sales Order
  const salesOrder: SalesOrder = {
    id: `so-sim-${Date.now()}`,
    orderNumber: orderNum,
    customerId: customer.id,
    customerName: customer.name,
    date: timestamp.split('T')[0],
    deliveryDate: timestamp.split('T')[0],
    items: [
      {
        id: `soi-sim-1`,
        productId: product.id,
        productName: product.name,
        sku: product.sku,
        quantity: qty,
        unitPrice,
        taxRate: 8.25,
        discountRate: 0,
        subtotal,
        taxAmount: tax,
        discountAmount: 0,
        total: grandTotal
      }
    ],
    subtotal,
    taxTotal: tax,
    discountTotal: 0,
    grandTotal,
    status: 'delivered',
    salesRep: 'David Vance',
    warehouseId: 'wh-main-dc'
  };
  await Storage.saveItem('salesOrders', salesOrder);
  steps.push({
    stepName: '1. Sales Order Generated',
    details: `Generated Sales Order ${orderNum} for ${customer.name} (${qty}x ${product.name})`,
    affectedEntities: ['SalesOrder'],
    timestamp
  });

  // Step 2: Stock Decrement Issue
  await recordStockMovement({
    date: timestamp.split('T')[0],
    productId: product.id,
    productName: product.name,
    quantity: qty,
    unitCost: product.purchasePrice,
    totalCost: product.purchasePrice * qty,
    type: 'issue',
    fromWarehouseId: 'wh-main-dc',
    reference: orderNum,
    performedBy: 'Local Business Simulator',
    notes: 'Simulated customer fulfillment issue'
  });
  steps.push({
    stepName: '2. Inventory Decremented',
    details: `Issued ${qty} units of ${product.sku} from WH-MAIN-DC. Updated stock level.`,
    affectedEntities: ['Inventory', 'StockMovement'],
    timestamp
  });

  // Step 3: Customer Invoice Created
  const invNum = `INV-SIM-${Math.floor(1000 + Math.random() * 9000)}`;
  const invoice: Invoice = {
    id: `inv-sim-${Date.now()}`,
    invoiceNumber: invNum,
    salesOrderId: salesOrder.id,
    customerId: customer.id,
    customerName: customer.name,
    issueDate: timestamp.split('T')[0],
    dueDate: timestamp.split('T')[0],
    items: salesOrder.items,
    subtotal,
    taxTotal: tax,
    discountTotal: 0,
    grandTotal,
    amountPaid: grandTotal,
    outstandingBalance: 0,
    status: 'paid',
    currency: 'USD'
  };
  await Storage.saveItem('invoices', invoice);
  steps.push({
    stepName: '3. Customer Invoice Issued',
    details: `Issued Invoice ${invNum} for $${grandTotal.toFixed(2)}`,
    affectedEntities: ['Invoice'],
    timestamp
  });

  // Step 4: Double-Entry Journal Posted to General Ledger
  // Debit: Operating Bank Account (1010) = $grandTotal
  // Credit: Sales Revenue (4010) = $subtotal
  // Credit: Sales Tax Payable (2100) = $tax
  await postJournalEntry({
    date: timestamp.split('T')[0],
    reference: invNum,
    description: `Simulated Sale Revenue & Payment for Invoice ${invNum}`,
    lines: [
      { id: 'l1', accountId: 'acc-1010', accountCode: '1010', accountName: 'Operating Bank Account (USD)', debit: grandTotal, credit: 0 },
      { id: 'l2', accountId: 'acc-4010', accountCode: '4010', accountName: 'Sales Revenue - Product Solutions', debit: 0, credit: subtotal },
      { id: 'l3', accountId: 'acc-2100', accountCode: '2100', accountName: 'Sales Tax Payable', debit: 0, credit: tax }
    ],
    currency: 'USD',
    postedBy: 'Simulated Business Engine'
  });
  steps.push({
    stepName: '4. Double-Entry Journal Posted to GL',
    details: `Posted Journal JE for $${grandTotal.toFixed(2)}: Debit Cash ($${grandTotal.toFixed(2)}), Credit Revenue ($${subtotal.toFixed(2)}), Credit Tax ($${tax.toFixed(2)}). Total Debits = Total Credits.`,
    affectedEntities: ['JournalEntry', 'GeneralLedger', 'Account'],
    timestamp
  });

  // Step 5: Payment Recorded
  const payment: Payment = {
    id: `pay-sim-${Date.now()}`,
    paymentNumber: `PAY-SIM-${Math.floor(1000 + Math.random() * 9000)}`,
    invoiceId: invoice.id,
    partyType: 'customer',
    partyId: customer.id,
    partyName: customer.name,
    date: timestamp.split('T')[0],
    amount: grandTotal,
    paymentMethod: 'bank_transfer',
    reference: `WIRE-SIM-${Math.floor(10000 + Math.random() * 90000)}`,
    bankAccountId: 'bank-1',
    status: 'completed',
    notes: 'Simulated payment receipt'
  };
  await Storage.saveItem('payments', payment);
  steps.push({
    stepName: '5. Payment Received & Bank Settled',
    details: `Recorded Bank Transfer Payment ${payment.paymentNumber} for $${grandTotal.toFixed(2)}. Updated Bank Account Balance.`,
    affectedEntities: ['Payment', 'BankAccount'],
    timestamp
  });

  return steps;
}
