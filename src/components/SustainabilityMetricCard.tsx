import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SustainabilityMetricCardProps {
  title: string;
  value: number;
  target: number;
  icon: LucideIcon;
  unit: string;
  color: string;
}

export const SustainabilityMetricCard: React.FC<SustainabilityMetricCardProps> = ({
  title,
  value,
  target,
  icon: Icon,
  unit,
  color,
}) => {
  const percentage = (value / target) * 100;
  const data = [
    { name: 'Progress', value: percentage },
    { name: 'Remaining', value: 100 - percentage },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`p-3 rounded-lg bg-opacity-20`} style={{ backgroundColor: `${color}20` }}>
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-28 w-28">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={40}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill={color} />
                <Cell fill="#E5E7EB" />
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold mb-1" style={{ color }}>
            {value}{unit}
          </p>
          <p className="text-sm text-gray-500">
            Target: {target}{unit}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="h-3 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          {percentage.toFixed(1)}% of target achieved
        </p>
      </div>
    </div>
  );
};