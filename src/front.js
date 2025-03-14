import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// Dummy data for blockchain, AI predictions, and IoT monitoring
const blockchainData = [
  { block: 1, event: 'Smartphone A manufactured', hash: '0x123abc' },
  { block: 2, event: 'Smartphone A shipped to distributor', hash: '0x456def' },
  { block: 3, event: 'Smartphone A returned for recycling', hash: '0x789ghi' }
];

const salesPredictionData = [
  { week: 11, predictedSales: 820 },
  { week: 12, predictedSales: 840 },
  { week: 13, predictedSales: 860 },
  { week: 14, predictedSales: 880 },
  { week: 15, predictedSales: 900 }
];

const IoTData = [
  { product: 'Smartphone_A123', location: 'Factory', battery_health: 100 },
  { product: 'Smartphone_A123', location: 'Warehouse', battery_health: 95 },
  { product: 'Smartphone_A123', location: 'Distributor', battery_health: 92 },
  { product: 'Smartphone_A123', location: 'Customer', battery_health: 85 },
  { product: 'Smartphone_A123', location: 'Recycling', battery_health: 0 }
];

const CollaborativeSupplyChain = () => {
  const [iotUpdates, setIoTUpdates] = useState(IoTData);
  const [blockchainLog, setBlockchainLog] = useState(blockchainData);

  useEffect(() => {
    // Simulate IoT data updates
    const interval = setInterval(() => {
      const updatedIoT = iotUpdates.map((entry) => ({
        ...entry,
        battery_health: Math.max(0, entry.battery_health - Math.random() * 5)
      }));
      setIoTUpdates(updatedIoT);
    }, 2000);

    return () => clearInterval(interval);
  }, [iotUpdates]);

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>Collaborative Supply Chain Model</h1>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold'>Blockchain Log</h2>
        <div className='grid grid-cols-1 gap-4 mt-4'>
          {blockchainLog.map((block, index) => (
            <Card key={index} className='p-4 shadow-md'>
              <CardContent>
                <p><strong>Block #{block.block}</strong></p>
                <p>Event: {block.event}</p>
                <p>Hash: {block.hash}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold'>Sales Forecast (AI)</h2>
        <LineChart width={600} height={300} data={salesPredictionData}>
          <Line type='monotone' dataKey='predictedSales' stroke='#8884d8' />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='week' label={{ value: 'Week', position: 'insideBottomRight', offset: -10 }} />
          <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
        </LineChart>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold'>IoT Monitoring</h2>
        <div className='grid grid-cols-1 gap-4 mt-4'>
          {iotUpdates.map((iot, index) => (
            <Card key={index} className='p-4 shadow-md'>
              <CardContent>
                <p><strong>Product ID: {iot.product}</strong></p>
                <p>Location: {iot.location}</p>
                <p>Battery Health: {iot.battery_health.toFixed(2)}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Button className='bg-blue-500 text-white p-2 rounded-lg shadow-md'>Run AI Demand Forecast</Button>
      </section>
    </div>
  );
};

export default CollaborativeSupplyChain;
