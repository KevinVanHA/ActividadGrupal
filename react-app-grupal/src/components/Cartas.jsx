const Cartas = ({ servicios }) => {
  return (
    <div className="container-fluid mt-5">
      <div class="row row-cols-md-3 row-cols-2 g-4">
        {servicios.map((servicio, index) => (
          <div class="col" key={index}>
            <div class="card h-100">
              <img src={servicio.img} class="card-img-top" alt="Servicio" />
              <div class="card-body text-center">
                <h5 class="card-title">{servicio.nombre}</h5>
                <p class="card-text">{servicio.descripcion}</p>
                <button className="btn btn-danger">LEER MÁS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cartas