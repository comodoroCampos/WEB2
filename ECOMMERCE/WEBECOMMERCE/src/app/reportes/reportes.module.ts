import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DespachoComponent } from './despacho/despacho.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { PostVentaComponent } from './post-venta/post-venta.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    VentasComponent,
    InventarioComponent,
    DespachoComponent,
    ProveedorComponent,
    PostVentaComponent
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
    ProveedorComponent,
    PostVentaComponent
  ]
})
export class ReportesModule { }