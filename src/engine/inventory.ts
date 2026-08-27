// ERPCore Inventory & Stock Management Engine

import { Product, InventoryItem, StockMovement, Warehouse } from '../types';
import * as Storage from '../lib/storage';

export interface StockCalculationResult {
  productId: string;
  productName: string;
  sku: string;
  openingStock: number;
  totalReceipts: number;
  totalIssues: number;
  transfersIn: number;
  transfersOut: number;
  adjustments: number;
  calculatedStock: number;
}

export async function calculateProductStock(productId: string): Promise<StockCalculationResult> {
  const product = await Storage.getById<Product>('products', productId);
  const movements = await Storage.getAll<StockMovement>('stockMovements');
  const prodMovements = movements.filter((m) => m.productId === productId);

  let openingStock = 0;
  let totalReceipts = 0;
  let totalIssues = 0;
  let transfersIn = 0;
  let transfersOut = 0;
  let adjustments = 0;

  for (const m of prodMovements) {
    if (m.type === 'receipt' || m.type === 'manufacturing_output') {
      totalReceipts += m.quantity;
    } else if (m.type === 'issue' || m.type === 'manufacturing_use') {
      totalIssues += m.quantity;
    } else if (m.type === 'transfer') {
      if (m.toWarehouseId) transfersIn += m.quantity;
      if (m.fromWarehouseId) transfersOut += m.quantity;
    } else if (m.type === 'adjustment') {
      adjustments += m.quantity; // can be positive or negative
    }
  }

  const calculatedStock = openingStock + totalReceipts + transfersIn - totalIssues - transfersOut + adjustments;

  return {
    productId,
    productName: product?.name || 'Unknown Product',
    sku: product?.sku || '',
    openingStock,
    totalReceipts,
    totalIssues,
    transfersIn,
    transfersOut,
    adjustments,
    calculatedStock
  };
}

export async function recordStockMovement(movement: Omit<StockMovement, 'id' | 'movementNumber'>): Promise<StockMovement> {
  const movementId = `sm-${Date.now()}`;
  const movementNumber = `STK-MOV-${Math.floor(1000 + Math.random() * 9000)}`;

  const fullMovement: StockMovement = {
    ...movement,
    id: movementId,
    movementNumber
  };

  await Storage.saveItem('stockMovements', fullMovement);

  // Update product stock balance
  const product = await Storage.getById<Product>('products', movement.productId);
  if (product) {
    if (movement.type === 'receipt' || movement.type === 'manufacturing_output') {
      product.currentStock += movement.quantity;
    } else if (movement.type === 'issue' || movement.type === 'manufacturing_use') {
      product.currentStock = Math.max(0, product.currentStock - movement.quantity);
    } else if (movement.type === 'adjustment') {
      product.currentStock = Math.max(0, product.currentStock + movement.quantity);
    }
    await Storage.saveItem('products', product);
  }

  return fullMovement;
}

export async function checkLowStockItems(): Promise<Product[]> {
  const products = await Storage.getAll<Product>('products');
  return products.filter((p) => p.currentStock <= p.reorderLevel);
}

export async function calculateInventoryValuation(): Promise<{ totalValue: number; itemsCount: number; categoryBreakdown: Record<string, number> }> {
  const products = await Storage.getAll<Product>('products');
  let totalValue = 0;
  const categoryBreakdown: Record<string, number> = {};

  for (const p of products) {
    const val = p.currentStock * p.purchasePrice;
    totalValue += val;
    categoryBreakdown[p.category] = (categoryBreakdown[p.category] || 0) + val;
  }

  return {
    totalValue,
    itemsCount: products.length,
    categoryBreakdown
  };
}
