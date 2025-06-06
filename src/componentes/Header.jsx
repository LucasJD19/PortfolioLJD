import { Link } from "react-router-dom"
import rutas from "../rutas/rutas.json"
import { useTemaStore } from "../tienda/tema"

const Header = () => {
  const { alternarTema } = useTemaStore()

  return (
    <header>
      <h1>Lucas Jonas Diaz | Full Stack</h1>
      <nav>
        {rutas.map((ruta, i) => (
          <Link key={i} to={ruta.link} style={{ marginRight: "10px" }}>
            {ruta.nombre}
          </Link>
        ))}
        <button onClick={alternarTema}>Cambiar Tema</button>
      </nav>
    </header>
  )
}

export default Header