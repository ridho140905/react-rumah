import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Male",   value: 55, color: "#4F45B6" },
  { name: "Female", value: 45, color: "#FFB800" },
  { name: "Other",  value: 45, color: "#FF7A5C" },
];

const UserProfileChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 h-full">
      <h3 className="text-base font-bold text-gray-800 font-['Cairo'] mb-4">User Profile</h3>

      {/* Donut Chart */}
      <div className="flex justify-center mb-4">
        <div className="w-[160px] h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 mt-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border-2"
                style={{ borderColor: item.color, backgroundColor: "transparent" }}
              />
              <span className="text-sm text-gray-500 font-['Cairo']">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-gray-800 font-['Cairo']">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileChart;
