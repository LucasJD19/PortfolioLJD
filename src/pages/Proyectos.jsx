const Proyectos = () => {
  const proyectos = [
    { 
      nombre: "Tateti", 
      url: "https://proyectotatetilucas.netlify.app/", 
      preview: "/imagenes/tateti.png" 
    },
    { 
      nombre: "Proyecto Lenguajes", 
      url: "https://tp2programacionproyecto.netlify.app/", 
      preview: "/imagenes/tp2.png" 
    },
    { 
      nombre: "Proyecto PedidosYa", 
      url: "https://pedidosyaproyecto.netlify.app/", 
      preview: "/imagenes/pedidosya.png" 
    },
  ];

  return (
    <>
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <main>
        <h2>Proyectos</h2>
        {proyectos.length === 0 ? (
          <p>No hay proyectos disponibles</p>
        ) : (
          <div className="proyectos-container">
            {proyectos.map((p, i) => (
              <a 
                key={i} 
                href={p.url} 
                target="_blank" 
                rel="noreferrer" 
                className="card-proyecto"
              >
                <div className="preview-container">
                  <img 
                    src={p.preview} 
                    alt={`Preview de ${p.nombre}`} 
                    className="preview-image" 
                  />
                </div>
                <h3>{p.nombre}</h3>
                <p>Ver proyecto</p>
              </a>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Proyectos;
