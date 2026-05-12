import React, { useState } from "react";
import { FiArrowUp, FiChevronDown } from "react-icons/fi";

/**
 * StatsSummaryBar — tanpa card wrapper, dipakai di dalam card lain
 * Props:
 * @param {string} totalCustomers
 * @param {number} newUser
 * @param {string} growth
 */
const StatsSummaryBar = ({
  totalCustomers = "345,678",
  newUser = 49,
  growth = "+10%",
}) => {
  const [period, setPeriod] = useState("Month");

  return (
    <div className="flex items-center gap-12">

      {/* Total Customers */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 font-['Cairo']">Total Customers</span>
        <span className="text-xl font-bold text-gray-800 font-['Cairo']">{totalCustomers}</span>
      </div>

      <div className="w-px h-10 bg-gray-100" />

      {/* New User */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 font-['Cairo']">New User</span>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800 font-['Cairo']">{newUser}</span>
          <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
            <FiArrowUp size={12} className="text-white" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="w-px h-10 bg-gray-100" />

      {/* Growth */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 font-['Cairo']">Growth</span>
        <span className="text-xl font-bold text-gray-800 font-['Cairo']">{growth}</span>
      </div>

      <div className="w-px h-10 bg-gray-100" />

      {/* Period Dropdown */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 font-['Cairo']">Period</span>
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none bg-transparent text-xl font-bold text-gray-800 font-['Cairo'] pr-6 cursor-pointer outline-none"
          >
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
          <FiChevronDown
            size={16}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"
            strokeWidth={2.5}
          />
        </div>
      </div>

    </div>
  );
};

export default StatsSummaryBar;
