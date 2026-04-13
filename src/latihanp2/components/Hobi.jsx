// src/latihanp2/components/Hobi.jsx

const hobiList = [
  "💻 Coding", "📖 Membaca", "🎮 Gaming", "🎵 Musik",
  "📸 Fotografi", "✈️ Travelling", "🏸 Badminton", "🎬 Film",
];

const Hobi = () => {
  return (
    <div className="card" style={{ gridColumn: "1 / -1" }}>
      <div className="card-title">🌟 Hobi &amp; Minat</div>
      <div className="hobi-tags">
        {hobiList.map((hobi) => (
          <span className="hobi-tag" key={hobi}>{hobi}</span>
        ))}
      </div>
    </div>
  );
};

export default Hobi;
