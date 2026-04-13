import React from "react";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header sudah dibuat responsif: padding dan ukuran font menyesuaikan layar */}
      <header className="bg-blue-600 text-white p-4 md:p-8 text-center shadow-lg mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2">
          Aplikasi Destinasi Wisata
        </h1>
        <p className="text-sm md:text-base opacity-80">
          Silahkan Cari Destinasi Wisata yang ingin kamu kunjungi
        </p>
      </header>
      
      {/* Main container sudah fluid menggunakan 'container mx-auto' */}
      <main className="container mx-auto px-4 md:px-0 pb-10">
        {/* Kita langsung memanggil komponen tugas utamanya di sini */}
        <FrameworkListSearchFilter />
      </main>
    </div>
  );
}