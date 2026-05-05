import React from 'react';
import { MoreVertical, Mail, Bell, ThumbsUp, Layers3 } from 'lucide-react';

const RightSidebar = () => {
  // Data dummy untuk Contacts
  const contacts = [
    { name: 'Tomy', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Karen', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Jordan', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Jack', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Nadia', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: 'Johnny', img: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Martha', img: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'John', img: 'https://randomuser.me/api/portraits/men/8.jpg' },
  ];

  // Data dummy untuk Recent Activity
  const activities = [
    { 
      type: 'Assets', 
      title: 'Transaction Assets', 
      desc: 'Ab architecto provident ea accusamus.', 
      time: '2 Hour Ago', 
      icon: Layers3, 
      color: 'bg-[#5D5FEF]' 
    },
    { 
      type: 'Mail', 
      title: 'New Email Register', 
      desc: 'Reiciendis aut aspernatur ea.', 
      time: '2 Hour Ago', 
      icon: Mail, 
      color: 'bg-black' 
    },
    { 
      type: 'Assets', 
      title: 'Transaction Assets', 
      desc: 'Id architecto provident ea accusamus provident ea ea.', 
      time: '2 Hour Ago', 
      icon: Layers3, 
      color: 'bg-[#FFB800]' 
    },
    { 
      type: 'Register', 
      title: 'New Email Register', 
      desc: 'Ab reiciendis aut provident ea accusamus.', 
      time: '4 Hour Ago', 
      icon: ThumbsUp, 
      color: 'bg-[#FF7A00]' 
    },
  ];

  return (
    <aside className="w-[340px] border-l border-gray-100 bg-[#FBFBFB] p-6 space-y-8 font-['Cairo']">
      
      {/* 1. Server Status */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Server Status</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={20} />
          </button>
        </div>
        {/* Placeholder untuk Grafik Garis Halus */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 mb-4">
          <div className="h-20 flex items-end gap-1">
            {/* Visualisasi batang sederhana sebagai placeholder */}
            {[40, 60, 30, 80, 20, 90, 50, 70, 40, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        {/* Detail Status */}
        <div className="grid grid-cols-3 text-center gap-2">
          <div>
            <p className="text-xs text-gray-400">Country</p>
            <p className="text-sm font-bold text-gray-800">Indonesia</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Domain</p>
            <p className="text-sm font-bold text-gray-800">website.com</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Up
            </p>
            <p className="text-sm font-bold text-gray-800">3.0 mbps</p>
          </div>
        </div>
      </section>

      {/* 2. Contacts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Contacts</h3>
          <button className="text-xs font-bold text-[#5D5FEF] hover:text-[#4a4cc7]">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 text-center">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={contact.img} alt={contact.name} className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-white shadow-sm" />
              <span className="text-xs font-semibold text-gray-700 truncate w-full">{contact.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Messages */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Messages</h3>
          <button className="text-xs font-bold text-[#5D5FEF] hover:text-[#4a4cc7]">View All</button>
        </div>
        <div className="space-y-4">
          {[ 'Samantha William', 'Tony Soap', 'Jordan Nico', 'Nadia Adja'].map((name, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-[#A69FB5] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">{name}</p>
                <p className="text-xs text-gray-400 line-clamp-1">Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Recent Activity */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
        </div>
        
        {/* Toggle Buttons (Sesuai desain) */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-full mb-6 text-sm">
          <button className="flex-1 px-4 py-2 bg-[#5D5FEF] text-white font-bold rounded-full shadow">Activity</button>
          <button className="flex-1 px-4 py-2 text-gray-500 font-bold rounded-full hover:bg-gray-200">Update</button>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6 left-1">
          {/* Garis Vertikal Timeline */}
          <div className="absolute left-6 top-3 bottom-0 w-0.5 bg-gray-100"></div>
          
          {activities.map((act, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Ikon Lingkaran */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 relative z-10 ${act.color}`}>
                <act.icon size={20} />
              </div>
              
              {/* Teks Deskripsi */}
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-bold text-gray-900">{act.title}</p>
                  <p className="text-xs text-gray-400 whitespace-nowrap">{act.time}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </aside>
  );
};

export default RightSidebar;