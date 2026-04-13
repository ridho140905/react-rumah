import { useState, useEffect } from 'react';

// ==========================================
// 1. REUSABLE COMPONENT: Input Modern
// ==========================================
const InputField = ({ label, name, type, value, onChange, error, placeholder }) => (
  <div className="mb-5 group text-left">
    <label className="block text-blue-900 text-xs font-bold mb-2 uppercase tracking-widest group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-5 py-3 rounded-2xl border-2 transition-all duration-300 outline-none bg-gray-50/50 focus:bg-white ${
        error 
          ? 'border-red-200 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
          : 'border-transparent focus:border-blue-600 focus:shadow-xl focus:shadow-blue-100'
      }`}
    />
    {error && (
      <div className="text-red-500 text-[10px] mt-2 font-bold flex items-center gap-1 animate-pulse text-left">
        <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">!</span>
        {error}
      </div>
    )}
  </div>
);

// ==========================================
// 2. REUSABLE COMPONENT: Select Modern
// ==========================================
const SelectField = ({ label, name, value, onChange, error, options }) => (
  <div className="mb-5 text-left">
    <label className="block text-blue-900 text-xs font-bold mb-2 uppercase tracking-widest">
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-5 py-3 rounded-2xl border-2 appearance-none transition-all duration-300 outline-none bg-gray-50/50 focus:bg-white ${
          error 
            ? 'border-red-200 focus:border-red-500' 
            : 'border-transparent focus:border-blue-600 focus:shadow-xl focus:shadow-blue-100'
        }`}
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-blue-900">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
    {error && <div className="text-red-500 text-[10px] mt-2 font-bold ml-1 text-left">⚠ {error}</div>}
  </div>
);

// ==========================================
// 3. KOMPONEN UTAMA (MODERN SPLIT LAYOUT)
// ==========================================
export default function FormPendaftaranPCR() {
  const [formData, setFormData] = useState({ nama: '', nisn: '', asalSekolah: '', jalur: '', prodi: '' });
  const [errors, setErrors] = useState({ nama: '!', nisn: '!', asalSekolah: '!', jalur: '!', prodi: '!' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  const validate = (name, value) => {
    let msg = '';
    if (name === 'nama') {
      if (!value) msg = 'Nama Lengkap wajib diisi.';
      else if (value.length < 3) msg = 'Minimal 3 karakter.';
      else if (/\d/.test(value)) msg = 'Tidak boleh angka.';
    }
    if (name === 'nisn') {
      if (!value) msg = 'NISN wajib diisi.';
      else if (!/^\d+$/.test(value)) msg = 'Wajib angka.';
      else if (value.length !== 10) msg = 'Harus 10 digit.';
    }
    if (name === 'asalSekolah' || name === 'jalur' || name === 'prodi') {
      if (!value) msg = 'Bagian ini wajib diisi.';
    }
    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const err = validate(name, value);
    setErrors(prev => {
      const newErr = { ...prev };
      err ? (newErr[name] = err) : delete newErr[name];
      return newErr;
    });
    setIsSubmitted(false);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-10 font-sans text-left">
      <div className={`w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        <div className="flex flex-col lg:flex-row">
          
          {/* SISI KIRI: Visual & Semboyan I.D.E.A.L. */}
          <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-full">
            <img 
              src="img/pcr.jpg" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Gedung PCR"
            />
            {/* Overlay Gradasi Tanpa Kotak Hitam */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-700/60 p-12 lg:p-16 flex flex-col justify-center text-white">
              <div className="text-left">
                <h1 className="text-8xl font-black leading-none mb-8 tracking-tighter drop-shadow-2xl">
                  I.D.E.A.L.
                </h1>
                
                {/* Nilai Dasar Langsung di Atas Gambar */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4 group">
                    <span className="text-3xl font-black text-blue-400">I</span>
                    <p className="text-lg font-bold tracking-wide drop-shadow-md">Integrity <span className="font-light opacity-70 ml-2 text-sm italic">(Integritas)</span></p>
                  </div>
                  <div className="flex items-baseline gap-4 group">
                    <span className="text-3xl font-black text-blue-400">D</span>
                    <p className="text-lg font-bold tracking-wide drop-shadow-md">Dignity <span className="font-light opacity-70 ml-2 text-sm italic">(Martabat)</span></p>
                  </div>
                  <div className="flex items-baseline gap-4 group">
                    <span className="text-3xl font-black text-blue-400">E</span>
                    <p className="text-lg font-bold tracking-wide drop-shadow-md">Excellence <span className="font-light opacity-70 ml-2 text-sm italic">(Keunggulan)</span></p>
                  </div>
                  <div className="flex items-baseline gap-4 group">
                    <span className="text-3xl font-black text-blue-400">A</span>
                    <p className="text-lg font-bold tracking-wide drop-shadow-md">Agility <span className="font-light opacity-70 ml-2 text-sm italic">(Ketangkasan)</span></p>
                  </div>
                  <div className="flex items-baseline gap-4 group">
                    <span className="text-3xl font-black text-blue-400">L</span>
                    <p className="text-lg font-bold tracking-wide drop-shadow-md">Loyalty <span className="font-light opacity-70 ml-2 text-sm italic">(Loyalitas)</span></p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 flex gap-4 text-[10px] font-bold tracking-[0.4em] opacity-50 uppercase">
                <span>Politeknik</span>
                <span>•</span>
                <span>Caltex</span>
                <span>•</span>
                <span>Riau</span>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Form Pendaftaran */}
          <div className="lg:w-1/2 p-10 lg:p-16 bg-white overflow-y-auto">
            <header className="mb-10 text-left">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-2 block">PORTAL PCR</span>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">Formulir Pendaftaran</h2>
            </header>

            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-2">
              <InputField label="Nama Lengkap" name="nama" type="text" value={formData.nama} onChange={handleChange} error={errors.nama} placeholder="Sesuai Ijazah..." />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Nomor NISN" name="nisn" type="text" value={formData.nisn} onChange={handleChange} error={errors.nisn} placeholder="10 Digit Angka" />
                <InputField label="Asal Sekolah" name="asalSekolah" type="text" value={formData.asalSekolah} onChange={handleChange} error={errors.asalSekolah} placeholder="SMAN / SMKN" />
              </div>

              <SelectField label="Jalur Pendaftaran" name="jalur" value={formData.jalur} onChange={handleChange} error={errors.jalur} options={['PSUD (Penjaringan Siswa Unggul Daerah)', 'UMPCR (Ujian Masuk Mandiri)', 'Fast Track']} />
              <SelectField label="Program Studi Pilihan" name="prodi" value={formData.prodi} onChange={handleChange} error={errors.prodi} options={['D4 Teknik Informatika', 'D4 Sistem Informasi', 'D4 Teknik Rekayasa Komputer', 'D4 Teknik Elektronika Telekomunikasi', 'D4 Teknik Mekatronika', 'D4 Akuntansi Perpajakan', 'D4 Hubungan Masyarakat Komunikasi Digital', 'D4 Bisnis Digital', 'D4 Teknik Mesin', 'D4 Teknik Listrik']} />

              <button 
                type="submit" disabled={!isFormValid}
                className={`w-full mt-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-500 shadow-2xl
                  ${isFormValid ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none'}`}
              >
                Kirim Pendaftaran
              </button>
            </form>

            {/* HASIL OUTPUT LENGKAP */}
            {isSubmitted && (
              <div className="mt-12 p-8 bg-blue-50 border-2 border-dashed border-blue-200 rounded-[2rem] animate-[slideUp_0.5s_ease-out] relative">
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full border-r-2 border-dashed border-blue-200"></div>
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white rounded-full border-l-2 border-dashed border-blue-200"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-blue-900 font-black text-lg leading-tight text-left">Registrasi Berhasil</h4>
                    <p className="text-blue-700 text-xs font-medium uppercase tracking-widest text-left">ID: PCR-{Math.floor(Math.random() * 9000) + 1000}</p>
                  </div>
                </div>
                
                <table className="w-full text-sm text-blue-900">
                  <tbody className="divide-y divide-blue-100">
                    <tr><td className="py-2 font-medium opacity-60 text-left">Nama</td><td className="py-2 font-bold text-right">{formData.nama}</td></tr>
                    <tr><td className="py-2 font-medium opacity-60 text-left">NISN</td><td className="py-2 font-bold text-right">{formData.nisn}</td></tr>
                    <tr><td className="py-2 font-medium opacity-60 text-left">Asal Sekolah</td><td className="py-2 font-bold text-right">{formData.asalSekolah}</td></tr>
                    <tr><td className="py-2 font-medium opacity-60 text-left">Jalur Masuk</td><td className="py-2 font-bold text-right">{formData.jalur}</td></tr>
                    <tr><td className="py-2 font-medium opacity-60 text-left">Program Studi</td><td className="py-2 font-bold text-right text-blue-700">{formData.prodi}</td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}