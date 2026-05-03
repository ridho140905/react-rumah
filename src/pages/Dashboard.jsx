import { useState } from "react";
import PageHeader from "../components/Page.Header";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const productDataJSON = [
    { id: "555-0112", name: "Cupboard", qty: 105, price: "$473.85", status: "Available" },
    { id: "555-0116", name: "Standing Lamp", qty: 270, price: "$630.44", status: "Available" },
    { id: "555-0110", name: "Cabinet", qty: 120, price: "$105.58", status: "Sold Out" },
    { id: "555-0104", name: "Dressing Table", qty: 0, price: "$105.55", status: "Sold Out" },
    { id: "555-0120", name: "Modern Sofa", qty: 45, price: "$890.00", status: "Available" },
    { id: "555-0121", name: "Wooden Bookshelf", qty: 15, price: "$320.00", status: "Available" },
  ];

  const popularItems = [
    { 
        id: 1, 
        name: "Minimalist Chair", 
        price: "$120", 
        rating: "4.5", 
        img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=150&h=150&fit=crop" 
    },
    { 
        id: 2, 
        name: "Desk Lamp", 
        price: "$200", 
        rating: "4.5", 
        img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop" 
    },
    { 
        id: 3, 
        name: "Modern Sofa", 
        price: "$450", 
        rating: "4.8", 
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop" 
    },
    { 
        id: 4, 
        name: "Wooden Cabinet", 
        price: "$320", 
        rating: "4.7", 
        img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=150&h=150&fit=crop" 
    }
  ];

  const filteredProducts = productDataJSON.filter((prod) => {
    const matchSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterStatus === "All" || prod.status === filterStatus;
    return matchSearch && matchFilter;
  });

  return (
    <div>
      {/* Menggunakan PageHeader Khusus Halaman dan menghindari bentrok */}
      <PageHeader title="Overview" breadcrumb={["Overview"]} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Income & Spending */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Income</p>
              <h2 className="text-2xl font-bold text-gray-800">$17000.00</h2>
              <p className="text-green-500 text-xs font-medium flex items-center mt-2">
                <MdTrendingUp className="mr-1" /> Up to 24 %
              </p>
            </div>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30 Q 15 10, 30 25 T 60 5" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Spending</p>
              <h2 className="text-2xl font-bold text-gray-800">$900.00</h2>
              <p className="text-orange-400 text-xs font-medium flex items-center mt-2">
                <MdTrendingDown className="mr-1" /> Down to 46 %
              </p>
            </div>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5 Q 15 25, 30 10 T 60 35" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Kolom Kanan: Analytic Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-50 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Analytic</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">Sort by</span>
              <select className="border border-gray-200 rounded-md p-1 outline-none text-gray-700 bg-transparent">
                <option>Product</option>
              </select>
            </div>
          </div>
          <div className="w-full h-40 bg-gradient-to-t from-purple-100 to-white rounded-b-xl flex items-end relative">
             <div className="absolute top-4 left-1/3 bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                $460.00 <span className="text-[10px] font-normal block text-center">Up to 24%</span>
             </div>
             <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
               <path d="M0,100 C100,80 150,20 200,50 C250,80 300,10 400,30 L400,100 L0,100 Z" fill="#d8b4fe" opacity="0.4"/>
               <path d="M0,100 C100,80 150,20 200,50 C250,80 300,10 400,30" stroke="#a855f7" strokeWidth="2" fill="none"/>
             </svg>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="font-bold text-gray-800">Product List</h3>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-48">
                <input 
                  type="text" 
                  placeholder="Search product..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-purple-500 transition-colors"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
              </div>

              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-200 rounded-lg py-1.5 px-3 text-sm outline-none text-gray-700 bg-white focus:border-purple-500 transition-colors"
              >
                <option value="All">All Status</option>
                <option value="Available">Available</option>
                <option value="Sold Out">Sold Out</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-100">
                  <th className="pb-3 font-medium">ID Product</th>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Quality</th>
                  <th className="pb-3 font-medium">Total Price</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((prod, i) => (
                    <tr key={i} className="hover:bg-purple-50 transition-colors">
                      <td className="py-4 font-medium text-gray-500">{prod.id}</td>
                      <td className="py-4 font-semibold text-gray-700">{prod.name}</td>
                      <td className="py-4 text-gray-500">{prod.qty}</td>
                      <td className="py-4 font-semibold text-gray-700">{prod.price}</td>
                      <td className="py-4">
                        <span className={`px-4 py-1 rounded-md text-[11px] font-bold ${
                          prod.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                        }`}>
                          {prod.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-gray-400">
                      Product "{searchTerm}" not found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Items */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
          <h3 className="font-bold text-gray-800 mb-4">Popular</h3>
          <div className="space-y-4">
            {popularItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                  <div className="flex text-yellow-400 text-[10px] my-1">
                    {'★★★★☆'} <span className="text-gray-400 ml-1">{item.rating}</span>
                  </div>
                  <p className="font-bold text-gray-800 text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}