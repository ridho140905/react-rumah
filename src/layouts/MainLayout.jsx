import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-[#f8f9fc] min-h-screen flex w-full font-sans">
      <div id="layout-wrapper" className="flex flex-row flex-1 w-full overflow-hidden">
        <Sidebar />
        <div id="main-content" className="flex-1 p-6 flex flex-col overflow-y-auto">
          {/* Header Global */}
          <Header />    
          {/* Konten Halaman Akan Masuk Di Sini */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}