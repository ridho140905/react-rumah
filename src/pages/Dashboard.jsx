import React from "react";
import { FiBriefcase, FiFileText, FiUsers, FiDollarSign } from "react-icons/fi";

// Import Komponen
import StatisticChart from "../components/charts/StatisticChart";
import UserProfileChart from "../components/charts/UserProfileChart";
import MonthlyChart from "../components/charts/MonthlyChart";
import RightSidebar from "../components/RightSidebar";
import UserReviews from "../components/UserReviews"; // Footer review

const Dashboard = () => {
  const summaryCards = [
    { title: "Projects", value: "932", icon: FiBriefcase, textColor: "text-[#5D5FEF]", bgColor: "bg-[#F4F2FF]" },
    { title: "Side Projects", value: "932", icon: FiFileText, textColor: "text-[#FFB800]", bgColor: "bg-[#FFF8E5]" },
    { title: "Total Customer", value: "932", icon: FiUsers, textColor: "text-[#FF7A00]", bgColor: "bg-[#FFF2E5]" },
    { title: "Sale", value: "932", icon: FiDollarSign, textColor: "text-[#00B074]", bgColor: "bg-[#E5F7F1]" },
  ];

  return (
    <div className="flex -mx-8 -my-8 min-h-screen bg-[#FBFBFB]">
      {/* AREA KIRI: Konten Utama */}
      <div className="flex-1 p-8 space-y-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        
        {/* Row 1: Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border border-gray-50">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bgColor} ${card.textColor}`}>
                  <card.icon size={24} />
                </div>
                <span className="text-gray-500 font-medium">{card.title}</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">{card.value}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Monthly Chart (Full Width di area kiri) */}
        <div className="w-full">
           <MonthlyChart />
        </div>

        {/* Row 3: Statistic & User Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StatisticChart />
          </div>
          <div className="lg:col-span-1">
            <UserProfileChart />
          </div>
        </div>

        {/* Row 4: Footer (User Reviews) */}
        <UserReviews />
      </div>

      {/* AREA KANAN: Right Sidebar */}
      <div className="hidden 2xl:block">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Dashboard;