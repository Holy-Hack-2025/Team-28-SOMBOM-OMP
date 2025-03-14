import { Transaction, IoTData, DashboardMetrics } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    timestamp: new Date('2024-03-10T10:00:00'),
    eventType: 'CREATED',
    productId: 'PROD-001',
    status: 'In Production',
    details: 'New sustainable product batch initiated'
  },
  {
    id: '2',
    timestamp: new Date('2024-03-10T11:30:00'),
    eventType: 'DISPATCHED',
    productId: 'PROD-001',
    status: 'In Transit',
    details: 'Shipment dispatched to distribution center'
  },
  {
    id: '3',
    timestamp: new Date('2024-03-10T14:15:00'),
    eventType: 'RECEIVED',
    productId: 'PROD-002',
    status: 'Delivered',
    details: 'Product received at warehouse'
  },
  {
    id: '4',
    timestamp: new Date('2024-03-10T16:45:00'),
    eventType: 'REFURBISHMENT',
    productId: 'PROD-003',
    status: 'Processing',
    details: 'Product entered refurbishment cycle'
  }
];

export const mockIoTData: IoTData[] = [
  {
    id: 'IOT-001',
    productId: 'PROD-001',
    location: { lat: 40.7128, lng: -74.0060 },
    temperature: 22.5,
    status: 'ON_ROUTE',
    lastUpdate: new Date('2024-03-10T16:00:00')
  },
  {
    id: 'IOT-002',
    productId: 'PROD-002',
    location: { lat: 34.0522, lng: -118.2437 },
    temperature: 23.1,
    status: 'DELIVERED',
    lastUpdate: new Date('2024-03-10T15:45:00')
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  inventoryLevel: 85,
  activeShipments: 12,
  recycledPercentage: 65,
  monthlyDemand: [120, 135, 150, 145, 160, 175, 180, 190, 185, 195, 210, 205],
  sustainabilityScore: 87
};