import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { InputVentaComponent } from './producto/input-venta/input-venta.component';
import { BuscarComponent } from './producto/buscar/buscar.component';

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
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
