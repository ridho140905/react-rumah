import React, { Suspense } from 'react'; // Tambahkan Suspense
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import Loading from '../components/Loading'; // Import loading yang sudah Anda buat

const MainLayout = () => {
  return (
    // Tambahkan font-['Cairo'] di sini agar semua anak elemennya ikut berubah
    <div className="flex min-h-screen bg-[#F8F9FA] font-['Cairo']">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navigation tetap di atas */}
        <Navigation />

        {/* Area Konten dengan Scroll Internal */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Wajib pakai Suspense di sini karena Dashboard, Product, dll 
            di-import secara Lazy di App.jsx 
          */}
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;