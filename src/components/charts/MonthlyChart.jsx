import React from 'react';
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 40 }, { name: 'Feb', value: 30 },
  { name: 'Mar', value: 45 }, { name: 'Apr', value: 35 },
  { name: 'May', value: 40 }, { name: 'Jun', value: 85 }, // Bulan aktif
  { name: 'Jul', value: 65 }, { name: 'Aug', value: 35 },
  { name: 'Sep', value: 50 }, { name: 'Oct', value: 40 },
  { name: 'Nov', value: 45 }, { name: 'Dec', value: 60 },
];

const MonthlyChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 h-[300px]">
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-gray-400 text-sm">Total Customers</p>
          <h2 className="text-2xl font-bold">345,678</h2>
        </div>
        {/* Tambahkan info lain seperti 'New User' dan 'Growth' di sini */}
      </div>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A0AEC0', fontSize: 12 }} />
          <Bar dataKey="value" radius={[4, 4, 4, 4]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.name === 'Jun' ? '#5D5FEF' : '#E0E7FF'} // Warna ungu untuk Jun, biru pudar untuk lainnya
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;