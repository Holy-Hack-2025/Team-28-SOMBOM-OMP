import React from 'react';
import { format } from 'date-fns';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Blockchain Ledger</h2>
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Timestamp</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Event</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Product ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100">
                <td className="px-4 py-3 text-sm text-gray-500">
                  {format(transaction.timestamp, 'MMM d, yyyy HH:mm')}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {transaction.eventType}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{transaction.productId}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};