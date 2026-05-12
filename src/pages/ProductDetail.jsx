import { useParams, Link } from "react-router-dom";
import { dataProducts } from "../data/product"; // Import data furniture lokal
import { FaArrowLeft, FaTag, FaBox, FaWarehouse } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();

  // Mencari produk di data lokal berdasarkan ID dari URL
  const product = dataProducts.find((p) => p.id === parseInt(id));

  // Jika data tidak ditemukan (misal user ketik manual ID yang salah di URL)
  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product Not Found!</h2>
        <Link to="/product" className="text-blue-500 underline mt-4 inline-block">
          Return to Product List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Tombol Back */}
      <Link 
        to="/product" 
        className="flex items-center gap-2 text-gray-500 hover:text-hijau mb-6 transition-all font-semibold"
      >
        <FaArrowLeft /> Back to List
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Bagian Visual - Menampilkan Gambar Produk */}
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-12">
           <img 
             src={product.image} 
             alt={product.title}
             className="w-full h-full max-w-sm object-cover rounded-2xl shadow-lg border border-gray-200"
           />
        </div>

        {/* Bagian Informasi */}
        <div className="p-8 md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {product.category}
            </span>
            <span className="text-gray-400 text-xs">ID: {product.code}</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
            <FaTag className="text-gray-300" /> Brand: <span className="font-semibold text-gray-700">{product.brand}</span>
          </p>

          <div className="mb-8">
            <p className="text-xs uppercase text-gray-400 font-bold mb-2 tracking-widest">Description</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              {product.description || "High-quality furniture crafted with precision to enhance your living space. Durable, stylish, and perfect for modern homes."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Stock Available</p>
              <p className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FaBox size={14} className="text-hijau" /> {product.stock} <span className="text-xs font-normal text-gray-400">units</span>
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Unit Price</p>
              <p className="text-lg font-bold text-emerald-600">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <button className="w-full bg-hijau text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-md shadow-green-100">
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
}