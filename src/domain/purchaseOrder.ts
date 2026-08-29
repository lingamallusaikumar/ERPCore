export type PurchaseOrderStatus = 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'RECEIVED' | 'CANCELLED';

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  totalAmount: number;
  status: PurchaseOrderStatus;
  updatedAt: string;
}

const ALLOWED_TRANSITIONS: Record<PurchaseOrderStatus, PurchaseOrderStatus[]> = {
  DRAFT: ['SUBMITTED', 'CANCELLED'],
  SUBMITTED: ['APPROVED', 'CANCELLED'],
  APPROVED: ['RECEIVED', 'CANCELLED'],
  RECEIVED: [],
  CANCELLED: []
};

export function canTransitionPOStatus(currentStatus: PurchaseOrderStatus, nextStatus: PurchaseOrderStatus): boolean {
  return ALLOWED_TRANSITIONS[currentStatus]?.includes(nextStatus) ?? false;
}

export function transitionPOStatus(po: PurchaseOrder, nextStatus: PurchaseOrderStatus): PurchaseOrder {
  if (!canTransitionPOStatus(po.status, nextStatus)) {
    throw new Error(`Invalid Purchase Order status transition from ${po.status} to ${nextStatus}`);
  }
  return {
    ...po,
    status: nextStatus,
    updatedAt: new Date().toISOString()
  };
}
