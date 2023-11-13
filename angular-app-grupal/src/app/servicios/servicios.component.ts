import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  services = [
    {
      name: 'Ortodoncia',
      description: 'Tratamiento para corregir la posición de los dientes',
      image: 'assets/img/servicio1.jpg'
    },
    {
      name: 'Cirugía dental',
      description: 'Tratamientos quirúrgicos para la boca y los dientes',
      image: 'assets/img/servicio2.jpg'
    },
    {
      name: 'Endodoncia',
      description: 'Tratamiento para salvar los dientes con caries profundas',
      image: 'assets/img/servicio3.jpg'
    }
  ];

  constructor() { }

  ngOnInit() { }

}