import React from "react";
import { FiStar, FiChevronRight } from "react-icons/fi";

const UserReviews = () => {
  const reviews = [
    { name: "Belle Epoque", rating: 4, text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { name: "Nagita Almania", rating: 4, text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { name: "Esmeralda Striff", rating: 4, text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  ];

  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">User Reviews</h3>
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} size={14} className={i < rev.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
                ))}
                <span className="ml-2 text-sm font-bold text-gray-800">{rev.name}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {rev.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Tombol Panah Kanan */}
        <button className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#5D5FEF] hover:bg-gray-50 transition-colors">
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default UserReviews;