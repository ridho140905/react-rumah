import React, { useState } from "react";

const activities = [
  {
    title: "Transaction Assets",
    desc: "Ab architecto provident or accusantium deserunt.",
    time: "2 Hour Ago",
    color: "#4F45B6",
  },
  {
    title: "New Email Register",
    desc: "Ab architecto provident ex accusantium deserunt.",
    time: "2 Hour Ago",
    color: "#1C1C1C",
  },
  {
    title: "Transaction Assets",
    desc: "Ab architecto provident or accusantium deserunt.",
    time: "2 Hour Ago",
    color: "#FFB800",
  },
  {
    title: "New Email Register",
    desc: "Ab architecto provident ex accusantium deserunt.",
    time: "2 Hour Ago",
    color: "#FF7A5C",
  },
];

const RecentActivityCard = () => {
  const [activeTab, setActiveTab] = useState("Activity");

  return (
    <div>
      {/* Header */}
      <h3 className="text-sm font-bold text-gray-800 font-['Cairo'] mb-3">Recent Activity</h3>

      {/* Tab */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
        {["Activity", "Update"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-1.5 rounded-lg text-xs font-semibold font-['Cairo'] transition-all duration-200"
            style={{
              backgroundColor: activeTab === tab ? "#4F45B6" : "transparent",
              color: activeTab === tab ? "#fff" : "#9CA3AF",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div className="flex flex-col gap-4">
        {activities.map((item, index) => (
          <div key={index} className="flex gap-3">
            {/* Dot + line */}
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: item.color }}
              />
              {index < activities.length - 1 && (
                <div className="w-px flex-1 bg-gray-100 mt-1" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 pb-2">
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-xs font-semibold text-gray-800 font-['Cairo']">
                  {item.title}
                </p>
                <p className="text-[10px] text-gray-400 font-['Cairo']">{item.time}</p>
              </div>
              <p className="text-[11px] text-gray-400 font-['Cairo'] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
