import PageHeader from "../components/Page.Header";
import { MdTrendingUp, MdTrendingDown, MdPeople, MdVisibility, MdShoppingCart } from "react-icons/md";

export default function Analytic() {
  return (
    <div>
      <PageHeader title="Analytic" breadcrumb={["Analytic"]} />

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Conversion Rate</p>
            <h3 className="text-2xl font-bold text-gray-800">4.8%</h3>
            <p className="text-green-500 text-xs font-medium flex items-center mt-2">
              <MdTrendingUp className="mr-1" /> +1.2% this week
            </p>
          </div>
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
            <MdShoppingCart size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Product Views</p>
            <h3 className="text-2xl font-bold text-gray-800">12,480</h3>
            <p className="text-green-500 text-xs font-medium flex items-center mt-2">
              <MdTrendingUp className="mr-1" /> +8.5% this week
            </p>
          </div>
          <div className="p-4 bg-orange-50 text-orange-500 rounded-2xl">
            <MdVisibility size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Customer Reach</p>
            <h3 className="text-2xl font-bold text-gray-800">3,120</h3>
            <p className="text-orange-400 text-xs font-medium flex items-center mt-2">
              <MdTrendingDown className="mr-1" /> -2.0% this week
            </p>
          </div>
          <div className="p-4 bg-gray-50 text-gray-600 rounded-2xl">
            <MdPeople size={24} />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <h3 className="font-bold text-gray-800 mb-4">Monthly Sales Growth</h3>
          <div className="h-64 bg-gradient-to-t from-purple-50 to-white rounded-2xl flex items-end p-4 relative">
            <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
              <path d="M0,180 C100,120 150,50 220,80 C290,110 360,30 500,20 L500,200 L0,200 Z" fill="#d8b4fe" opacity="0.4"/>
              <path d="M0,180 C100,120 150,50 220,80 C290,110 360,30 500,20" stroke="#9333ea" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Top Categories</h3>
            <div className="space-y-4 mt-2">
              <div>
                <div className="flex justify-between text-sm mb-1 font-medium">
                  <span className="text-gray-700">Furniture</span>
                  <span className="text-purple-600">65%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 w-[65%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 font-medium">
                  <span className="text-gray-700">Lighting</span>
                  <span className="text-orange-500">20%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[20%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1 font-medium">
                  <span className="text-gray-700">Accessories</span>
                  <span className="text-gray-600">15%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-500 w-[15%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Data is based on actual sales records for May 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
