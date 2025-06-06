import { useEffect, useState } from "react";
import datos from "../datos/datos.json";

const SobreMi = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(datos);
  }, []);

  return (
    <main>
      

      <div className="card">
        <img src={info.imagen} alt="Yo" />
        <h3><strong>{info.nombre}</strong></h3>
        
      </div>

      <div className="card">
        <h3>Hobbies</h3>
        <div className="card-list">
          {info.hobbies?.map((h, i) => (
            <div key={i} className="mini-card">{h}</div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Skills</h3>
        <div className="card-list">
          {info.skills?.map((s, i) => (
            <div key={i} className="mini-card">{s}</div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SobreMi;