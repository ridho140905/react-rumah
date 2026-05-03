import { useState } from "react";
import PageHeader from "../components/Page.Header";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

// Import 6 gambar lokal dari folder assets
import item1Img from "../assets/item1.jpg";
import item2Img from "../assets/item2.jpg";
import item3Img from "../assets/item3.jpg";
import item4Img from "../assets/item4.jpg";
import item5Img from "../assets/item5.jpg";
import item6Img from "../assets/item6.jpg";

export default function Sale() {
  const [searchTerm, setSearchTerm] = useState("");

  const saleItems = [
    {
      id: 1,
      name: "Modern Minimalist Sofa",
      price: "$550.00",
      originalPrice: "$750.00",
      category: "Living Room",
      rating: "4.8",
      img: item1Img,
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      price: "$380.00",
      originalPrice: "$450.00",
      category: "Dining Room",
      rating: "4.6",
      img: item2Img,
    },
    {
      id: 3,
      name: "Scandinavian Armchair",
      price: "$180.00",
      originalPrice: "$260.00",
      category: "Living Room",
      rating: "4.4",
      img: item3Img,
    },
    {
      id: 4,
      name: "Minimalist Bookshelf",
      price: "$210.00",
      originalPrice: "$300.00",
      category: "Office / Storage",
      rating: "4.7",
      img: item4Img,
    },
    {
      id: 5,
      name: "Nordic Coffee Table",
      price: "$125.00",
      originalPrice: "$180.00",
      category: "Living Room",
      rating: "4.3",
      img: item5Img,
    },
    {
      id: 6,
      name: "Queen Size Bed Frame",
      price: "$650.00",
      originalPrice: "$850.00",
      category: "Bedroom",
      rating: "4.9",
      img: item6Img,
    }
  ];

  const filteredSale = saleItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Menggunakan PageHeader agar tidak bentrok dengan Header layout */}
      <PageHeader title="Sale & Promo" breadcrumb={["Sale"]} />

      {/* Bagian Search Bar dan Tools */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-gray-500 text-sm">
          Menampilkan <span className="text-purple-600 font-bold">{filteredSale.length}</span> produk yang sedang diskon.
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Cari item sale..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-all shadow-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
        </div>
      </div>

      {/* Grid Katalog Sale */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSale.length > 0 ? (
          filteredSale.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-gray-50 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              {/* Gambar Item */}
              <div className="w-full h-48 bg-gray-50 rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-3 left-3 bg-oranye text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                  SALE
                </span>
              </div>

              {/* Deskripsi Item */}
              <div>
                <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                  <span>{item.category}</span>
                  <span>★ {item.rating}</span>
                </div>
                <h4 className="font-bold text-gray-800 text-base mb-2 group-hover:text-purple-600 transition-colors">
                  {item.name}
                </h4>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold text-purple-600 text-lg">
                    {item.price}
                  </span>
                  <span className="text-gray-400 text-xs line-through">
                    {item.originalPrice}
                  </span>
                </div>
              </div>

              {/* Tombol Aksi */}
              <button className="w-full py-2 bg-purple-50 text-purple-600 font-bold text-sm rounded-xl hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                <FaShoppingCart size={14} /> Beli Sekarang
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-3 py-16 text-center text-gray-400">
            Pencarian "{searchTerm}" tidak ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}