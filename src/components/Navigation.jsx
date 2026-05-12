import React from 'react';
// Menggunakan Lucide React untuk ikon garis (outline) yang sesuai desain "Aslinya"
import { Search, ChevronDown, MessageSquareText, Bell, Settings } from 'lucide-react';

// Mengimpor foto profil dari folder assets
import ProfilePhoto from '../assets/foto.jpeg';

const Navigation = () => {
  // Warna tema presisi dari user: #4F45B6
  const EXACT_THEME_COLOR = "#4F45B6";

  return (
    // Bagian Nav Utama: Latar belakang putih bersih, font Cairo
    <nav className="flex items-center justify-between w-full px-8 py-4 bg-white font-['Cairo'] border-b border-gray-100 shrink-0 relative z-50">
      
      {/* Kiri: Search Bar */}
      <div className="flex items-center bg-[#F4F2FF] rounded-full px-4 py-2 w-80">
        {/* Ikon Search dengan warna presisi #4F45B6 */}
        <Search className="w-5 h-5 mr-3" style={{ color: EXACT_THEME_COLOR }} strokeWidth={2.5} />
        <input 
          type="text" 
          placeholder="Search here..." 
          className="bg-transparent border-none outline-none text-sm text-gray-600 font-semibold w-full placeholder:text-gray-400 placeholder:font-normal"
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
          <span className="text-sm font-semibold text-gray-900">English (US)</span>
          <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={2} />
        </button>

        {/* Notification Icons - Diperbaiki total: Ikon Garis Abu-abu, Badge Warna Tema #4F45B6 */}
        <div className="flex items-center gap-6">
          
          {/* Messages - Ikon Garis Abu-abu (Standard) */}
          <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
            {/* Ikon Message garis biasa, ketebalan standar (2) */}
            <MessageSquareText className="w-6 h-6" strokeWidth={2} />
            {/* Badge (Lingkaran Notifikasi) - Ini yang didalamnya pakai warna tema #4F45B6 */}
            <span 
              className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-white text-[10px] font-bold rounded-full border-2 border-white box-content"
              style={{ backgroundColor: EXACT_THEME_COLOR }}
            >
              2
            </span>
          </button>
          
          {/* Bell - Ikon Garis Abu-abu (Standard) */}
          <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
            {/* Ikon Bel garis biasa, ketebalan standar (2) */}
            <Bell className="w-6 h-6" strokeWidth={2} />
            {/* Badge (Lingkaran Notifikasi) - Ini yang didalamnya pakai warna tema #4F45B6 */}
            <span 
              className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-white text-[10px] font-bold rounded-full border-2 border-white box-content"
              style={{ backgroundColor: EXACT_THEME_COLOR }}
            >
              2
            </span>
          </button>
          
          {/* Settings - Ikon Garis Abu-abu (Standard) */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            {/* Ikon Setting garis biasa, ketebalan standar (2), penyesuaian posisi atas dihapus */}
            <Settings className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>

        {/* Garis Pemisah (Divider) */}
        <div className="w-[1px] h-8 bg-gray-200 shrink-0"></div>

        {/* User Profile */}
        <button className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={ProfilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 leading-tight">Ridho Prasetyo</span>
            <span className="text-xs text-gray-400 font-semibold leading-tight mt-0.5">Admin</span>
          </div>
        </button>

      </div>
    </nav>
  );
};

export default Navigation;