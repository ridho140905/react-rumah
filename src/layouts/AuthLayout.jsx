import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc]">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md border border-gray-100">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-orange-400 rounded-t-full rounded-br-full mr-2"></div>
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Furni <span className="text-orange-400">House</span>
          </h1>
        </div>

        <Outlet />

        <p className="text-center text-sm text-gray-400 mt-8">
          © 2026 Furni House Admin. All rights reserved.
        </p>
      </div>
    </div>
  );
}