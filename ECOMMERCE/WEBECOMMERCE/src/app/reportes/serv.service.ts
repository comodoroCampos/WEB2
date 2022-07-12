import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../constantes/constantes';
import {
  Productos,
  Ventas,
  ProductosDuoc,
  Sale,
  Sales,
  VentasCompletas,
  Inventario,
  Ticket,
  Factura,
} from '../interfaces/interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  constructor(private http: HttpClient) {}

  buscarVentaPorVendedor(rut: string): Observable<Productos> {
    const url = `${URL_SERVICIOS}/api/producto/${rut}`;
    return this.http.get<Productos>(url);
  }

  buscarVentaPorFecha(
    fecha_desde: Date,
    fecha_hasta: Date,
    usuario: string
  ): Observable<Ventas> {
    const desde = moment(fecha_desde).format('YYYY-MM-DDTHH:mm:ss');
    const hasta = moment(fecha_hasta).format('YYYY-MM-DDTHH:mm:ss');

    let url = `${URL_SERVICIOS}/api/ventas/todos/`;

    if (fecha_desde && fecha_hasta && usuario != '') {
      url = `${URL_SERVICIOS}/api/ventas/fecha-usuario/${desde}/${hasta}/${usuario}`;
    }

    if (fecha_desde && fecha_hasta && usuario == '') {
      url = `${URL_SERVICIOS}/api/ventas/fechas/${desde}/${hasta}`;
    }

    if (!fecha_desde && !fecha_hasta && usuario != '') {
      url = `${URL_SERVICIOS}/api/ventas/usuario/${usuario}`;
    }

    return this.http.get<Ventas>(url);
  }

  buscarTodosProductos(): Observable<ProductosDuoc> {
    const url = `${URL_SERVICIOS}/api/mysql/producto/todos`;
    return this.http.get<ProductosDuoc>(url);
  }


  buscarInventario(nombre?:string,descripcion?:string,precioMin?:number,precioMax?:number): Observable<Inventario> {
  let url = `${URL_SERVICIOS}/api/mysql/producto?`;
    if(nombre){
      url += `nombre=${nombre}&`;
    }
    if(descripcion!=''){
      url += `descripcion=${descripcion}&`;
    }
    if(precioMin){
      url += `precioMin=${precioMin}&`;
    }
    if(precioMax){
      url += `precioMax=${precioMax}`;
    }
    return this.http.get<Inventario>(url);
  }
  buscarInventarioGrafico(): Observable<Inventario> {
  let url = `${URL_SERVICIOS}/api/mysql/producto`;
   
    return this.http.get<Inventario>(url);
  }

  buscarTodasSales(
    desde?: Date,
    hasta?: Date,
    usuario?: string,
    producto?: string,
    estado?: string
  ): Observable<VentasCompletas> {
    let url = `${URL_SERVICIOS}/api/mysql/sale/?`;
    if (desde && hasta) {
      const fecha_desde = moment(desde).format('YYYY-MM-DDTHH:mm:ss');
      const fecha_hasta = moment(hasta).format('YYYY-MM-DDTHH:mm:ss');
      url += `fecha_desde=${fecha_desde}&fecha_hasta=${fecha_hasta}&`;
    }
    if (usuario!='') {
      url += `usuario=${usuario}&`;
    }
    if (producto!='') {
      url += `producto=${producto}&`;
    }
    if (estado!='') {
      url += `estado=${estado}&`;
    }

    return this.http.get<VentasCompletas>(url);
  }
  buscarfactura(estado?:string,producto?:string,nro_factura?:string, desde?: Date,hasta?: Date,usuario?: string): Observable<Factura> {
    let url = `${URL_SERVICIOS}/api/mysql/factura?`;
      if(estado){
        url += `estado=${estado}&`;
      }
      if(producto!=''){
        url += `producto=${producto}&`;
      }
      if(nro_factura){
        url += `nro_factura=${nro_factura}&`;
      }
      if(usuario){
        url += `usuario=${usuario}`;
      }
      if (desde && hasta) {
        const fecha_desde = moment(desde).format('YYYY-MM-DDTHH:mm:ss');
        const fecha_hasta = moment(hasta).format('YYYY-MM-DDTHH:mm:ss');
        url += `fecha_desde=${fecha_desde}&fecha_hasta=${fecha_hasta}&`;
      }
      return this.http.get<Factura>(url);
    }
  buscarTicket(estado?:string,producto?:string,nro_ticket?:string, desde?: Date,hasta?: Date,usuario?: string): Observable<Ticket> {
    let url = `${URL_SERVICIOS}/api/mysql/ticket?`;
      if(estado){
        url += `estado=${estado}&`;
      }
      if(producto!=''){
        url += `producto=${producto}&`;
      }
      if(nro_ticket){
        url += `nro_ticket=${nro_ticket}&`;
      }
      if(usuario){
        url += `usuario=${usuario}`;
      }
      if (desde && hasta) {
        const fecha_desde = moment(desde).format('YYYY-MM-DDTHH:mm:ss');
        const fecha_hasta = moment(hasta).format('YYYY-MM-DDTHH:mm:ss');
        url += `fecha_desde=${fecha_desde}&fecha_hasta=${fecha_hasta}&`;
      }
      return this.http.get<Ticket>(url);
    }


}
