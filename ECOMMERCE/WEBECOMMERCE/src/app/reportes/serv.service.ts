import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../constantes/constantes';
import {  Productos,  Ventas } from '../interfaces/interface';
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
   
    const url = `${URL_SERVICIOS}/api/ventas/${desde}/${hasta}/${usuario}`;
    return this.http.get<Ventas>(url);
  }
}
