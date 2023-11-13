<template>
    <div class="row m-5">

        <div class="col-4">
            <h4 class="text-center">
                Información de Contacto
            </h4>
            <div class="text-justify">
                Clínica odontológica especializada.
                Durante 13 años hemos incorporado un excelente equipo de trabajo y nueva tecnología, lo que nos han
                permitido ofrecer
                los más altos estándares de calidad a nuestros pacientes. A partir del 2014 decidimos incorporar una imagen
                más fresca y
                renovada con el lanzamiento de la marca .
            </div>
            <br>
            <address>
                <strong>Odontología sin dolor.<br>
                    Av. República E5-106 y Alemania<br>
                    Edificio Alvarez Garcia<br>
                    Planta Baja<br>
                    Guayaquil - Ecuador</strong><br>
                Telephone: (593-2) 12345677<br>
                E-mail: <a href="mailto:info@hotmail.com">info@hotmail.com</a><br>
            </address>
        </div>
        <div class="col-1"></div>
        <div class="col-6">
            <h4 class="text-center">
                Contactarme
            </h4>
            <div class="border rounded p-2">
                <form>
                    <div class="form-group p-2">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" maxlength="30" v-model="nombre">
                    </div>
                    <div class="form-group p-2">
                        <label for="apellido">Apellido:</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" maxlength="30"
                            v-model="apellido">
                    </div>
                    <div class="form-group p-2">
                        <label for="telefono">Telefono:</label>
                        <input class="form-control" name="telefono" id="telefono" rows="4" maxlength="150"
                            v-model="telefono" />
                    </div>
                    <div class="form-group p-2">
                        <label for="correo">Correo:</label>
                        <input type="email" class="form-control" id="correo" name="correo" maxlength="30" v-model="correo">
                    </div>
                    <div class="form-group p-2">
                        <label for="direccion">Dirección:</label>
                        <input class="form-control" id="direccion" name="direccion" rows="4" maxlength="150"
                            v-model="direccion" />
                    </div>
                    <div class="form-group p-2">
                        <label for="comentario">Comentario:</label>
                        <textarea class="form-control" id="comentario" rows="4" disabled
                            maxlength="150">Yo, {{ nombre }} {{ apellido }} deseo que se comuniquen conmigo a mi numero de telefono {{ telefono }} y correo {{ correo }}. Gracias.</textarea>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary col-6" v-on:click="Contactar()">Enviar</button>

                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
let persona = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
    comentario: 'Yo, '
};

export default {
    name: 'ContactosComponent',
    data() {
        return persona;
    },
    methods: {
        Contactar() {
            alert('Gracias ' + this.nombre + ' pronto nos contactaremos contigo.');
            console.log(this.nombre);
        }
    }
};
</script>