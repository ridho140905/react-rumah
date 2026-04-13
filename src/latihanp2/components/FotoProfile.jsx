// src/latihanp2/components/FotoProfile.jsx

const FotoProfile = ({ nama }) => {
  return (
    <div className="foto-wrapper">
      <img 
        src="/img/yuji.jpg" 
        alt={`Foto ${nama}`}
        className="foto-profile"
        title={`Foto ${nama}`}
      />
      <div className="status-badge" title="Aktif"></div>
    </div>
  );
};

export default FotoProfile;
