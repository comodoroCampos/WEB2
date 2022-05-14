import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputVentaComponent } from './input-venta/input-venta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    InputVentaComponent,
    ResultadosComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentaModule { }
