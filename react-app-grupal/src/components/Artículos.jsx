const Artículos = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, index) => (
        <div className="container-fluid mt-5" key={index}>
          <h3 className="text-primary">{blog.titulo}</h3>
          <div className="row">
            <div className="col-md-3">
              <img src={blog.img} alt="Blog" className="w-100" />
            </div>
            <div className="col-md-9">
              <p>{blog.contenido}</p>
              <button className="btn btn-danger">LEER MÁS</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Artículos