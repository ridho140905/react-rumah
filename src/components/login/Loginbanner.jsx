import React from "react";
import foto from "../../assets/foto.jpeg";
import { FiZap } from "react-icons/fi";

const LoginBanner = () => {
  return (
    <div
      className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#5D5FEF" }}
    >
      {/* Decorative circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <circle cx="520" cy="80"  r="280" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="80" />
        <circle cx="80"  cy="720" r="240" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="70" />
        <circle cx="560" cy="580" r="180" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="60" />
      </svg>

      {/* Card */}
      <div
        className="relative z-10 mx-10 rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.13)",
          border: "1px solid rgba(255,255,255,0.25)",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <div className="relative" style={{ height: 520 }}>
          {/* Gambar tanpa overlay gelap */}
          <img
            src={foto}
            alt="Professional"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Teks pojok kiri atas dengan shadow agar terbaca */}
          <div className="absolute top-8 left-8 right-8">
            <h2
              className="text-white font-bold leading-tight font-['Cairo']"
              style={{ fontSize: 34, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Very good<br />works are<br />waiting for<br />you Login<br />Now!!!
            </h2>
          </div>
        </div>
      </div>

      {/* Lightning badge — icon FiZap kuning */}
      <div
        className="absolute z-20 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
        style={{ bottom: "calc(50% - 120px)", left: "calc(50% - 230px)" }}
      >
        <FiZap size={24} className="text-yellow-400" fill="#FBBF24" />
      </div>
    </div>
  );
};

export default LoginBanner;