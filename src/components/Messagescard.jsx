import React from "react";

const messages = [
  { name: "Samantha William", preview: "Lorem ipsum dolor sit amet..." },
  { name: "Tony Soap",        preview: "Lorem ipsum dolor sit amet..." },
  { name: "Jordan Nico",      preview: "Lorem ipsum dolor sit amet..." },
  { name: "Nadia Adja",       preview: "Lorem ipsum dolor sit amet..." },
];

const MessagesCard = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-800 font-['Cairo']">Messages</h3>
        <button className="text-xs text-[#4F45B6] font-semibold font-['Cairo'] hover:underline">
          View All
        </button>
      </div>

      {/* Message List */}
      <div className="flex flex-col gap-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
          >
            {/* Avatar abu-abu */}
            <div className="w-11 h-11 rounded-xl bg-[#E5E3F0] shrink-0" />

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-800 font-['Cairo'] mb-0.5">
                {msg.name}
              </p>
              <p className="text-[11px] text-gray-400 font-['Cairo'] truncate">
                {msg.preview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesCard;
