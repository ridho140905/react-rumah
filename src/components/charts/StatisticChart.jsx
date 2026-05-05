import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '0', uv: 20, pv: 40 },
  { name: '20', uv: 40, pv: 25 },
  { name: '40', uv: 25, pv: 55 },
  { name: '60', uv: 60, pv: 30 },
  { name: '80', uv: 45, pv: 65 },
  { name: '100', uv: 55, pv: 35 },
  { name: '120', uv: 70, pv: 45 },
];

const StatisticChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 h-[350px]">
      <h3 className="text-lg font-bold mb-4">Statistic</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A0AEC0', fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A0AEC0', fontSize: 12 }} />
          <Tooltip cursor={{ stroke: '#f0f0f0', strokeWidth: 2 }} />
          {/* Garis Ungu */}
          <Line type="monotone" dataKey="uv" stroke="#5D5FEF" strokeWidth={3} dot={{ r: 4, fill: '#5D5FEF' }} activeDot={{ r: 6 }} />
          {/* Garis Kuning */}
          <Line type="monotone" dataKey="pv" stroke="#FFB800" strokeWidth={3} dot={{ r: 4, fill: '#FFB800' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticChart;