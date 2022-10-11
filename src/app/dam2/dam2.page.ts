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
      icono: "./../assets/icon/servicios.png",
      nombre: "Servicios y Procesos",
      checkbox: "",
  

    },
    {
      icono: "./../assets/icon/interfaces.png",
      nombre: "Desarrollo de Interfaces",
      checkbox: "",
      
    },
    {
      icono: "./../assets/icon/empresas.png",
      nombre: "Sistemas de Gestion Empresarial",
      checkbox: "",
     
      

    },
    {
      icono: "./../assets/icon/aadd.png",
      nombre: "Acceso a Datos",
      checkbox: "",
      
    },
    {
      icono: "./../assets/icon/multimedia.png",
      nombre: "Programacion Multimedia",
      checkbox: "",
      
    },
    {
      icono: "./../assets/icon/udyr.png",
      nombre: "Empresas",
      checkbox: "",
     
    }
    
  ]

  ngOnInit() {
  }

}
