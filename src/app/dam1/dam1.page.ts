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
      icono: "prog.png",
      nombre: "Programacion",
      checkbox: ""

    },
    {
      icono: "finger-print-outline",
      nombre: "Bases de Datos",
      checkbox: ""
    },
    {
      icono: "bag-remove-outline",
      nombre: "Entornos de Desarrollo",
      checkbox: ""
      

    },
    {
      icono: "analytics-outline",
      nombre: "Sistemas Informaticos",
      checkbox: ""
    },
    {
      icono: "aperture-outline",
      nombre: "Lenguaje de Marcas",
      checkbox: ""
    },
    {
      icono: "airplane-outline",
      nombre: "FOL",
      checkbox: ""
    },
    {
      icono: "airplane-outline",
      nombre: "Ingles",
      checkbox: ""
    }
    
  ]

  ngOnInit() {
  }

}
