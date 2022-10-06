import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  constructor() { }
  asignaturasDAM1 = [
    {
      icono: "people-circle-outline",
      nombre: "Servicios y Procesos",
      checkbox: ""

    },
    {
      icono: "finger-print-outline",
      nombre: "Desarrollo de Interfaces",
      checkbox: ""
    },
    {
      icono: "bag-remove-outline",
      nombre: "Sistemas de Gestion Empresarial",
      checkbox: ""
      

    },
    {
      icono: "analytics-outline",
      nombre: "Acceso a Datos",
      checkbox: ""
    },
    {
      icono: "aperture-outline",
      nombre: "Programacion Multimedia",
      checkbox: ""
    },
    {
      icono: "airplane-outline",
      nombre: "Empresas",
      checkbox: ""
    }
    
  ]

  ngOnInit() {
  }

}
