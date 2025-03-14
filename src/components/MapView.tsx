import React from 'react';
import { IoTData } from '../types';

interface MapViewProps {
  data: IoTData[];
}

export const MapView: React.FC<MapViewProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Shipment Tracking</h2>
      <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
          alt="World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {data.map((sensor) => (
          <div
            key={sensor.id}
            className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
              sensor.status === 'ON_ROUTE' ? 'bg-yellow-500' :
              sensor.status === 'DELIVERED' ? 'bg-green-500' :
              'bg-blue-500'
            }`}
            style={{
              left: `${((sensor.location.lng + 180) / 360) * 100}%`,
              top: `${((90 - sensor.location.lat) / 180) * 100}%`,
            }}
          >
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
              <span className="bg-white px-2 py-1 rounded text-xs shadow">
                {sensor.productId} ({sensor.temperature}°C)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};