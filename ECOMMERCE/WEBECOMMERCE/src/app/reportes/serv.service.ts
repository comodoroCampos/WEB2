import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../constantes/constantes';
import { Productos, Ventas, ProductosDuoc, Sale, Sales } from '../interfaces/interface';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) {  }

  buscarVentaPorVendedor(rut: string): Observable<Productos> {
    const url = `${URL_SERVICIOS}/api/producto/${rut}`;
    return this.http.get<Productos>(url);
  }

  buscarVentaPorFecha(fecha_desde: Date,fecha_hasta:Date,usuario:string): Observable<Ventas> {
    const desde=(moment(fecha_desde)).format('YYYY-MM-DDTHH:mm:ss')
    const hasta=(moment(fecha_hasta)).format('YYYY-MM-DDTHH:mm:ss')
   
    let url = `${URL_SERVICIOS}/api/ventas/todos/`;

    if (fecha_desde && fecha_hasta && usuario != ''){
      url = `${URL_SERVICIOS}/api/ventas/fecha-usuario/${desde}/${hasta}/${usuario}`;
    }
    
    if (fecha_desde && fecha_hasta && usuario == ''){
      url = `${URL_SERVICIOS}/api/ventas/fechas/${desde}/${hasta}`;
    }
    
    if (!fecha_desde && !fecha_hasta && usuario != ''){
      url = `${URL_SERVICIOS}/api/ventas/usuario/${usuario}`;
    }

    return this.http.get<Ventas>(url);
  }

  buscarTodosProductos(): Observable<ProductosDuoc> {
    const url = `${URL_SERVICIOS}/api/mysql/producto/todos`;
    return this.http.get<ProductosDuoc>(url);
  }

  buscarTodasSales(): Observable<Sales> {
    const url = `${URL_SERVICIOS}/api/mysql/sale/todos`;
    return this.http.get<Sales>(url);
  }
}
