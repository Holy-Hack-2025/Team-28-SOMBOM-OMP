import React from 'react';
import { format } from 'date-fns';
import { MapPin, Thermometer } from 'lucide-react';
import { IoTData } from '../types';

interface IoTMonitorProps {
  data: IoTData[];
}

export const IoTMonitor: React.FC<IoTMonitorProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">IoT Sensor Data</h2>
      <div className="grid gap-4">
        {data.map((sensor) => (
          <div key={sensor.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-500">Device {sensor.id}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                sensor.status === 'ON_ROUTE' ? 'bg-yellow-50 text-yellow-700' :
                sensor.status === 'DELIVERED' ? 'bg-green-50 text-green-700' :
                'bg-blue-50 text-blue-700'
              }`}>
                {sensor.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm">
                  {sensor.location.lat.toFixed(4)}, {sensor.location.lng.toFixed(4)}
                </span>
              </div>
              <div className="flex items-center">
                <Thermometer className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm">{sensor.temperature}°C</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Last update: {format(sensor.lastUpdate, 'MMM d, yyyy HH:mm')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};