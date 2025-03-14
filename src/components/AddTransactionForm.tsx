import React, { useState } from 'react';
import { Transaction } from '../types';

interface AddTransactionFormProps {
  onSubmit: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void;
}

export const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    eventType: 'CREATED',
    productId: '',
    status: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      eventType: 'CREATED',
      productId: '',
      status: '',
      details: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Type
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value as Transaction['eventType'] })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="CREATED">Created</option>
            <option value="DISPATCHED">Dispatched</option>
            <option value="RECEIVED">Received</option>
            <option value="REFURBISHMENT">Refurbishment</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product ID
          </label>
          <input
            type="text"
            value={formData.productId}
            onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="Enter product ID"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <input
            type="text"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="Enter status"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Details
          </label>
          <textarea
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="Enter transaction details"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};