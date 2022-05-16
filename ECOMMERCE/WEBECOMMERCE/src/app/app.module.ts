import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { HttpClientModule } from '@angular/common/http';
import { VentaModule } from './venta/venta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoModule } from './producto/producto.module';
import { ReportesModule } from './reportes/reportes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VentaModule,
    SidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProductoModule,
    ReportesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
