import React from "react";

export default function GuestView({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {data.map((item) => (
        <div 
          key={item.id} 
          // Efek Hover ditambahkan di sini
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col cursor-pointer"
        >
          <div className="relative">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg shadow-sm">
              {item.info.kategori}
            </div>
          </div>
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            
            {/* Menggunakan Ikon SVG untuk Lokasi */}
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              {item.location}
            </p>
            
            <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
          </div>
          <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
            
            {/* Menggunakan Ikon SVG untuk Bintang/Rating */}
            <span className="text-yellow-500 font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              {item.statistik.rating}
            </span>
            
            <span className="text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-md text-sm">
              {item.info.tiket === 0 ? "Gratis" : `Rp ${item.info.tiket.toLocaleString()}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}