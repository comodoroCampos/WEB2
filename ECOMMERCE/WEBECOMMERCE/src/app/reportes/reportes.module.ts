import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DespachoComponent } from './despacho/despacho.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ResultadosVentasComponent } from './resultados-ventas/resultados-ventas.component';
import { ResultadosInventarioComponent } from './resultados-inventario/resultados-inventario.component';
import { ResultadosSaleComponent } from './resultados_sale/resultados-sale.component';
import { SaleComponent } from './sale/sale.component';



@NgModule({
  declarations: [
    VentasComponent,
    InventarioComponent,
    DespachoComponent,
    ResultadosVentasComponent,
    ResultadosInventarioComponent,
    ResultadosSaleComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule
  ],
  exports: [
    VentasComponent,
    InventarioComponent,
    DespachoComponent,
    ResultadosVentasComponent,
    ResultadosInventarioComponent,
    ResultadosSaleComponent
  ]
})
export class ReportesModule { }
