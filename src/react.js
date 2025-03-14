import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const CollaborativeSupplyChain = () => {
  const [blockchainLog, setBlockchainLog] = useState([]);
  const [salesPrediction, setSalesPrediction] = useState([]);
  const [iotUpdates, setIoTUpdates] = useState([]);

  useEffect(() => {
    // Fetch blockchain log
    fetch('/blockchain/')
      .then(res => res.json())
      .then(data => setBlockchainLog(data));

    // Fetch sales predictions
    fetch('/sales-prediction/')
      .then(res => res.json())
      .then(data => setSalesPrediction(data));

    // Fetch IoT monitoring data
    fetch('/iot-monitoring/')
      .then(res => res.json())
      .then(data => setIoTUpdates(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Collaborative Supply Chain Model</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Blockchain Log</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {blockchainLog.map((block, index) => (
            <Card key={index} className="p-4 shadow-md">
              <CardContent>
                <p><strong>Block #{block.block}</strong></p>
                <p>Event: {block.event}</p>
                <p>Hash: {block.hash}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Sales Forecast (AI)</h2>
        <LineChart width={600} height={300} data={salesPrediction}>
          <Line type="monotone" dataKey="predictedSales" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="week" label={{ value: 'Week', position: 'insideBottomRight', offset: -10 }} />
          <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
        </LineChart>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">IoT Monitoring</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {iotUpdates.map((iot, index) => (
            <Card key={index} className="p-4 shadow-md">
              <CardContent>
                <p><strong>Product ID: {iot.product}</strong></p>
                <p>Location: {iot.location}</p>
                <p>Battery Health: {iot.battery_health.toFixed(2)}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollaborativeSupplyChain;
