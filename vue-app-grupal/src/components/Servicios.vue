<template>
    <div className="container-fluid mt-5">
        <div class="row row-cols-md-3 row-cols-2 g-4 m-2">
            <div class="card h-100">
                <img src="https://www.odontoadvance.ec/wp-content/uploads/2016/05/rehabilitacionoral.jpg"
                    class="card-img-top" alt="Servicio" />
                <div class="card-body text-center">
                    <h5 class="card-title">Rehabilitación Oral</h5>
                    <p class="card-text">La Rehabilitación Oral es la parte de la Odontología encargada de la restauración
                        de la función, estética y armonía orales…</p>
                    <button className="btn btn-danger">LEER MÁS</button>
                </div>
            </div>
            <div class="card h-100">
                <img src="https://www.odontoadvance.ec/wp-content/uploads/2016/05/implante-dental.jpg" class="card-img-top"
                    alt="Servicio" />
                <div class="card-body text-center">
                    <h5 class="card-title">Implantes Dentales</h5>
                    <p class="card-text">Implantes dentales a través de la colocación de elementos especiales dentro del
                        hueso, se busca reemplazar uno o más dientes…</p>
                    <button class="btn btn-danger">LEER MÁS</button>
                </div>
            </div>
            <div class="card h-100">
                <img src="https://www.odontoadvance.ec/wp-content/uploads/2016/05/Q65.jpg" class="card-img-top"
                    alt="Servicio" />
                <div class="card-body text-center">
                    <h5 class="card-title">Sedación</h5>
                    <p class="card-text">La sedación consciente o sedación por inhalación es una técnica usada desde hace
                        más de 150 años en Odontología por…</p>
                    <button className="btn btn-danger">LEER MÁS</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const servicio = [{
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
}];

export default {
    data() {
        return servicio;
    }
};
</script>
