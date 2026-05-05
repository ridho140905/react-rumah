import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Male', value: 55, color: '#5D5FEF' },
  { name: 'Female', value: 45, color: '#FFB800' },
  { name: 'Other', value: 45, color: '#FF7A00' },
];

const UserProfileChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col h-[350px]">
      <h3 className="text-lg font-bold mb-2">User Profile</h3>
      
      <div className="flex-1 flex justify-center items-center">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend sesuai desain */}
      <div className="flex flex-col gap-2 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-gray-500">{item.name}</span>
            </div>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileChart;