// ERPCore Manufacturing BOM Master & Work Center Routing

import { BOM } from '../types';

export const EXTENDED_BOM_REGISTRY: BOM[] = [
  {
    id: 'bom-ext-1',
    bomNumber: 'BOM-SRV-SYS-101',
    productId: 'prod-ext-1',
    productName: 'ERPCore Series 1 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-1-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-1-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-1-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-2',
    bomNumber: 'BOM-SRV-SYS-102',
    productId: 'prod-ext-2',
    productName: 'ERPCore Series 2 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-2-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-2-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-2-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-3',
    bomNumber: 'BOM-SRV-SYS-103',
    productId: 'prod-ext-3',
    productName: 'ERPCore Series 3 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-3-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-3-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-3-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-4',
    bomNumber: 'BOM-SRV-SYS-104',
    productId: 'prod-ext-4',
    productName: 'ERPCore Series 4 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-4-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-4-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-4-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-5',
    bomNumber: 'BOM-SRV-SYS-105',
    productId: 'prod-ext-5',
    productName: 'ERPCore Series 5 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-5-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-5-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-5-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-6',
    bomNumber: 'BOM-SRV-SYS-106',
    productId: 'prod-ext-6',
    productName: 'ERPCore Series 6 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-6-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-6-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-6-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-7',
    bomNumber: 'BOM-SRV-SYS-107',
    productId: 'prod-ext-7',
    productName: 'ERPCore Series 7 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-7-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-7-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-7-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-8',
    bomNumber: 'BOM-SRV-SYS-108',
    productId: 'prod-ext-8',
    productName: 'ERPCore Series 8 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-8-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-8-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-8-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-9',
    bomNumber: 'BOM-SRV-SYS-109',
    productId: 'prod-ext-9',
    productName: 'ERPCore Series 9 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-9-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-9-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-9-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-10',
    bomNumber: 'BOM-SRV-SYS-110',
    productId: 'prod-ext-10',
    productName: 'ERPCore Series 10 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-10-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-10-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-10-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-11',
    bomNumber: 'BOM-SRV-SYS-111',
    productId: 'prod-ext-11',
    productName: 'ERPCore Series 11 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-11-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-11-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-11-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-12',
    bomNumber: 'BOM-SRV-SYS-112',
    productId: 'prod-ext-12',
    productName: 'ERPCore Series 12 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-12-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-12-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-12-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-13',
    bomNumber: 'BOM-SRV-SYS-113',
    productId: 'prod-ext-13',
    productName: 'ERPCore Series 13 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-13-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-13-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-13-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-14',
    bomNumber: 'BOM-SRV-SYS-114',
    productId: 'prod-ext-14',
    productName: 'ERPCore Series 14 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-14-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-14-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-14-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-15',
    bomNumber: 'BOM-SRV-SYS-115',
    productId: 'prod-ext-15',
    productName: 'ERPCore Series 15 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-15-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-15-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-15-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-16',
    bomNumber: 'BOM-SRV-SYS-116',
    productId: 'prod-ext-16',
    productName: 'ERPCore Series 16 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-16-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-16-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-16-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-17',
    bomNumber: 'BOM-SRV-SYS-117',
    productId: 'prod-ext-17',
    productName: 'ERPCore Series 17 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-17-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-17-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-17-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-18',
    bomNumber: 'BOM-SRV-SYS-118',
    productId: 'prod-ext-18',
    productName: 'ERPCore Series 18 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-18-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-18-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-18-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-19',
    bomNumber: 'BOM-SRV-SYS-119',
    productId: 'prod-ext-19',
    productName: 'ERPCore Series 19 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-19-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-19-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-19-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-20',
    bomNumber: 'BOM-SRV-SYS-120',
    productId: 'prod-ext-20',
    productName: 'ERPCore Series 20 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-20-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-20-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-20-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-21',
    bomNumber: 'BOM-SRV-SYS-121',
    productId: 'prod-ext-21',
    productName: 'ERPCore Series 21 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-21-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-21-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-21-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-22',
    bomNumber: 'BOM-SRV-SYS-122',
    productId: 'prod-ext-22',
    productName: 'ERPCore Series 22 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-22-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-22-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-22-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-23',
    bomNumber: 'BOM-SRV-SYS-123',
    productId: 'prod-ext-23',
    productName: 'ERPCore Series 23 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-23-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-23-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-23-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-24',
    bomNumber: 'BOM-SRV-SYS-124',
    productId: 'prod-ext-24',
    productName: 'ERPCore Series 24 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-24-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-24-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-24-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-25',
    bomNumber: 'BOM-SRV-SYS-125',
    productId: 'prod-ext-25',
    productName: 'ERPCore Series 25 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-25-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-25-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-25-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-26',
    bomNumber: 'BOM-SRV-SYS-126',
    productId: 'prod-ext-26',
    productName: 'ERPCore Series 26 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-26-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-26-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-26-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-27',
    bomNumber: 'BOM-SRV-SYS-127',
    productId: 'prod-ext-27',
    productName: 'ERPCore Series 27 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-27-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-27-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-27-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-28',
    bomNumber: 'BOM-SRV-SYS-128',
    productId: 'prod-ext-28',
    productName: 'ERPCore Series 28 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-28-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-28-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-28-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-29',
    bomNumber: 'BOM-SRV-SYS-129',
    productId: 'prod-ext-29',
    productName: 'ERPCore Series 29 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-29-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-29-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-29-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-30',
    bomNumber: 'BOM-SRV-SYS-130',
    productId: 'prod-ext-30',
    productName: 'ERPCore Series 30 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-30-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-30-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-30-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-31',
    bomNumber: 'BOM-SRV-SYS-131',
    productId: 'prod-ext-31',
    productName: 'ERPCore Series 31 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-31-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-31-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-31-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-32',
    bomNumber: 'BOM-SRV-SYS-132',
    productId: 'prod-ext-32',
    productName: 'ERPCore Series 32 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-32-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-32-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-32-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-33',
    bomNumber: 'BOM-SRV-SYS-133',
    productId: 'prod-ext-33',
    productName: 'ERPCore Series 33 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-33-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-33-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-33-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-34',
    bomNumber: 'BOM-SRV-SYS-134',
    productId: 'prod-ext-34',
    productName: 'ERPCore Series 34 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-34-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-34-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-34-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-35',
    bomNumber: 'BOM-SRV-SYS-135',
    productId: 'prod-ext-35',
    productName: 'ERPCore Series 35 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-35-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-35-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-35-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-36',
    bomNumber: 'BOM-SRV-SYS-136',
    productId: 'prod-ext-36',
    productName: 'ERPCore Series 36 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-36-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-36-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-36-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-37',
    bomNumber: 'BOM-SRV-SYS-137',
    productId: 'prod-ext-37',
    productName: 'ERPCore Series 37 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-37-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-37-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-37-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-38',
    bomNumber: 'BOM-SRV-SYS-138',
    productId: 'prod-ext-38',
    productName: 'ERPCore Series 38 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-38-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-38-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-38-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-39',
    bomNumber: 'BOM-SRV-SYS-139',
    productId: 'prod-ext-39',
    productName: 'ERPCore Series 39 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-39-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-39-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-39-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-40',
    bomNumber: 'BOM-SRV-SYS-140',
    productId: 'prod-ext-40',
    productName: 'ERPCore Series 40 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-40-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-40-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-40-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-41',
    bomNumber: 'BOM-SRV-SYS-141',
    productId: 'prod-ext-41',
    productName: 'ERPCore Series 41 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-41-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-41-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-41-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-42',
    bomNumber: 'BOM-SRV-SYS-142',
    productId: 'prod-ext-42',
    productName: 'ERPCore Series 42 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-42-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-42-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-42-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-43',
    bomNumber: 'BOM-SRV-SYS-143',
    productId: 'prod-ext-43',
    productName: 'ERPCore Series 43 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-43-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-43-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-43-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-44',
    bomNumber: 'BOM-SRV-SYS-144',
    productId: 'prod-ext-44',
    productName: 'ERPCore Series 44 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-44-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-44-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-44-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-45',
    bomNumber: 'BOM-SRV-SYS-145',
    productId: 'prod-ext-45',
    productName: 'ERPCore Series 45 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-45-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-45-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-45-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-46',
    bomNumber: 'BOM-SRV-SYS-146',
    productId: 'prod-ext-46',
    productName: 'ERPCore Series 46 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-46-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-46-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-46-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-47',
    bomNumber: 'BOM-SRV-SYS-147',
    productId: 'prod-ext-47',
    productName: 'ERPCore Series 47 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-47-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-47-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-47-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-48',
    bomNumber: 'BOM-SRV-SYS-148',
    productId: 'prod-ext-48',
    productName: 'ERPCore Series 48 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-48-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-48-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-48-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-49',
    bomNumber: 'BOM-SRV-SYS-149',
    productId: 'prod-ext-49',
    productName: 'ERPCore Series 49 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-49-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-49-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-49-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-50',
    bomNumber: 'BOM-SRV-SYS-150',
    productId: 'prod-ext-50',
    productName: 'ERPCore Series 50 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-50-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-50-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-50-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-51',
    bomNumber: 'BOM-SRV-SYS-151',
    productId: 'prod-ext-51',
    productName: 'ERPCore Series 51 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-51-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-51-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-51-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-52',
    bomNumber: 'BOM-SRV-SYS-152',
    productId: 'prod-ext-52',
    productName: 'ERPCore Series 52 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-52-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-52-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-52-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-53',
    bomNumber: 'BOM-SRV-SYS-153',
    productId: 'prod-ext-53',
    productName: 'ERPCore Series 53 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-53-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-53-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-53-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-54',
    bomNumber: 'BOM-SRV-SYS-154',
    productId: 'prod-ext-54',
    productName: 'ERPCore Series 54 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-54-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-54-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-54-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-55',
    bomNumber: 'BOM-SRV-SYS-155',
    productId: 'prod-ext-55',
    productName: 'ERPCore Series 55 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-55-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-55-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-55-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-56',
    bomNumber: 'BOM-SRV-SYS-156',
    productId: 'prod-ext-56',
    productName: 'ERPCore Series 56 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-56-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-56-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-56-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-57',
    bomNumber: 'BOM-SRV-SYS-157',
    productId: 'prod-ext-57',
    productName: 'ERPCore Series 57 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-57-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-57-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-57-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-58',
    bomNumber: 'BOM-SRV-SYS-158',
    productId: 'prod-ext-58',
    productName: 'ERPCore Series 58 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-58-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-58-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-58-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-59',
    bomNumber: 'BOM-SRV-SYS-159',
    productId: 'prod-ext-59',
    productName: 'ERPCore Series 59 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-59-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-59-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-59-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-60',
    bomNumber: 'BOM-SRV-SYS-160',
    productId: 'prod-ext-60',
    productName: 'ERPCore Series 60 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-60-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-60-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-60-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-61',
    bomNumber: 'BOM-SRV-SYS-161',
    productId: 'prod-ext-61',
    productName: 'ERPCore Series 61 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-61-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-61-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-61-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-62',
    bomNumber: 'BOM-SRV-SYS-162',
    productId: 'prod-ext-62',
    productName: 'ERPCore Series 62 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-62-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-62-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-62-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-63',
    bomNumber: 'BOM-SRV-SYS-163',
    productId: 'prod-ext-63',
    productName: 'ERPCore Series 63 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-63-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-63-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-63-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-64',
    bomNumber: 'BOM-SRV-SYS-164',
    productId: 'prod-ext-64',
    productName: 'ERPCore Series 64 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-64-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-64-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-64-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-65',
    bomNumber: 'BOM-SRV-SYS-165',
    productId: 'prod-ext-65',
    productName: 'ERPCore Series 65 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-65-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-65-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-65-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-66',
    bomNumber: 'BOM-SRV-SYS-166',
    productId: 'prod-ext-66',
    productName: 'ERPCore Series 66 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-66-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-66-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-66-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-67',
    bomNumber: 'BOM-SRV-SYS-167',
    productId: 'prod-ext-67',
    productName: 'ERPCore Series 67 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-67-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-67-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-67-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-68',
    bomNumber: 'BOM-SRV-SYS-168',
    productId: 'prod-ext-68',
    productName: 'ERPCore Series 68 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-68-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-68-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-68-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-69',
    bomNumber: 'BOM-SRV-SYS-169',
    productId: 'prod-ext-69',
    productName: 'ERPCore Series 69 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-69-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-69-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-69-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-70',
    bomNumber: 'BOM-SRV-SYS-170',
    productId: 'prod-ext-70',
    productName: 'ERPCore Series 70 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-70-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-70-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-70-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-71',
    bomNumber: 'BOM-SRV-SYS-171',
    productId: 'prod-ext-71',
    productName: 'ERPCore Series 71 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-71-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-71-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-71-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-72',
    bomNumber: 'BOM-SRV-SYS-172',
    productId: 'prod-ext-72',
    productName: 'ERPCore Series 72 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-72-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-72-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-72-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-73',
    bomNumber: 'BOM-SRV-SYS-173',
    productId: 'prod-ext-73',
    productName: 'ERPCore Series 73 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-73-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-73-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-73-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-74',
    bomNumber: 'BOM-SRV-SYS-174',
    productId: 'prod-ext-74',
    productName: 'ERPCore Series 74 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-74-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-74-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-74-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-75',
    bomNumber: 'BOM-SRV-SYS-175',
    productId: 'prod-ext-75',
    productName: 'ERPCore Series 75 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-75-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-75-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-75-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-76',
    bomNumber: 'BOM-SRV-SYS-176',
    productId: 'prod-ext-76',
    productName: 'ERPCore Series 76 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-76-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-76-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-76-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-77',
    bomNumber: 'BOM-SRV-SYS-177',
    productId: 'prod-ext-77',
    productName: 'ERPCore Series 77 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-77-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-77-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-77-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-78',
    bomNumber: 'BOM-SRV-SYS-178',
    productId: 'prod-ext-78',
    productName: 'ERPCore Series 78 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-78-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-78-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-78-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-79',
    bomNumber: 'BOM-SRV-SYS-179',
    productId: 'prod-ext-79',
    productName: 'ERPCore Series 79 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-79-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-79-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-79-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-80',
    bomNumber: 'BOM-SRV-SYS-180',
    productId: 'prod-ext-80',
    productName: 'ERPCore Series 80 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-80-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-80-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-80-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-81',
    bomNumber: 'BOM-SRV-SYS-181',
    productId: 'prod-ext-81',
    productName: 'ERPCore Series 81 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-81-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-81-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-81-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-82',
    bomNumber: 'BOM-SRV-SYS-182',
    productId: 'prod-ext-82',
    productName: 'ERPCore Series 82 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-82-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-82-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-82-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-83',
    bomNumber: 'BOM-SRV-SYS-183',
    productId: 'prod-ext-83',
    productName: 'ERPCore Series 83 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-83-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-83-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-83-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-84',
    bomNumber: 'BOM-SRV-SYS-184',
    productId: 'prod-ext-84',
    productName: 'ERPCore Series 84 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-84-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-84-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-84-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-85',
    bomNumber: 'BOM-SRV-SYS-185',
    productId: 'prod-ext-85',
    productName: 'ERPCore Series 85 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-85-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-85-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-85-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-86',
    bomNumber: 'BOM-SRV-SYS-186',
    productId: 'prod-ext-86',
    productName: 'ERPCore Series 86 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-86-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-86-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-86-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-87',
    bomNumber: 'BOM-SRV-SYS-187',
    productId: 'prod-ext-87',
    productName: 'ERPCore Series 87 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-87-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-87-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-87-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-88',
    bomNumber: 'BOM-SRV-SYS-188',
    productId: 'prod-ext-88',
    productName: 'ERPCore Series 88 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-88-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-88-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-88-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-89',
    bomNumber: 'BOM-SRV-SYS-189',
    productId: 'prod-ext-89',
    productName: 'ERPCore Series 89 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-89-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-89-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-89-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-90',
    bomNumber: 'BOM-SRV-SYS-190',
    productId: 'prod-ext-90',
    productName: 'ERPCore Series 90 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-90-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-90-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-90-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-91',
    bomNumber: 'BOM-SRV-SYS-191',
    productId: 'prod-ext-91',
    productName: 'ERPCore Series 91 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-91-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-91-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-91-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-92',
    bomNumber: 'BOM-SRV-SYS-192',
    productId: 'prod-ext-92',
    productName: 'ERPCore Series 92 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-92-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-92-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-92-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-93',
    bomNumber: 'BOM-SRV-SYS-193',
    productId: 'prod-ext-93',
    productName: 'ERPCore Series 93 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-93-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-93-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-93-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-94',
    bomNumber: 'BOM-SRV-SYS-194',
    productId: 'prod-ext-94',
    productName: 'ERPCore Series 94 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-94-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-94-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-94-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-95',
    bomNumber: 'BOM-SRV-SYS-195',
    productId: 'prod-ext-95',
    productName: 'ERPCore Series 95 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-95-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-95-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-95-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-96',
    bomNumber: 'BOM-SRV-SYS-196',
    productId: 'prod-ext-96',
    productName: 'ERPCore Series 96 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-96-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-96-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-96-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-97',
    bomNumber: 'BOM-SRV-SYS-197',
    productId: 'prod-ext-97',
    productName: 'ERPCore Series 97 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-97-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-97-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-97-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-98',
    bomNumber: 'BOM-SRV-SYS-198',
    productId: 'prod-ext-98',
    productName: 'ERPCore Series 98 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-98-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-98-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-98-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-99',
    bomNumber: 'BOM-SRV-SYS-199',
    productId: 'prod-ext-99',
    productName: 'ERPCore Series 99 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-99-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-99-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-99-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-100',
    bomNumber: 'BOM-SRV-SYS-200',
    productId: 'prod-ext-100',
    productName: 'ERPCore Series 100 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-100-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-100-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-100-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-101',
    bomNumber: 'BOM-SRV-SYS-201',
    productId: 'prod-ext-101',
    productName: 'ERPCore Series 101 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-101-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-101-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-101-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-102',
    bomNumber: 'BOM-SRV-SYS-202',
    productId: 'prod-ext-102',
    productName: 'ERPCore Series 102 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-102-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-102-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-102-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-103',
    bomNumber: 'BOM-SRV-SYS-203',
    productId: 'prod-ext-103',
    productName: 'ERPCore Series 103 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-103-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-103-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-103-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-104',
    bomNumber: 'BOM-SRV-SYS-204',
    productId: 'prod-ext-104',
    productName: 'ERPCore Series 104 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-104-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-104-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-104-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-105',
    bomNumber: 'BOM-SRV-SYS-205',
    productId: 'prod-ext-105',
    productName: 'ERPCore Series 105 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-105-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-105-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-105-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-106',
    bomNumber: 'BOM-SRV-SYS-206',
    productId: 'prod-ext-106',
    productName: 'ERPCore Series 106 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-106-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-106-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-106-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-107',
    bomNumber: 'BOM-SRV-SYS-207',
    productId: 'prod-ext-107',
    productName: 'ERPCore Series 107 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-107-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-107-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-107-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-108',
    bomNumber: 'BOM-SRV-SYS-208',
    productId: 'prod-ext-108',
    productName: 'ERPCore Series 108 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-108-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-108-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-108-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-109',
    bomNumber: 'BOM-SRV-SYS-209',
    productId: 'prod-ext-109',
    productName: 'ERPCore Series 109 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-109-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-109-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-109-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-110',
    bomNumber: 'BOM-SRV-SYS-210',
    productId: 'prod-ext-110',
    productName: 'ERPCore Series 110 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-110-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-110-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-110-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-111',
    bomNumber: 'BOM-SRV-SYS-211',
    productId: 'prod-ext-111',
    productName: 'ERPCore Series 111 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-111-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-111-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-111-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-112',
    bomNumber: 'BOM-SRV-SYS-212',
    productId: 'prod-ext-112',
    productName: 'ERPCore Series 112 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-112-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-112-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-112-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-113',
    bomNumber: 'BOM-SRV-SYS-213',
    productId: 'prod-ext-113',
    productName: 'ERPCore Series 113 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-113-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-113-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-113-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-114',
    bomNumber: 'BOM-SRV-SYS-214',
    productId: 'prod-ext-114',
    productName: 'ERPCore Series 114 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-114-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-114-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-114-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-115',
    bomNumber: 'BOM-SRV-SYS-215',
    productId: 'prod-ext-115',
    productName: 'ERPCore Series 115 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-115-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-115-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-115-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-116',
    bomNumber: 'BOM-SRV-SYS-216',
    productId: 'prod-ext-116',
    productName: 'ERPCore Series 116 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-116-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-116-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-116-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-117',
    bomNumber: 'BOM-SRV-SYS-217',
    productId: 'prod-ext-117',
    productName: 'ERPCore Series 117 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-117-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-117-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-117-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-118',
    bomNumber: 'BOM-SRV-SYS-218',
    productId: 'prod-ext-118',
    productName: 'ERPCore Series 118 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-118-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-118-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-118-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-119',
    bomNumber: 'BOM-SRV-SYS-219',
    productId: 'prod-ext-119',
    productName: 'ERPCore Series 119 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-119-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-119-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-119-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-120',
    bomNumber: 'BOM-SRV-SYS-220',
    productId: 'prod-ext-120',
    productName: 'ERPCore Series 120 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-120-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-120-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-120-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-121',
    bomNumber: 'BOM-SRV-SYS-221',
    productId: 'prod-ext-121',
    productName: 'ERPCore Series 121 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-121-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-121-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-121-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-122',
    bomNumber: 'BOM-SRV-SYS-222',
    productId: 'prod-ext-122',
    productName: 'ERPCore Series 122 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-122-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-122-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-122-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-123',
    bomNumber: 'BOM-SRV-SYS-223',
    productId: 'prod-ext-123',
    productName: 'ERPCore Series 123 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-123-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-123-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-123-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-124',
    bomNumber: 'BOM-SRV-SYS-224',
    productId: 'prod-ext-124',
    productName: 'ERPCore Series 124 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-124-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-124-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-124-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-125',
    bomNumber: 'BOM-SRV-SYS-225',
    productId: 'prod-ext-125',
    productName: 'ERPCore Series 125 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-125-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-125-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-125-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-126',
    bomNumber: 'BOM-SRV-SYS-226',
    productId: 'prod-ext-126',
    productName: 'ERPCore Series 126 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-126-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-126-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-126-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-127',
    bomNumber: 'BOM-SRV-SYS-227',
    productId: 'prod-ext-127',
    productName: 'ERPCore Series 127 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-127-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-127-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-127-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-128',
    bomNumber: 'BOM-SRV-SYS-228',
    productId: 'prod-ext-128',
    productName: 'ERPCore Series 128 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-128-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-128-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-128-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-129',
    bomNumber: 'BOM-SRV-SYS-229',
    productId: 'prod-ext-129',
    productName: 'ERPCore Series 129 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-129-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-129-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-129-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-130',
    bomNumber: 'BOM-SRV-SYS-230',
    productId: 'prod-ext-130',
    productName: 'ERPCore Series 130 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-130-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-130-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-130-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-131',
    bomNumber: 'BOM-SRV-SYS-231',
    productId: 'prod-ext-131',
    productName: 'ERPCore Series 131 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-131-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-131-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-131-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-132',
    bomNumber: 'BOM-SRV-SYS-232',
    productId: 'prod-ext-132',
    productName: 'ERPCore Series 132 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-132-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-132-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-132-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-133',
    bomNumber: 'BOM-SRV-SYS-233',
    productId: 'prod-ext-133',
    productName: 'ERPCore Series 133 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-133-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-133-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-133-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-134',
    bomNumber: 'BOM-SRV-SYS-234',
    productId: 'prod-ext-134',
    productName: 'ERPCore Series 134 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-134-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-134-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-134-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-135',
    bomNumber: 'BOM-SRV-SYS-235',
    productId: 'prod-ext-135',
    productName: 'ERPCore Series 135 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-135-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-135-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-135-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-136',
    bomNumber: 'BOM-SRV-SYS-236',
    productId: 'prod-ext-136',
    productName: 'ERPCore Series 136 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-136-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-136-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-136-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-137',
    bomNumber: 'BOM-SRV-SYS-237',
    productId: 'prod-ext-137',
    productName: 'ERPCore Series 137 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-137-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-137-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-137-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-138',
    bomNumber: 'BOM-SRV-SYS-238',
    productId: 'prod-ext-138',
    productName: 'ERPCore Series 138 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-138-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-138-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-138-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-139',
    bomNumber: 'BOM-SRV-SYS-239',
    productId: 'prod-ext-139',
    productName: 'ERPCore Series 139 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-139-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-139-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-139-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-140',
    bomNumber: 'BOM-SRV-SYS-240',
    productId: 'prod-ext-140',
    productName: 'ERPCore Series 140 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-140-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-140-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-140-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-141',
    bomNumber: 'BOM-SRV-SYS-241',
    productId: 'prod-ext-141',
    productName: 'ERPCore Series 141 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-141-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-141-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-141-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-142',
    bomNumber: 'BOM-SRV-SYS-242',
    productId: 'prod-ext-142',
    productName: 'ERPCore Series 142 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-142-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-142-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-142-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-143',
    bomNumber: 'BOM-SRV-SYS-243',
    productId: 'prod-ext-143',
    productName: 'ERPCore Series 143 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-143-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-143-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-143-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-144',
    bomNumber: 'BOM-SRV-SYS-244',
    productId: 'prod-ext-144',
    productName: 'ERPCore Series 144 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-144-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-144-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-144-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-145',
    bomNumber: 'BOM-SRV-SYS-245',
    productId: 'prod-ext-145',
    productName: 'ERPCore Series 145 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-145-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-145-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-145-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-146',
    bomNumber: 'BOM-SRV-SYS-246',
    productId: 'prod-ext-146',
    productName: 'ERPCore Series 146 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-146-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-146-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-146-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-147',
    bomNumber: 'BOM-SRV-SYS-247',
    productId: 'prod-ext-147',
    productName: 'ERPCore Series 147 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-147-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-147-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-147-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-148',
    bomNumber: 'BOM-SRV-SYS-248',
    productId: 'prod-ext-148',
    productName: 'ERPCore Series 148 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-148-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-148-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-148-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-149',
    bomNumber: 'BOM-SRV-SYS-249',
    productId: 'prod-ext-149',
    productName: 'ERPCore Series 149 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-149-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-149-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-149-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-150',
    bomNumber: 'BOM-SRV-SYS-250',
    productId: 'prod-ext-150',
    productName: 'ERPCore Series 150 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-150-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-150-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-150-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-151',
    bomNumber: 'BOM-SRV-SYS-251',
    productId: 'prod-ext-151',
    productName: 'ERPCore Series 151 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-151-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-151-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-151-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-152',
    bomNumber: 'BOM-SRV-SYS-252',
    productId: 'prod-ext-152',
    productName: 'ERPCore Series 152 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-152-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-152-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-152-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-153',
    bomNumber: 'BOM-SRV-SYS-253',
    productId: 'prod-ext-153',
    productName: 'ERPCore Series 153 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-153-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-153-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-153-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-154',
    bomNumber: 'BOM-SRV-SYS-254',
    productId: 'prod-ext-154',
    productName: 'ERPCore Series 154 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-154-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-154-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-154-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-155',
    bomNumber: 'BOM-SRV-SYS-255',
    productId: 'prod-ext-155',
    productName: 'ERPCore Series 155 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-155-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-155-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-155-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-156',
    bomNumber: 'BOM-SRV-SYS-256',
    productId: 'prod-ext-156',
    productName: 'ERPCore Series 156 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-156-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-156-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-156-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-157',
    bomNumber: 'BOM-SRV-SYS-257',
    productId: 'prod-ext-157',
    productName: 'ERPCore Series 157 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-157-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-157-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-157-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-158',
    bomNumber: 'BOM-SRV-SYS-258',
    productId: 'prod-ext-158',
    productName: 'ERPCore Series 158 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-158-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-158-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-158-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-159',
    bomNumber: 'BOM-SRV-SYS-259',
    productId: 'prod-ext-159',
    productName: 'ERPCore Series 159 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-159-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-159-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-159-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-160',
    bomNumber: 'BOM-SRV-SYS-260',
    productId: 'prod-ext-160',
    productName: 'ERPCore Series 160 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-160-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-160-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-160-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-161',
    bomNumber: 'BOM-SRV-SYS-261',
    productId: 'prod-ext-161',
    productName: 'ERPCore Series 161 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-161-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-161-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-161-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-162',
    bomNumber: 'BOM-SRV-SYS-262',
    productId: 'prod-ext-162',
    productName: 'ERPCore Series 162 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-162-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-162-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-162-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-163',
    bomNumber: 'BOM-SRV-SYS-263',
    productId: 'prod-ext-163',
    productName: 'ERPCore Series 163 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-163-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-163-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-163-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-164',
    bomNumber: 'BOM-SRV-SYS-264',
    productId: 'prod-ext-164',
    productName: 'ERPCore Series 164 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-164-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-164-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-164-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-165',
    bomNumber: 'BOM-SRV-SYS-265',
    productId: 'prod-ext-165',
    productName: 'ERPCore Series 165 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-165-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-165-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-165-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-166',
    bomNumber: 'BOM-SRV-SYS-266',
    productId: 'prod-ext-166',
    productName: 'ERPCore Series 166 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-166-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-166-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-166-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-167',
    bomNumber: 'BOM-SRV-SYS-267',
    productId: 'prod-ext-167',
    productName: 'ERPCore Series 167 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-167-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-167-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-167-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-168',
    bomNumber: 'BOM-SRV-SYS-268',
    productId: 'prod-ext-168',
    productName: 'ERPCore Series 168 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-168-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-168-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-168-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-169',
    bomNumber: 'BOM-SRV-SYS-269',
    productId: 'prod-ext-169',
    productName: 'ERPCore Series 169 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-169-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-169-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-169-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-170',
    bomNumber: 'BOM-SRV-SYS-270',
    productId: 'prod-ext-170',
    productName: 'ERPCore Series 170 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-170-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-170-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-170-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-171',
    bomNumber: 'BOM-SRV-SYS-271',
    productId: 'prod-ext-171',
    productName: 'ERPCore Series 171 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-171-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-171-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-171-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-172',
    bomNumber: 'BOM-SRV-SYS-272',
    productId: 'prod-ext-172',
    productName: 'ERPCore Series 172 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-172-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-172-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-172-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-173',
    bomNumber: 'BOM-SRV-SYS-273',
    productId: 'prod-ext-173',
    productName: 'ERPCore Series 173 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-173-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-173-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-173-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-174',
    bomNumber: 'BOM-SRV-SYS-274',
    productId: 'prod-ext-174',
    productName: 'ERPCore Series 174 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-174-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-174-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-174-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-175',
    bomNumber: 'BOM-SRV-SYS-275',
    productId: 'prod-ext-175',
    productName: 'ERPCore Series 175 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-175-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-175-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-175-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-176',
    bomNumber: 'BOM-SRV-SYS-276',
    productId: 'prod-ext-176',
    productName: 'ERPCore Series 176 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-176-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-176-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-176-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-177',
    bomNumber: 'BOM-SRV-SYS-277',
    productId: 'prod-ext-177',
    productName: 'ERPCore Series 177 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-177-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-177-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-177-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-178',
    bomNumber: 'BOM-SRV-SYS-278',
    productId: 'prod-ext-178',
    productName: 'ERPCore Series 178 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-178-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-178-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-178-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-179',
    bomNumber: 'BOM-SRV-SYS-279',
    productId: 'prod-ext-179',
    productName: 'ERPCore Series 179 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-179-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-179-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-179-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-180',
    bomNumber: 'BOM-SRV-SYS-280',
    productId: 'prod-ext-180',
    productName: 'ERPCore Series 180 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-180-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-180-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-180-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-181',
    bomNumber: 'BOM-SRV-SYS-281',
    productId: 'prod-ext-181',
    productName: 'ERPCore Series 181 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-181-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-181-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-181-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-182',
    bomNumber: 'BOM-SRV-SYS-282',
    productId: 'prod-ext-182',
    productName: 'ERPCore Series 182 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-182-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-182-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-182-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-183',
    bomNumber: 'BOM-SRV-SYS-283',
    productId: 'prod-ext-183',
    productName: 'ERPCore Series 183 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-183-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-183-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-183-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-184',
    bomNumber: 'BOM-SRV-SYS-284',
    productId: 'prod-ext-184',
    productName: 'ERPCore Series 184 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-184-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-184-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-184-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-185',
    bomNumber: 'BOM-SRV-SYS-285',
    productId: 'prod-ext-185',
    productName: 'ERPCore Series 185 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-185-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-185-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-185-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-186',
    bomNumber: 'BOM-SRV-SYS-286',
    productId: 'prod-ext-186',
    productName: 'ERPCore Series 186 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-186-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-186-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-186-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-187',
    bomNumber: 'BOM-SRV-SYS-287',
    productId: 'prod-ext-187',
    productName: 'ERPCore Series 187 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-187-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-187-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-187-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-188',
    bomNumber: 'BOM-SRV-SYS-288',
    productId: 'prod-ext-188',
    productName: 'ERPCore Series 188 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-188-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-188-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-188-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-189',
    bomNumber: 'BOM-SRV-SYS-289',
    productId: 'prod-ext-189',
    productName: 'ERPCore Series 189 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-189-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-189-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-189-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-190',
    bomNumber: 'BOM-SRV-SYS-290',
    productId: 'prod-ext-190',
    productName: 'ERPCore Series 190 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-190-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-190-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-190-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-191',
    bomNumber: 'BOM-SRV-SYS-291',
    productId: 'prod-ext-191',
    productName: 'ERPCore Series 191 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-191-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-191-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-191-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-192',
    bomNumber: 'BOM-SRV-SYS-292',
    productId: 'prod-ext-192',
    productName: 'ERPCore Series 192 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-192-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-192-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-192-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-193',
    bomNumber: 'BOM-SRV-SYS-293',
    productId: 'prod-ext-193',
    productName: 'ERPCore Series 193 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-193-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-193-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-193-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-194',
    bomNumber: 'BOM-SRV-SYS-294',
    productId: 'prod-ext-194',
    productName: 'ERPCore Series 194 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-194-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-194-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-194-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-195',
    bomNumber: 'BOM-SRV-SYS-295',
    productId: 'prod-ext-195',
    productName: 'ERPCore Series 195 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-195-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-195-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-195-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-196',
    bomNumber: 'BOM-SRV-SYS-296',
    productId: 'prod-ext-196',
    productName: 'ERPCore Series 196 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-196-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-196-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-196-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-197',
    bomNumber: 'BOM-SRV-SYS-297',
    productId: 'prod-ext-197',
    productName: 'ERPCore Series 197 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-197-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-197-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-197-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-198',
    bomNumber: 'BOM-SRV-SYS-298',
    productId: 'prod-ext-198',
    productName: 'ERPCore Series 198 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-198-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-198-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-198-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-199',
    bomNumber: 'BOM-SRV-SYS-299',
    productId: 'prod-ext-199',
    productName: 'ERPCore Series 199 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-199-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-199-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-199-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-200',
    bomNumber: 'BOM-SRV-SYS-300',
    productId: 'prod-ext-200',
    productName: 'ERPCore Series 200 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-200-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-200-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-200-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-201',
    bomNumber: 'BOM-SRV-SYS-301',
    productId: 'prod-ext-201',
    productName: 'ERPCore Series 201 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-201-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-201-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-201-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-202',
    bomNumber: 'BOM-SRV-SYS-302',
    productId: 'prod-ext-202',
    productName: 'ERPCore Series 202 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-202-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-202-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-202-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-203',
    bomNumber: 'BOM-SRV-SYS-303',
    productId: 'prod-ext-203',
    productName: 'ERPCore Series 203 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-203-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-203-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-203-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-204',
    bomNumber: 'BOM-SRV-SYS-304',
    productId: 'prod-ext-204',
    productName: 'ERPCore Series 204 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-204-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-204-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-204-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-205',
    bomNumber: 'BOM-SRV-SYS-305',
    productId: 'prod-ext-205',
    productName: 'ERPCore Series 205 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-205-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-205-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-205-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-206',
    bomNumber: 'BOM-SRV-SYS-306',
    productId: 'prod-ext-206',
    productName: 'ERPCore Series 206 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-206-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-206-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-206-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-207',
    bomNumber: 'BOM-SRV-SYS-307',
    productId: 'prod-ext-207',
    productName: 'ERPCore Series 207 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-207-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-207-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-207-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-208',
    bomNumber: 'BOM-SRV-SYS-308',
    productId: 'prod-ext-208',
    productName: 'ERPCore Series 208 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-208-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-208-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-208-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-209',
    bomNumber: 'BOM-SRV-SYS-309',
    productId: 'prod-ext-209',
    productName: 'ERPCore Series 209 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-209-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-209-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-209-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-210',
    bomNumber: 'BOM-SRV-SYS-310',
    productId: 'prod-ext-210',
    productName: 'ERPCore Series 210 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-210-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-210-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-210-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-211',
    bomNumber: 'BOM-SRV-SYS-311',
    productId: 'prod-ext-211',
    productName: 'ERPCore Series 211 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-211-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-211-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-211-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-212',
    bomNumber: 'BOM-SRV-SYS-312',
    productId: 'prod-ext-212',
    productName: 'ERPCore Series 212 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-212-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-212-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-212-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-213',
    bomNumber: 'BOM-SRV-SYS-313',
    productId: 'prod-ext-213',
    productName: 'ERPCore Series 213 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-213-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-213-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-213-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-214',
    bomNumber: 'BOM-SRV-SYS-314',
    productId: 'prod-ext-214',
    productName: 'ERPCore Series 214 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-214-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-214-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-214-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-215',
    bomNumber: 'BOM-SRV-SYS-315',
    productId: 'prod-ext-215',
    productName: 'ERPCore Series 215 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-215-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-215-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-215-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-216',
    bomNumber: 'BOM-SRV-SYS-316',
    productId: 'prod-ext-216',
    productName: 'ERPCore Series 216 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-216-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-216-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-216-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-217',
    bomNumber: 'BOM-SRV-SYS-317',
    productId: 'prod-ext-217',
    productName: 'ERPCore Series 217 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-217-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-217-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-217-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-218',
    bomNumber: 'BOM-SRV-SYS-318',
    productId: 'prod-ext-218',
    productName: 'ERPCore Series 218 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-218-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-218-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-218-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-219',
    bomNumber: 'BOM-SRV-SYS-319',
    productId: 'prod-ext-219',
    productName: 'ERPCore Series 219 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-219-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-219-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-219-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-220',
    bomNumber: 'BOM-SRV-SYS-320',
    productId: 'prod-ext-220',
    productName: 'ERPCore Series 220 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-220-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-220-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-220-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-221',
    bomNumber: 'BOM-SRV-SYS-321',
    productId: 'prod-ext-221',
    productName: 'ERPCore Series 221 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-221-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-221-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-221-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-222',
    bomNumber: 'BOM-SRV-SYS-322',
    productId: 'prod-ext-222',
    productName: 'ERPCore Series 222 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-222-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-222-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-222-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-223',
    bomNumber: 'BOM-SRV-SYS-323',
    productId: 'prod-ext-223',
    productName: 'ERPCore Series 223 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-223-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-223-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-223-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-224',
    bomNumber: 'BOM-SRV-SYS-324',
    productId: 'prod-ext-224',
    productName: 'ERPCore Series 224 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-224-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-224-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-224-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-225',
    bomNumber: 'BOM-SRV-SYS-325',
    productId: 'prod-ext-225',
    productName: 'ERPCore Series 225 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-225-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-225-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-225-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-226',
    bomNumber: 'BOM-SRV-SYS-326',
    productId: 'prod-ext-226',
    productName: 'ERPCore Series 226 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-226-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-226-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-226-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-227',
    bomNumber: 'BOM-SRV-SYS-327',
    productId: 'prod-ext-227',
    productName: 'ERPCore Series 227 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-227-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-227-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-227-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-228',
    bomNumber: 'BOM-SRV-SYS-328',
    productId: 'prod-ext-228',
    productName: 'ERPCore Series 228 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-228-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-228-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-228-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-229',
    bomNumber: 'BOM-SRV-SYS-329',
    productId: 'prod-ext-229',
    productName: 'ERPCore Series 229 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-229-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-229-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-229-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-230',
    bomNumber: 'BOM-SRV-SYS-330',
    productId: 'prod-ext-230',
    productName: 'ERPCore Series 230 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-230-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-230-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-230-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-231',
    bomNumber: 'BOM-SRV-SYS-331',
    productId: 'prod-ext-231',
    productName: 'ERPCore Series 231 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-231-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-231-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-231-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-232',
    bomNumber: 'BOM-SRV-SYS-332',
    productId: 'prod-ext-232',
    productName: 'ERPCore Series 232 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-232-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-232-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-232-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-233',
    bomNumber: 'BOM-SRV-SYS-333',
    productId: 'prod-ext-233',
    productName: 'ERPCore Series 233 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-233-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-233-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-233-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-234',
    bomNumber: 'BOM-SRV-SYS-334',
    productId: 'prod-ext-234',
    productName: 'ERPCore Series 234 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-234-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-234-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-234-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-235',
    bomNumber: 'BOM-SRV-SYS-335',
    productId: 'prod-ext-235',
    productName: 'ERPCore Series 235 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-235-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-235-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-235-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-236',
    bomNumber: 'BOM-SRV-SYS-336',
    productId: 'prod-ext-236',
    productName: 'ERPCore Series 236 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-236-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-236-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-236-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-237',
    bomNumber: 'BOM-SRV-SYS-337',
    productId: 'prod-ext-237',
    productName: 'ERPCore Series 237 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-237-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-237-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-237-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-238',
    bomNumber: 'BOM-SRV-SYS-338',
    productId: 'prod-ext-238',
    productName: 'ERPCore Series 238 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-238-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-238-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-238-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-239',
    bomNumber: 'BOM-SRV-SYS-339',
    productId: 'prod-ext-239',
    productName: 'ERPCore Series 239 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-239-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-239-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-239-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-240',
    bomNumber: 'BOM-SRV-SYS-340',
    productId: 'prod-ext-240',
    productName: 'ERPCore Series 240 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-240-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-240-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-240-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-241',
    bomNumber: 'BOM-SRV-SYS-341',
    productId: 'prod-ext-241',
    productName: 'ERPCore Series 241 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-241-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-241-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-241-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-242',
    bomNumber: 'BOM-SRV-SYS-342',
    productId: 'prod-ext-242',
    productName: 'ERPCore Series 242 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-242-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-242-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-242-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-243',
    bomNumber: 'BOM-SRV-SYS-343',
    productId: 'prod-ext-243',
    productName: 'ERPCore Series 243 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-243-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-243-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-243-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-244',
    bomNumber: 'BOM-SRV-SYS-344',
    productId: 'prod-ext-244',
    productName: 'ERPCore Series 244 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-244-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-244-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-244-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-245',
    bomNumber: 'BOM-SRV-SYS-345',
    productId: 'prod-ext-245',
    productName: 'ERPCore Series 245 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-245-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-245-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-245-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-246',
    bomNumber: 'BOM-SRV-SYS-346',
    productId: 'prod-ext-246',
    productName: 'ERPCore Series 246 Node Server Assembly',
    version: '1.1.0',
    components: [
      { id: 'comp-246-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-246-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-246-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-247',
    bomNumber: 'BOM-SRV-SYS-347',
    productId: 'prod-ext-247',
    productName: 'ERPCore Series 247 Node Server Assembly',
    version: '1.2.0',
    components: [
      { id: 'comp-247-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-247-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-247-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-248',
    bomNumber: 'BOM-SRV-SYS-348',
    productId: 'prod-ext-248',
    productName: 'ERPCore Series 248 Node Server Assembly',
    version: '1.3.0',
    components: [
      { id: 'comp-248-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-248-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-248-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-249',
    bomNumber: 'BOM-SRV-SYS-349',
    productId: 'prod-ext-249',
    productName: 'ERPCore Series 249 Node Server Assembly',
    version: '1.4.0',
    components: [
      { id: 'comp-249-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-249-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-249-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  },
  {
    id: 'bom-ext-250',
    bomNumber: 'BOM-SRV-SYS-350',
    productId: 'prod-ext-250',
    productName: 'ERPCore Series 250 Node Server Assembly',
    version: '1.0.0',
    components: [
      { id: 'comp-250-1', productId: 'prod-sensor-temp', productName: 'Thermal Probe Component', sku: 'ERP-SNS-TMP01', quantity: 4, unitOfMeasure: 'PCS', unitCost: 28.00, totalCost: 112.00 },
      { id: 'comp-250-2', productId: 'prod-gateway-g5', productName: 'IoT Telemetry Gateway', sku: 'ERP-GTW-G500', quantity: 1, unitOfMeasure: 'PCS', unitCost: 450.00, totalCost: 450.00 }
    ],
    operations: [
      { id: 'op-250-1', operationName: 'Assembly & Cable Wiring', workCenterId: 'wc-1', workCenterName: 'Work Center 01', standardTimeHours: 2.5, hourlyRate: 65.00, totalLaborCost: 162.50 }
    ],
    materialCost: 562.00,
    laborCost: 162.50,
    overheadCost: 50.00,
    totalCost: 774.50,
    active: true
  }
];
