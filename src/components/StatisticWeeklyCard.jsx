import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  BarChart,
  Bar,
  Cell,
} from "recharts";

// Data line chart
const lineData = [
  { x: 0,   a: 72,  b: 25  },
  { x: 20,  a: 38,  b: 55  },
  { x: 40,  a: 58,  b: 80  },
  { x: 60,  a: 48,  b: 40  },
  { x: 80,  a: 62,  b: 72  },
  { x: 100, a: 55,  b: 60  },
  { x: 120, a: 88,  b: 32  },
];

// Data bar chart impression
const impressionData = [
  { v: 75 },
  { v: 30 },
  { v: 55 },
  { v: 45 },
  { v: 90 },
  { v: 42 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-md px-3 py-2 text-xs font-['Cairo']">
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }} className="font-semibold">{p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

const StatisticWeeklyCard = ({
  thisWeek   = "+20%",
  lastWeek   = "+13%",
  impression = "12.345",
  growth     = "5.4%",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 flex gap-6 h-full">

      {/* KIRI: Statistic Line Chart */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-800 font-['Cairo'] mb-4">Statistic</h3>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={lineData} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid
                vertical={true}
                horizontal={false}
                stroke="#E5E7EB"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="x"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9CA3AF", fontFamily: "Cairo" }}
              />
              <Tooltip content={<CustomTooltip />} />
              {/* Line ungu — mulai tinggi, turun dulu, naik di akhir */}
              <Line
                type="monotone"
                dataKey="a"
                stroke="#4F45B6"
                strokeWidth={2.5}
                dot={(props) => {
                  const { cx, cy, index } = props;
                  if (index === 0 || index === lineData.length - 1) {
                    return (
                      <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={5}
                        fill="#4F45B6"
                        stroke="white"
                        strokeWidth={2}
                      />
                    );
                  }
                  return null;
                }}
                activeDot={{ r: 6, fill: "#4F45B6", strokeWidth: 0 }}
              />
              {/* Line kuning — mulai rendah, naik */}
              <Line
                type="monotone"
                dataKey="b"
                stroke="#FFB800"
                strokeWidth={2.5}
                dot={(props) => {
                  const { cx, cy, index } = props;
                  if (index === 0 || index === lineData.length - 1) {
                    return (
                      <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r={5}
                        fill="#FFB800"
                        stroke="white"
                        strokeWidth={2}
                      />
                    );
                  }
                  return null;
                }}
                activeDot={{ r: 6, fill: "#FFB800", strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-50 self-stretch" />

      {/* KANAN: Weekly + Impression */}
      <div className="w-[200px] flex flex-col gap-6">

        {/* Weekly */}
        <div>
          <h3 className="text-base font-bold text-gray-800 font-['Cairo'] mb-4">Weekly</h3>
          <div className="flex gap-6">
            <div>
              <p className="text-xs text-gray-400 font-['Cairo'] mb-1">This Week</p>
              <p className="text-xl font-bold font-['Cairo']" style={{ color: "#4F45B6" }}>
                {thisWeek}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-['Cairo'] mb-1">Last Week</p>
              <p className="text-xl font-bold font-['Cairo']" style={{ color: "#FFB800" }}>
                {lastWeek}
              </p>
            </div>
          </div>
        </div>

        {/* Impression */}
        <div>
          <h3 className="text-base font-bold text-gray-800 font-['Cairo'] mb-3">Impression</h3>
          <div className="h-[90px] mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={impressionData} barCategoryGap="20%">
                <Bar dataKey="v" radius={[4, 4, 4, 4]}>
                  {impressionData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={index === 4 ? "#4F45B6" : "#C7C4EC"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold text-gray-800 font-['Cairo']">{impression}</span>
            <span className="text-sm font-semibold font-['Cairo']" style={{ color: "#00B074" }}>
              {growth}
            </span>
            <span className="text-xs text-gray-400 font-['Cairo']">than last year</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatisticWeeklyCard;
