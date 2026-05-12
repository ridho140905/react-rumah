import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { v: 200 },
  { v: 350 },
  { v: 280 },
  { v: 500 },
  { v: 380 },
  { v: 420 },
  { v: 370 },
  { v: 460 },
  { v: 520 },
  { v: 600 },
];

const VisitorCard = ({ value = "345,678" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 flex flex-col justify-between h-full min-h-[160px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-gray-800 font-['Cairo']">Visitors</span>
        <span className="text-2xl font-bold text-gray-800 font-['Cairo']">{value}</span>
      </div>

      {/* Chart */}
      <div className="w-full h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="visitorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#4F45B6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4F45B6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: "#4F45B6",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
                padding: "4px 10px",
              }}
              itemStyle={{ color: "#fff" }}
              formatter={(val) => [val.toLocaleString(), "Visitors"]}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#4F45B6"
              strokeWidth={2.5}
              fill="url(#visitorGradient)"
              dot={false}
              activeDot={{ r: 6, fill: "#4F45B6", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorCard;
