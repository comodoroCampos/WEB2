import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { InputVentaComponent } from './producto/input-venta/input-venta.component';
import { BuscarComponent } from './producto/buscar/buscar.component';
import { VentasComponent } from './reportes/ventas/ventas.component';
import { ResultadosInventarioComponent } from './reportes/resultados-inventario/resultados-inventario.component';
import { ResultadosSaleComponent } from './reportes/resultados_sale/resultados-sale.component';
import { FacturasComponent } from './reportes/facturas/facturas.component';
import { TicketComponent } from './reportes/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    pathMatch: 'full'
},
{
  path: 'producto',
  component: InputVentaComponent
},
{
  path: 'buscar-producto',
  component: BuscarComponent
},
{
  path: 'ventas',
  component: VentasComponent
},
{
  path: 'productos',
  component: ResultadosInventarioComponent
},
{
  path: 'sales',
  component: ResultadosSaleComponent
},
{
  path: 'facturas',
  component: FacturasComponent
},
{
  path: 'ticket',
  component: TicketComponent
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
