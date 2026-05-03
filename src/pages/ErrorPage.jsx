import { Link } from "react-router-dom";
import { FaReply } from "react-icons/fa";

export default function ErrorPage({ kodeError, deskripsiError, gambarError }) {
    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50">
            
            {/* Latar Belakang Gelombang Ungu Muda (Custom SVG) */}
            <svg 
                className="absolute inset-0 w-full h-full object-cover z-0" 
                preserveAspectRatio="none" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Path ini membentuk gelombang di tengah, fill color pakai hex ungu muda */}
                <path 
                    d="M 15 0 C 40 40 5 60 25 100 L 75 100 C 95 60 60 40 85 0 Z" 
                    fill="#f3e8ff" 
                    opacity="0.7"
                />
            </svg>

            {/* Konten Utama (Berada di atas background) */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                
                {/* Kode Error (Ungu, Sangat Tebal) */}
                <h1 className="text-6xl font-black text-purple-700 mb-2 tracking-wider drop-shadow-sm">
                    {kodeError}
                </h1>
                
                {/* Deskripsi Error */}
                <p className="text-lg text-gray-600 font-medium mb-8 max-w-md">
                    {deskripsiError}
                </p>

                {/* Tempat Gambar */}
                {/* Gambar diambil dari props yang dikirim dari App.jsx */}
                <img 
                    src={gambarError} 
                    alt={`Error ${kodeError}`} 
                    className="w-80 max-w-full h-64 object-contain mb-10 drop-shadow-sm"
                />

                {/* Tombol Go Home (Sesuai style Furni House) */}
                <Link 
                    to="/" 
                    className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-sm"
                >
                    <FaReply className="text-sm scale-x-[-1]" /> {/* Di-flip agar panahnya ke kiri */}
                    <span>Go Home</span>
                </Link>

            </div>
        </div>
    );
}