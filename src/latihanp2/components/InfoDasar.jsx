// src/latihanp2/components/InfoDasar.jsx

const InfoDasar = ({ nim, jurusan, kampus }) => {
  const items = [
    { icon: "🪪", label: "NIM", value: nim },
    { icon: "📚", label: "Jurusan", value: jurusan },
    { icon: "🏛️", label: "Kampus", value: kampus },
  ];

  return (
    <div className="card full">
      {items.map((item) => (
        <div className="info-cell" key={item.label}>
          <span className="card-icon">{item.icon}</span>
          <p className="card-label">{item.label}</p>
          <p className="card-value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoDasar;
