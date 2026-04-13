// src/latihanp2/components/Kontak.jsx

const kontakList = [
  { icon: "📧", label: "Email", value: "ridho24si@mahasiswa.pcr.ac.id" },
  { icon: "📱", label: "WhatsApp", value: "+62 896-2083-0434" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ridho-prasetyo" },
  { icon: "🐙", label: "GitHub", value: "github.com/ridhoprasetyo" },
];

const Kontak = () => {
  return (
    <div className="card">
      <span className="card-icon">📡</span>
      <div className="card-title">Kontak</div>
      {kontakList.map((item) => (
        <div className="kontak-item" key={item.label}>
          <div className="kontak-icon">{item.icon}</div>
          <div>
            <div className="kontak-label">{item.label}</div>
            <div className="kontak-text">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kontak;
