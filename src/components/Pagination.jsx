import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* Bagian Kiri: Keterangan Data */}
      <div className="text-sm text-gray-400 font-medium">
        Showing <span className="font-bold text-gray-700">1-5</span> from <span className="font-bold text-gray-700">100</span> data
      </div>

      {/* Bagian Kanan: Tombol Paginasi */}
      <div className="flex items-center gap-2">
        {/* Tombol Panah Kiri */}
        <button className="p-2 text-gray-300 hover:text-gray-500 transition-colors">
          <ChevronLeft size={20} />
        </button>
        
        {/* Tombol Halaman 1 (Aktif) */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#5D5FEF] text-[#5D5FEF] font-bold">
          1
        </button>
        
        {/* Tombol Halaman 2 */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 font-bold hover:border-gray-300 hover:text-gray-500 transition-colors">
          2
        </button>
        
        {/* Tombol Halaman 3 */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 font-bold hover:border-gray-300 hover:text-gray-500 transition-colors">
          3
        </button>
        
        {/* Tombol Panah Kanan */}
        <button className="p-2 text-gray-300 hover:text-gray-500 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;