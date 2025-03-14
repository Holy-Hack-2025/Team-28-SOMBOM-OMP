import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Package, Truck, Recycle, TrendingUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { DashboardCard } from './components/DashboardCard';
import { TransactionList } from './components/TransactionList';
import { IoTMonitor } from './components/IoTMonitor';
import { DemandForecast } from './components/DemandForecast';
import { CircularFlow } from './components/CircularFlow';
import { AddTransactionForm } from './components/AddTransactionForm';
import { MapView } from './components/MapView';
import { SustainabilityDashboard } from './pages/SustainabilityDashboard';
import { mockTransactions as initialTransactions, mockIoTData, mockDashboardMetrics } from './data/mockData';
import { Transaction } from './types';

const Dashboard = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id' | 'timestamp'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: `${transactions.length + 1}`,
      timestamp: new Date(),
    };
    setTransactions([transaction, ...transactions]);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard
          title="Inventory Level"
          value={`${mockDashboardMetrics.inventoryLevel}%`}
          icon={Package}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Active Shipments"
          value={mockDashboardMetrics.activeShipments}
          icon={Truck}
        />
        <DashboardCard
          title="Recycled Materials"
          value={`${mockDashboardMetrics.recycledPercentage}%`}
          icon={Recycle}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Monthly Demand"
          value={mockDashboardMetrics.monthlyDemand[11]}
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DemandForecast data={mockDashboardMetrics.monthlyDemand} />
        <CircularFlow />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MapView data={mockIoTData} />
        <IoTMonitor data={mockIoTData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionList transactions={transactions} />
        <AddTransactionForm onSubmit={handleAddTransaction} />
      </div>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sustainability" element={<SustainabilityDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;