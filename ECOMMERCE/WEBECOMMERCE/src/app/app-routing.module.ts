import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { InputVentaComponent } from './venta/input-venta/input-venta.component';

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
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
