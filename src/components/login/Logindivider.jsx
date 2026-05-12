import React from "react";

const LoginDivider = ({ label = "Login with Others" }) => {
  return (
    <div className="flex items-center gap-3 font-['Cairo']">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-sm text-gray-500">
        <span className="font-bold text-gray-800">Login</span> with Others
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export default LoginDivider;
