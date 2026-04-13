// src/latihanp2/BiodataDiri.jsx

import './custom.css';
import FotoProfile from './components/FotoProfile';
import InfoDasar from './components/InfoDasar';
import Keahlian from './components/Keahlian';
import Kontak from './components/Kontak';
import Hobi from './components/Hobi';
import Moto from './components/Moto';

const BiodataDiri = () => {
  const dataMahasiswa = {
    nama: "Ridho Prasetyo",
    nim: "2457301122",
    jurusan: "Sistem Informasi",
    kampus: "Politeknik Caltex Riau",
    moto: "Iff you can dream it, then you can make it happen",
    sumberMoto: "Ridho Prasetyo",
  };

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">

        {/* ── HERO ── */}
        <div className="header-section">
          <FotoProfile nama={dataMahasiswa.nama} />
          <h1 className="hero-name">{dataMahasiswa.nama}</h1>
          <p className="hero-nim">NIM · {dataMahasiswa.nim}</p>
          <p className="hero-tagline">
            {dataMahasiswa.jurusan} &nbsp;/&nbsp; {dataMahasiswa.kampus}
          </p>
        </div>

        {/* ── MOTO ── */}
        <Moto teks={dataMahasiswa.moto} sumber={dataMahasiswa.sumberMoto} />

        {/* ── DIVIDER ── */}
        <div className="curse-divider">
          <span>術式展開</span>
        </div>

        {/* ── INFO DASAR full width ── */}
        <div className="biodata-grid">
          <InfoDasar
            nim={dataMahasiswa.nim}
            jurusan={dataMahasiswa.jurusan}
            kampus={dataMahasiswa.kampus}
          />

          {/* ── KEAHLIAN + KONTAK ── */}
          <Keahlian />
          <Kontak />
        </div>

        {/* ── HOBI full width ── */}
        <div className="biodata-grid" style={{ borderTop: 'none' }}>
          <Hobi />
        </div>

        {/* ── FOOTER ── */}
        <div className="footer-section">
          <span>{dataMahasiswa.nama}</span> · {dataMahasiswa.kampus} · {dataMahasiswa.nim}
        </div>

      </div>
    </div>
  );
};

export default BiodataDiri;
