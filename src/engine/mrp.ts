// ERPCore MRP (Material Requirements Planning) & BOM Explosion Engine

import { BOM, Product } from '../types';
import * as Storage from '../lib/storage';

export interface MRPRequirement {
  productId: string;
  productName: string;
  sku: string;
  requiredQuantity: number;
  currentStock: number;
  shortageQuantity: number;
  unitCost: number;
  totalPurchaseCostNeeded: number;
  reorderStatus: 'ok' | 'shortage';
}

export async function calculateMRPRequirementsForBOM(bomId: string, plannedOrderQuantity: number): Promise<{ bom: BOM; requirements: MRPRequirement[]; totalMaterialCost: number }> {
  const bom = await Storage.getById<BOM>('boms', bomId);
  if (!bom) {
    throw new Error(`BOM with ID ${bomId} not found`);
  }

  const products = await Storage.getAll<Product>('products');
  const prodMap = new Map<string, Product>();
  products.forEach((p) => prodMap.set(p.id, p));

  const requirements: MRPRequirement[] = [];
  let totalMaterialCost = 0;

  for (const comp of bom.components) {
    const prod = prodMap.get(comp.productId);
    const currentStock = prod ? prod.currentStock : 0;
    const requiredQuantity = comp.quantity * plannedOrderQuantity;
    const shortageQuantity = Math.max(0, requiredQuantity - currentStock);
    const unitCost = comp.unitCost;
    const totalPurchaseCostNeeded = shortageQuantity * unitCost;

    totalMaterialCost += requiredQuantity * unitCost;

    requirements.push({
      productId: comp.productId,
      productName: comp.productName,
      sku: comp.sku,
      requiredQuantity,
      currentStock,
      shortageQuantity,
      unitCost,
      totalPurchaseCostNeeded,
      reorderStatus: shortageQuantity > 0 ? 'shortage' : 'ok'
    });
  }

  return {
    bom,
    requirements,
    totalMaterialCost
  };
}
