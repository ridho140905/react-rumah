import React from 'react';
import { Search, ChevronDown, MessageSquare, Bell, Settings } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 bg-white font-['Cairo']">
      
      {/* Kiri: Search Bar */}
      <div className="flex items-center bg-[#F4F2FF] rounded-full px-4 py-2 w-80">
        <Search className="w-5 h-5 text-[#5D5FEF] mr-3" />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="bg-transparent border-none outline-none text-sm text-gray-500 w-full placeholder:text-gray-400"
        />
      </div>

      {/* Kanan: Actions & Profile */}
      <div className="flex items-center gap-8">
        
        {/* Language Selector */}
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
          <img 
            src="https://flagcdn.com/w20/us.png" 
            alt="US Flag" 
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-gray-800">English (US)</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {/* Notification Icons */}
        <div className="flex items-center gap-5">
          {/* Messages */}
          <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#5D5FEF] text-white text-[10px] font-bold rounded">
              2
            </span>
          </button>
          
          {/* Bell */}
          <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#5D5FEF] text-white text-[10px] font-bold rounded">
              2
            </span>
          </button>
          
          {/* Settings */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile */}
        <button className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 bg-[#A69FB5] rounded-xl object-cover overflow-hidden">
            {/* Jika ada image, gunakan tag img. Jika tidak, biarkan kotak warna. */}
            {/* <img src="/path-to-avatar.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-tight">Zara Wardani</span>
            <span className="text-xs text-gray-400 leading-tight mt-0.5">Admin</span>
          </div>
        </button>

      </div>
    </nav>
  );
};

export default Navigation;