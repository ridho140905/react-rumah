import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Mail, 
  Phone, 
  LayoutGrid, 
  BookOpen, 
  DollarSign, 
  Scissors 
} from 'lucide-react';

const Sidebar = () => {
  // Daftar menu untuk mempermudah render
  const menuItems = [
    { icon: Home, path: '/' },
    { icon: Mail, path: '/mail' },
    { icon: Phone, path: '/phone' },
    { icon: LayoutGrid, path: '/product' },
    { icon: BookOpen, path: '/review' },
    { icon: DollarSign, path: '/sale' },
    { icon: Scissors, path: '/tools' },
  ];

  return (
    <aside className="w-24 min-h-screen bg-white border-r border-gray-100 flex flex-col items-center py-6">
      {/* Logo Area */}
      <div className="w-12 h-12 bg-[#5D5FEF] rounded-xl flex items-center justify-center mb-10 text-white font-bold">
        {/* Anggap ini logo M */}
        M
      </div>

      {/* Menu Icons */}
      <nav className="flex flex-col gap-6 w-full">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex justify-center items-center w-full py-3 border-r-4 transition-all ${
                isActive 
                  ? 'border-[#5D5FEF] text-[#5D5FEF]' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <item.icon size={24} />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;