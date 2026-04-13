import React from "react";

export default function AdminView({ data }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Lokasi</th>
            <th className="p-3 text-left">Kategori</th>
            <th className="p-3 text-left">Harga</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-left">Fasilitas</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-3 font-medium">{item.name}</td>
              <td className="p-3">{item.location}</td>
              <td className="p-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {item.info.kategori}
                </span>
              </td>
              <td className="p-3 font-semibold text-green-700">
                {item.info.tiket === 0
                  ? "Gratis"
                  : `Rp ${item.info.tiket.toLocaleString()}`}
              </td>
              <td className="p-3">⭐ {item.statistik.rating}</td>
              
              {/* Bagian Fasilitas yang sudah diubah menjadi Badge */}
              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  {/* Badge untuk Parkir */}
                  {item.fitur.parkir && (
                    <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-md border border-blue-200">
                      🚗 Parkir
                    </span>
                  )}

                  {/* Badge untuk WiFi */}
                  {item.fitur.wifi && (
                    <span className="bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-md border border-green-200">
                      📶 WiFi
                    </span>
                  )}

                  {/* Badge untuk Restoran/Makan */}
                  {item.fitur.makan && (
                    <span className="bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-md border border-orange-200">
                      🍽️ Restoran
                    </span>
                  )}

                  {/* Fallback kalau tidak ada fasilitas sama sekali */}
                  {!item.fitur.parkir && !item.fitur.wifi && !item.fitur.makan && (
                    <span className="text-gray-400 text-xs italic">
                      Tidak ada data
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}