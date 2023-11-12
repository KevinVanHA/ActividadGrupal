import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent {
  persona = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
    comentario: 'Yo, '
  };


  Contactar() {
    alert('Gracias ' + this.persona.nombre + ' pronto nos contactaremos contigo.');
    console.log(this.persona);
  }
}
