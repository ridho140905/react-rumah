import React, { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const LoginInput = ({ type = "text", placeholder, icon = "user", name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = icon === "lock" ? FiLock : FiUser;
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{ background: "#F4F2FF" }}
    >
      <Icon size={18} className="text-[#5D5FEF] shrink-0" />
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-sm font-semibold text-gray-700 placeholder-gray-500 outline-none font-['Cairo']"
      />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-[#5D5FEF]">
          {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button>
      )}
    </div>
  );
};

export default LoginInput;