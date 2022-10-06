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
      checkbox: ""

    },
    {
      icono: "finger-print-outline",
      nombre: "Desarrollo de Interfaces",
      checkbox: ""
    },
    {
      icono: "sparkles-outline",
      nombre: "The Legend of Zelda",
      checkbox: ""
      

    },
    {
      icono: "game-controller-outline",
      nombre: "Pac-Man"

    },
    {
      icono: "globe-outline",
      nombre: "Super Mario World"

    },
    
  ]

  ngOnInit() {
  }

}
