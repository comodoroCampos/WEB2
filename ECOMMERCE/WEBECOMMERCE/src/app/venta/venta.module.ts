import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputVentaComponent } from './input-venta/input-venta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    InputVentaComponent,
    ResultadosComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    InputVentaComponent,
    ResultadosComponent,
    BuscarComponent
  ]
})
export class VentaModule { }
