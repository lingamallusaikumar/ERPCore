// ERPCore Integration Interfaces and Local Simulation Adapters

export interface PaymentRequest {
  amount: number;
  currency: string;
  customerName: string;
  reference: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId: string;
  status: 'completed' | 'failed' | 'refunded';
  message: string;
  mode: 'Local Demo Simulation';
}

export interface PaymentProvider {
  processPayment(req: PaymentRequest): Promise<PaymentResponse>;
  refundPayment(transactionId: string): Promise<PaymentResponse>;
}

export class LocalPaymentProvider implements PaymentProvider {
  async processPayment(req: PaymentRequest): Promise<PaymentResponse> {
    await new Promise((res) => setTimeout(res, 600)); // simulate brief processing delay
    const success = Math.random() > 0.05; // 95% success rate
    return {
      success,
      transactionId: `TX-SIM-${Math.floor(100000 + Math.random() * 900000)}`,
      status: success ? 'completed' : 'failed',
      message: success ? 'Simulated payment approved successfully' : 'Simulated card declined (Demo Mode test)',
      mode: 'Local Demo Simulation'
    };
  }

  async refundPayment(transactionId: string): Promise<PaymentResponse> {
    return {
      success: true,
      transactionId: `REF-${transactionId}`,
      status: 'refunded',
      message: 'Simulated payment refunded to customer account',
      mode: 'Local Demo Simulation'
    };
  }
}

export interface EmailMessage {
  id: string;
  recipient: string;
  subject: string;
  bodyHtml: string;
  status: 'Queued' | 'Processing' | 'Delivered' | 'Failed';
  timestamp: string;
  templateName: string;
}

export interface EmailProvider {
  sendEmail(recipient: string, subject: string, bodyHtml: string, templateName?: string): Promise<EmailMessage>;
  getEmailQueue(): Promise<EmailMessage[]>;
}

const localEmailQueue: EmailMessage[] = [
  {
    id: 'em-101',
    recipient: 'billing@apexdynamics.com',
    subject: 'Invoice INV-2026-088 Statement from Acme Enterprise',
    bodyHtml: '<p>Dear Customer, your invoice is attached. Total due: $29,802.50.</p>',
    status: 'Delivered',
    timestamp: '2026-08-20T14:30:00Z',
    templateName: 'Invoice Dispatch Template'
  },
  {
    id: 'em-102',
    recipient: 'orders@globalsilicon.com',
    subject: 'Purchase Order PO-2026-044 Confirmation',
    bodyHtml: '<p>Please find attached Purchase Order PO-2026-044 for 20 units.</p>',
    status: 'Delivered',
    timestamp: '2026-08-15T09:10:00Z',
    templateName: 'Purchase Order Template'
  }
];

export class LocalEmailProvider implements EmailProvider {
  async sendEmail(recipient: string, subject: string, bodyHtml: string, templateName: string = 'General Notification'): Promise<EmailMessage> {
    const msg: EmailMessage = {
      id: `em-${Date.now()}`,
      recipient,
      subject,
      bodyHtml,
      status: 'Delivered',
      timestamp: new Date().toISOString(),
      templateName
    };
    localEmailQueue.unshift(msg);
    return msg;
  }

  async getEmailQueue(): Promise<EmailMessage[]> {
    return [...localEmailQueue];
  }
}

export interface ShipmentRequest {
  orderNumber: string;
  recipientName: string;
  address: string;
  carrier: 'FedEx Enterprise' | 'UPS Worldwide' | 'DHL Express' | 'Local Freight';
}

export interface ShipmentDetails {
  trackingNumber: string;
  carrier: string;
  estimatedDeliveryDays: number;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered';
  history: { status: string; timestamp: string; location: string }[];
  mode: 'Local Shipping Simulator';
}

export interface ShippingProvider {
  createShipment(req: ShipmentRequest): Promise<ShipmentDetails>;
  getShipmentStatus(trackingNumber: string): Promise<ShipmentDetails>;
}

export class LocalShippingProvider implements ShippingProvider {
  async createShipment(req: ShipmentRequest): Promise<ShipmentDetails> {
    const trackingNumber = `TRK-SIM-${Math.floor(10000000 + Math.random() * 90000000)}`;
    const now = new Date().toISOString();
    return {
      trackingNumber,
      carrier: req.carrier,
      estimatedDeliveryDays: 3,
      status: 'In Transit',
      history: [
        { status: 'Label Created & Package Scanned', timestamp: now, location: 'San Jose Logistics Hub' },
        { status: 'In Transit to Destination Facility', timestamp: now, location: 'Central Sorting Facility' }
      ],
      mode: 'Local Shipping Simulator'
    };
  }

  async getShipmentStatus(trackingNumber: string): Promise<ShipmentDetails> {
    return {
      trackingNumber,
      carrier: 'FedEx Enterprise',
      estimatedDeliveryDays: 1,
      status: 'In Transit',
      history: [
        { status: 'Departed Sorting Facility', timestamp: new Date().toISOString(), location: 'Regional Hub' }
      ],
      mode: 'Local Shipping Simulator'
    };
  }
}
