import React from 'react';

/**
 * StatCard Component
 * 
 * Props:
 * @param {React.ElementType} icon     - Lucide icon component
 * @param {string}            label    - Nama label (e.g. "Projects")
 * @param {number|string}     value    - Nilai angka (e.g. 932)
 * @param {string}            iconBg   - Warna background icon (e.g. "#EEF0FF")
 * @param {string}            iconColor - Warna icon (e.g. "#4F45B6")
 */
const StatCard = ({ icon: Icon, label, value, iconBg, iconColor }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 w-full">
      {/* Kiri: Icon + Label */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg || '#F3F4F6' }}
        >
          {Icon && (
            <Icon
              size={20}
              strokeWidth={1.8}
              style={{ color: iconColor || '#6B7280' }}
            />
          )}
        </div>
        <span className="text-sm text-gray-500 font-['Cairo'] font-medium whitespace-nowrap">
          {label}
        </span>
      </div>

      {/* Kanan: Nilai */}
      <span className="text-lg font-['Cairo'] font-bold text-gray-800 ml-4">
        {value}
      </span>
    </div>
  );
};

export default StatCard;


