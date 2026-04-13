import React, { useState } from "react";
import wisataData from "./framework.json";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

export default function FrameworkListSearchFilter() {
  const [search, setSearch] = useState("");
  const [katFilter, setKatFilter] = useState("Semua");
  const [hargaFilter, setHargaFilter] = useState("Semua");
  const [view, setView] = useState("guest");

  // === LOGIK SLIDESHOW HERO ===
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/img/rajaampat.jpg", title: "RAJA AMPAT" },
    { image: "/img/labuanbajo.jpg", title: "LABUAN BAJO" },
    { image: "/img/kuta.jpg", title: "PANTAI KUTA" },
    { image: "/img/rinjani.jpg", title: "GUNUNG RINJANI" },
    { image: "/img/danautoba.jpg", title: "DANAU TOBA" } 
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  // ============================

  const filtered = wisataData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchKat = katFilter === "Semua" || item.info.kategori === katFilter;
    let matchHarga = true;
    if (hargaFilter === "Gratis") matchHarga = item.info.tiket === 0;
    if (hargaFilter === "Berbayar") matchHarga = item.info.tiket > 0;

    return matchSearch && matchKat && matchHarga;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. TOP NAVBAR */}
      <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 tracking-widest font-semibold">WISATA & KULINER</span>
            <span className="text-xl font-bold text-gray-900 tracking-tighter uppercase">YOURDESTINATION</span>
          </div>
        </div>
        
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li className="text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Sumatera</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Jawa</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Kalimantan</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Sulawesi</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Bali & Nusa Tenggara</li>
        </ul>

        <div className="flex items-center gap-4 text-gray-600">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
          <button className="p-2 hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </nav>

      <div className="flex-grow pb-10">
        
        {/* 2. HERO SECTION SLIDESHOW */}
        <div 
          className="relative bg-gray-300 bg-cover bg-center h-[500px] flex items-center justify-center mb-10 group transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
        >
          <div className="absolute inset-0 bg-black/30 transition-opacity"></div>
          
          {/* Panah Kiri (Aktif) */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/80 transition opacity-0 group-hover:opacity-100 hidden md:block z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="relative z-10 text-center px-4 w-full">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest drop-shadow-xl mb-6 uppercase transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-transform transform hover:scale-105">
              View Trip Details
            </button>
          </div>

          {/* Panah Kanan (Aktif) */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 hover:bg-black/80 transition opacity-0 group-hover:opacity-100 hidden md:block z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator di bawah */}
          <div className="absolute bottom-6 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* 3. CONTAINER SEARCH & CARD */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 shadow-sm border border-gray-200 rounded-xl">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Cari destinasi..."
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="py-3 px-4 border border-gray-300 rounded-lg outline-none cursor-pointer text-sm focus:ring-2 focus:ring-blue-500 bg-white"
              onChange={(e) => setKatFilter(e.target.value)}
            >
              <option value="Semua">Semua Kategori</option>
              <option value="Alam">Alam</option>
              <option value="Pantai">Pantai</option>
              <option value="Budaya">Budaya</option>
              <option value="Edukasi">Edukasi</option>
            </select>
            
            <select
              className="py-3 px-4 border border-gray-300 rounded-lg outline-none cursor-pointer text-sm focus:ring-2 focus:ring-blue-500 bg-white"
              onChange={(e) => setHargaFilter(e.target.value)}
            >
              <option value="Semua">Semua Harga</option>
              <option value="Gratis">Gratis</option>
              <option value="Berbayar">Berbayar</option>
            </select>
            
            <button
              onClick={() => setView(view === "guest" ? "admin" : "guest")}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm whitespace-nowrap shadow-sm"
            >
              Mode: {view === "guest" ? "Guest" : "Admin"}
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-200">
              <span className="text-6xl mb-4 block">🔍</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Pencarian Tidak Ditemukan</h2>
              <p className="text-gray-500">Maaf, destinasi "{search}" tidak ada dalam daftar kami.</p>
            </div>
          ) : (
            view === "guest" ? (
              <GuestView data={filtered} />
            ) : (
              <AdminView data={filtered} />
            )
          )}
        </div>
      </div>

      {/* 4. FOOTER */}
      <footer className="bg-[#f8f9fa] border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight uppercase">YOURDESTINATION</h2>
              <p className="text-gray-600 leading-relaxed text-sm pr-4">
                Sebagai pedoman wisata, YOURDESTINATION menawarkan panduan lengkap untuk menjelajahi destinasi unggulan di seluruh nusantara.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <div className="grid grid-cols-4 gap-2 h-fit">
                {/* Social Icons - Dibiarkan sama */}
                <div className="w-12 h-12 bg-[#3b5998] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition"><span className="font-bold">f</span></div>
                <div className="w-12 h-12 bg-[#1da1f2] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-12 h-12 bg-[#ff0000] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385-8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
                </div>
                <div className="w-12 h-12 bg-[#1769ff] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition font-bold">Bē</div>
                <div className="w-12 h-12 bg-[#bd081c] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition font-bold text-xl">p</div>
                <div className="w-12 h-12 bg-[#21759b] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition font-bold text-xl">W</div>
                <div className="w-12 h-12 bg-[#333333] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div className="w-12 h-12 bg-[#ff4500] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition font-bold text-xl">R</div>
                <div className="w-12 h-12 bg-[#007cf9] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition"><span className="text-xl">■</span></div>
                <div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                </div>
                <div className="w-12 h-12 bg-[#0088cc] rounded flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.31-.353-.111l-6.4 4.024-2.76-.86c-.6-.184-.613-.604.126-.89l10.785-4.158c.498-.191.938.116.782.846z"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-gray-800 font-medium md:pl-10">
              <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition">Indeks Berita</a>
              <a href="#" className="hover:text-blue-600 transition">Kontak Kami</a>
              <a href="#" className="hover:text-blue-600 transition">All Posts</a>
              <a href="#" className="hover:text-blue-600 transition">Radar Tulungagung</a>
            </div>

          </div>

          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
            <p className="text-gray-500 text-sm w-full text-center">
              <span className="text-blue-600 font-semibold cursor-pointer">YOURDESTINATION</span> © 2026. All Rights Reserved.
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute right-0 top-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5 12 6.75l3.75 3.75M12 6.75v10.5" />
              </svg>
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}