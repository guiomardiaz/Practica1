import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.page.html',
  styleUrls: ['./datospersonales.page.scss'],
})
export class DatospersonalesPage implements OnInit {

  public nombre: string;
  public apellidos: string;
  constructor() { }

  ngOnInit() {
  }
public showAlert(): void {
   alert(`Bienvenido ${this.nombre} ${this.apellidos}`);
}
}
