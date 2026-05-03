import { useState } from "react";
import PageHeader from "../components/Page.Header";
import { FaPaperPlane, FaSearch } from "react-icons/fa";

export default function Chat() {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState("");

  const chatList = [
    { id: 1, name: "Rizky Ridho", time: "10:35 AM", lastMsg: "Apakah meja ready?", avatar: "https://avatar.iran.liara.run/public/boy?username=Rizky" },
    { id: 2, name: "Siti Aminah", time: "09:12 AM", lastMsg: "Terima kasih barangnya sudah sampai", avatar: "https://avatar.iran.liara.run/public/girl?username=Siti" },
    { id: 3, name: "Budi Santoso", time: "Yesterday", lastMsg: "Kapan restock standing lamp?", avatar: "https://avatar.iran.liara.run/public/boy?username=Budi" },
  ];

  return (
    <div>
      {/* Menggunakan PageHeader agar sesuai dengan layout */}
      <PageHeader title="Chat" breadcrumb={["Chat"]} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[72vh]">
        {/* Kolom Kiri: Daftar Kontak */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex flex-col">
          <div className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search messages..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500" 
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2">
            {chatList.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveChat(item.id)}
                className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all ${
                  activeChat === item.id ? "bg-purple-50 border border-purple-200" : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <img src={item.avatar} alt="Avatar" className="w-10 h-10 rounded-full bg-gray-100 object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h4>
                    <span className="text-[10px] text-gray-400">{item.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{item.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Ruang Obrolan */}
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col justify-between h-full">
          {/* Chat Header */}
          <div className="flex items-center space-x-3 pb-4 border-b border-gray-50">
            <img 
              src={chatList.find(c => c.id === activeChat)?.avatar || ""} 
              alt="Avatar" 
              className="w-10 h-10 rounded-full object-cover bg-gray-100" 
            />
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {chatList.find(c => c.id === activeChat)?.name}
              </h3>
              <span className="text-xs text-green-500 font-medium">Online</span>
            </div>
          </div>

          {/* Chat Bubbles Area */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-50 p-3 rounded-2xl max-w-xs text-sm text-gray-800 border border-gray-100">
                Halo admin, apakah model kursi stool ready?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-purple-600 text-white p-3 rounded-2xl max-w-xs text-sm shadow-sm">
                Halo! Iya, barangnya ready siap dikirim ya.
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-50">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500"
            />
            <button 
              onClick={() => setMessage("")}
              className="p-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-sm"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}