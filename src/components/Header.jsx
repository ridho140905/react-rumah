import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";

// 1. IMPORT FOTO DARI FOLDER ASSETS
// (Pastikan format file-nya bener: foto.jpg, foto.png, atau foto.jpeg)
import myPhoto from "../assets/foto.jpeg"; 

export default function Header() {
    // State untuk mengontrol buka/tutup modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center p-4 relative mb-2">
            
            {/* Search Bar - Klik untuk buka modal */}
            {/* Lebarnya disesuaikan agar rapi di sebelah kiri */}
            <div id="search-bar" className="relative w-full max-w-xs">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search..."
                    readOnly
                    onClick={() => setIsModalOpen(true)}
                    className="border border-gray-200 p-2 pr-10 bg-white w-full rounded-xl outline-none cursor-pointer hover:border-ungu transition-all shadow-sm"
                />
                <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* MODAL SEARCH (Improvisasi 1 - Diubah ke tema ungu) */}
            {isModalOpen && (
                <div id="search-modal-overlay" className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div id="search-modal-content" className="bg-white p-6 rounded-2xl w-full max-w-xl relative shadow-2xl animate-in fade-in zoom-in duration-200">
                        
                        {/* Tombol Tutup */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-merah transition-colors"
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-xl font-bold mb-4 text-gray-800">Pencarian Cepat</h2>
                        
                        <div className="relative">
                            <input 
                                autoFocus
                                type="text" 
                                placeholder="Ketik nama produk..."
                                className="w-full border-b-2 border-ungu p-3 text-lg outline-none focus:bg-purple-50 transition-colors rounded-t-md"
                            />
                            <FaSearch className="absolute right-3 top-4 text-ungu" />
                        </div>

                        {/* Contoh Hasil Pencarian (DUMMY) */}
                        <div className="mt-5">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Sering Dicari:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-ungu hover:text-white transition-colors">Standing Lamp</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-ungu hover:text-white transition-colors">Minimalist Chair</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-ungu hover:text-white transition-colors">Income Report</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-6 ml-auto">
                
                {/* Search icon buat mobile (kalau search bar disembunyikan di layar kecil) */}
                <button className="text-gray-400 hover:text-ungu transition-colors md:hidden">
                    <FaSearch size={18} />
                </button>

                {/* Bell Icon dengan titik oranye */}
                <button className="text-gray-400 hover:text-ungu transition-colors relative">
                    <FaBell size={20} />
                    {/* Dot notifikasi (menggunakan warna oranye dari tema) */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-oranye rounded-full border-2 border-[#f8f9fc]"></span>
                </button>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center space-x-3 cursor-pointer pl-6 border-l border-gray-200">
                    {/* 2. GANTI SRC DENGAN VARIABEL myPhoto */}
                    <img
                        id="profile-avatar"
                        src={myPhoto} 
                        className="w-10 h-10 rounded-full object-cover border-2 border-ungu bg-purple-100"
                        alt="Profile Avatar Ridho"
                    />
                    <span id="profile-text" className="hidden md:block text-sm font-medium text-gray-700">
                        Hi, <b>Ridho</b>
                    </span>
                </div>
                
            </div>
        </div>
    );
}