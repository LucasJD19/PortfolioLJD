import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import rutas from "./rutas/rutas.json"
import Home from "./pages/Home"
import SobreMi from "./pages/SobreMi"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import { useTemaStore } from "./tienda/tema"

const App = () => {
  const { temaOscuro } = useTemaStore()

  return (
    <div className={temaOscuro ? "tema-oscuro" : "tema-claro"}>
      <BrowserRouter>
        <Header />
        <Routes>
          {rutas.map((ruta, i) => {
            const Componente = {
              Home,
              SobreMi,
              Proyectos,
              Contacto
            }[ruta.componente]
            return <Route key={i} path={ruta.link} element={<Componente />} />
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App