import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Odonto</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link link-light active">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link link-light">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className="nav-link link-light">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link link-light">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link link-light">Contacto</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar