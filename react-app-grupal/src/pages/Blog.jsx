import Artículos from "../components/Artículos"

const Blog = () => {
  const blogs = [{
    titulo: "ESTO ES LO QUE DEBEMOS COMER PARA EL CUIDADO DE LOS DIENTES",
    contenido: "La ciencia es determinante cuando plantea que la alimentación es un factor fundamental para nuestra salud, lo que también influye en el estado de nuestra salud bucodental. Aquí existen  nutrientes que permiten la participación en la formación y salud de los dientes y las encías. Entre los que se encuentran el calcio, el fósforo, el flúor,…",
    img: "https://www.odontoadvance.ec/wp-content/uploads/2018/02/blog3-900x444.jpg"
  }, {
    titulo: "HÁBITOS QUE MALTRATAN TUS DIENTES (II PARTE)",
    contenido: "En el capítulo I hablamos de tres puntos y hábitos que debemos parar para que nuestros dientes no se dañen, no sufran en el transcurso de nuestra existencia. Ahora tocaremos tres puntos más que el 80% de las personas comunes y corrientes desconocen. 1.-  Apretar y rechinar los dientes La mayor cantidad de personas aprieta…",
    img: "https://www.odontoadvance.ec/wp-content/uploads/2018/02/blog2-900x444.jpg"
  }, {
    titulo: "HÁBITOS QUE MALTRATAN TUS DIENTES (I PARTE)",
    contenido: "Hay algunas prácticas que aún están en discusión dentro del cómo cuidar tus dientes para toda la vida, a continuación vamos a contar tres malos hábitos que contribuyen al desgaste de tu dentadura. 1.- Cepillar los dientes después de comer o beber algo ácido Parecería ilógico pero a lo que se refiere esta primera mala conducta es…",
    img: "https://www.odontoadvance.ec/wp-content/uploads/2018/02/blog1-900x444.jpg"
  }]
  return (
    <>
      <Artículos blogs={blogs} />
    </>
  )
}

export default Blog