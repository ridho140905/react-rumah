import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Pakai satu titik karena filenya sudah sekamar
import "./tailwind.css"; 
import FormPendaftaranPCR from "./inputan"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-200 min-h-screen py-10">
      <FormPendaftaranPCR />
    </div>
  </StrictMode>
);