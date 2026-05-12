import React from "react";

const contacts = [
  { name: "Tony",   img: "https://randomuser.me/api/portraits/men/1.jpg"   },
  { name: "Karen",  img: "https://randomuser.me/api/portraits/women/2.jpg"  },
  { name: "Jordan", img: "https://randomuser.me/api/portraits/men/3.jpg"   },
  { name: "Jack",   img: "https://randomuser.me/api/portraits/men/4.jpg"   },
  { name: "Nadia",  img: "https://randomuser.me/api/portraits/women/5.jpg"  },
  { name: "Johnny", img: "https://randomuser.me/api/portraits/men/6.jpg"   },
  { name: "Martha", img: "https://randomuser.me/api/portraits/women/7.jpg"  },
  { name: "John",   img: "https://randomuser.me/api/portraits/men/8.jpg"   },
];

const ContactsCard = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-800 font-['Cairo']">Contacts</h3>
        <button className="text-xs text-[#4F45B6] font-semibold font-['Cairo'] hover:underline">
          View All
        </button>
      </div>

      {/* Grid Avatar 4x2 */}
      <div className="grid grid-cols-4 gap-y-4 gap-x-2">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center gap-1.5">
            <img
              src={contact.img}
              alt={contact.name}
              className="w-12 h-12 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
            />
            <span className="text-[11px] text-gray-500 font-['Cairo'] text-center leading-tight">
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsCard;
