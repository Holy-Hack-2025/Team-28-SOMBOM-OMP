import React from 'react';
import { Leaf, Droplets, Recycle, Battery, Wind } from 'lucide-react';
import { SustainabilityMetricCard } from '../components/SustainabilityMetricCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const energyTrendData = [
  { month: 'Jan', savings: 2500, baseline: 3000 },
  { month: 'Feb', savings: 3200, baseline: 3100 },
  { month: 'Mar', savings: 2800, baseline: 3000 },
  { month: 'Apr', savings: 3600, baseline: 3200 },
  { month: 'May', savings: 3900, baseline: 3300 },
  { month: 'Jun', savings: 3400, baseline: 3100 },
];

export const SustainabilityDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#348788] to-[#2a6e6f] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">Sustainability KPIs Dashboard</h1>
          <p className="text-[#e0f2f2] text-lg max-w-3xl">
            Track your organization's environmental impact and drive sustainable practices through data-driven insights
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <SustainabilityMetricCard
            title="Carbon Emissions Reduction"
            value={65}
            target={100}
            icon={Leaf}
            unit="%"
            color="#348788"
          />
          <SustainabilityMetricCard
            title="Water Usage Reduction"
            value={12500}
            target={15000}
            icon={Droplets}
            unit="L"
            color="#348788"
          />
          <SustainabilityMetricCard
            title="Recycled Materials"
            value={75}
            target={90}
            icon={Recycle}
            unit="%"
            color="#348788"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Energy Savings Trend</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyTrendData}>
                  <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#348788" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#348788" stopOpacity={0.01}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#348788"
                    fillOpacity={1}
                    fill="url(#colorSavings)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="baseline"
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <SustainabilityMetricCard
              title="Waste Diversion Rate"
              value={60}
              target={80}
              icon={Battery}
              unit="%"
              color="#348788"
            />
            <SustainabilityMetricCard
              title="Renewable Energy Usage"
              value={45}
              target={75}
              icon={Wind}
              unit="%"
              color="#348788"
            />
          </div>
        </div>
      </main>
    </div>
  );
};