// src/latihanp2/components/Moto.jsx

const Moto = ({ teks, sumber }) => {
  return (
    <div className="moto-card">
      <p className="moto-text">{teks}</p>
      <p className="moto-source">— {sumber}</p>
    </div>
  );
};

export default Moto;
