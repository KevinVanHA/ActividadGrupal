import Cartas from "../components/Cartas"

const Servicios = () => {
  const servicios = [{
    img: "https://www.odontoadvance.ec/wp-content/uploads/2016/05/rehabilitacionoral.jpg",
    nombre: "Rehabilitación Oral",
    descripcion: "La Rehabilitación Oral es la parte de la Odontología encargada de la restauración de la función, estética y armonía orales…"
  }, {
    img: "https://www.odontoadvance.ec/wp-content/uploads/2016/05/implante-dental.jpg",
    nombre: "Implantes Dentales",
    descripcion: "Implantes dentales a través de la colocación de elementos especiales dentro del hueso, se busca reemplazar uno o más dientes…"
  }, {
    img: "https://www.odontoadvance.ec/wp-content/uploads/2016/05/Q65.jpg",
    nombre: "Sedación",
    descripcion: "La sedación consciente o sedación por inhalación es una técnica usada desde hace más de 150 años en Odontología por…"
  },]
  return (
    <>
      <Cartas servicios={servicios} />
    </>
  )
}

export default Servicios