export interface Transaction {
  id: string;
  timestamp: Date;
  eventType: 'CREATED' | 'DISPATCHED' | 'RECEIVED' | 'REFURBISHMENT';
  productId: string;
  status: string;
  details: string;
}

export interface IoTData {
  id: string;
  productId: string;
  location: {
    lat: number;
    lng: number;
  };
  temperature: number;
  status: 'ON_ROUTE' | 'DELIVERED' | 'RETURNING' | 'REFURBISHING';
  lastUpdate: Date;
}

export interface DashboardMetrics {
  inventoryLevel: number;
  activeShipments: number;
  recycledPercentage: number;
  monthlyDemand: number[];
  sustainabilityScore: number;
}