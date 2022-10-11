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
      icono: "./../assets/prog.png",
      nombre: "Programacion",
      checkbox: ""

    },
    {
      icono: "./../assets/bbdd.png",
      nombre: "Bases de Datos",
      checkbox: ""
    },
    {
      icono: "./../assets/entornos.png",
      nombre: "Entornos de Desarrollo",
      checkbox: ""
      

    },
    {
      icono: "./../assets/sistemas.png",
      nombre: "Sistemas Informaticos",
      checkbox: ""
    },
    {
      icono: "./../assets/lenguaje.png",
      nombre: "Lenguaje de Marcas",
      checkbox: ""
    },
    {
      icono: "./../assets/fol.png",
      nombre: "FOL",
      checkbox: ""
    },
    {
      icono: "./../assets/ing.png",
      nombre: "Ingles",
      checkbox: ""
    }
    
  ]

  ngOnInit() {
  }
  public showAlert(): void {
    alert(`Asignatura seleccionada`);
 }
}
