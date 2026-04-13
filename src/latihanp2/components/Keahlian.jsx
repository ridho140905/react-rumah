// src/latihanp2/components/Keahlian.jsx

const skills = [
  { nama: "React JS", persen: 10 },
  { nama: "Data mining", persen: 30 },
  { nama: "HTML & CSS", persen: 70 },
  { nama: "MySQL", persen: 80 },
  { nama: "Php", persen: 60 },
];

const Keahlian = () => {
  return (
    <div className="card">
      <span className="card-icon">⚡</span>
      <div className="card-title">Keahlian</div>
      {skills.map((skill) => (
        <div className="skill-item" key={skill.nama}>
          <div className="skill-header">
            <span className="skill-name">{skill.nama}</span>
            <span className="skill-pct">{skill.persen}%</span>
          </div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.persen}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Keahlian;
