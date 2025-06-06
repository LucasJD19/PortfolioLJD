const Proyectos = () => {
    const proyectos = [
      // Ejemplo:
      // { nombre: "Rick and Morty", url: "https://tu-proyecto.netlify.app" }
    ]
  
    return (
      <main>
        <h2>Proyectos</h2>
        {proyectos.length === 0 ? (
          <p>Aún no hay proyectos cargados.</p>
        ) : (
          proyectos.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer">
              {p.nombre}
            </a>
          ))
        )}
      </main>
    )
  }
  
  export default Proyectos