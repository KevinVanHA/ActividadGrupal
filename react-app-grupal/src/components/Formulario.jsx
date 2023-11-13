import { useState } from "react"

const Formulario = () => {
  const [mensaje, setMensaje] = useState("")

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1 className="text-primary">Información de Contacto</h1>
          <h6 className="text-secondary">Clínica odontológica especializada</h6>
          <p>Durante 13 años hemos incorporado un excelente equipo de trabajo y nueva tecnología, lo que
            nos han permitido ofrecer los más altos estándares de calidad a nuestros pacientes. A partir
            del 2014 decidimos incorporar una imagen más fresca y renovada con el lanzamiento de la marca
            ODONTOADVANCE.</p>
          <p><strong>ODONTO ADVANCE - Odontología sin dolor.<br />Av. República E5-106 y Alemania<br />
            Edificio Alvarez Garcia<br />Planta Baja<br />Quito - Ecuador</strong><br />Telephone: (593-2) 2278 730<br />
            Email: <a href="mailto:info@odontoadvance.ec" className="link-danger link-underline-opacity-0">info@odontoadvance.ec</a></p>
        </div>
        <div className="col-md-8">
          <h1 className="text-primary">Contáctanos</h1>
          <form className="mt-5">
            <div className="row">
              <div className="col-4">
                <input type="text" class="form-control" placeholder="Nombre:" aria-label="Nombre" />
              </div>
              <div className="col-4">
                <input type="email" class="form-control" placeholder="E-mail:" aria-label="E-mail" />
              </div>
              <div className="col-4">
                <input type="tel" class="form-control" placeholder="Teléfono:" aria-label="Teléfono" />
              </div>
              <div className="col mt-4">
                <textarea className="w-100 form-control" placeholder="Mensaje:" rows={8}
                  value={mensaje} onChange={e => setMensaje(e.target.value)} />
              </div>
              <div className="d-flex justify-content-start gap-3 mt-4">
                <button type="submit" className="btn btn-danger">BORRAR</button>
                <button type="submit" className="btn btn-info">ENVIAR</button>
              </div>
              <p>El mensaje escrito es: {mensaje}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario