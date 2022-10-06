import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CabeceraComponent],
  exports: [CabeceraComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
