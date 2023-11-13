import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Blog from "./pages/Blog"
import Contacto from "./pages/Contacto"
import Footerbar from "./components/Footerbar"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footerbar />
      </div>
    </BrowserRouter>
  )
}

export default App