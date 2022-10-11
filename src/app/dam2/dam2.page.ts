import { Component, OnInit } from '@angular/core';
import { IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  constructor() { }

  asignaturas = [
    {
      icono: "people-circle-outline",
      nombre: "Servicios y Procesos",
      checkbox: "",
      img: ""

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
