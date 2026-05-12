import React from "react";

const LoginButton = ({ label = "Login Now", onClick, type = "button", fullWidth = true }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${fullWidth ? "w-full" : ""}
        py-3 px-6 rounded-2xl
        bg-[#5D5FEF] hover:bg-[#4a4cc7] active:scale-[0.98]
        text-white font-bold text-sm font-['Cairo']
        transition-all duration-200
      `}
    >
      {label}
    </button>
  );
};

export default LoginButton;
