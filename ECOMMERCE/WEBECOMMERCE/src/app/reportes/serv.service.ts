import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../constantes/constantes';
import { Producto, Productos, Respuesta, Ventas } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) {  }

  buscarVentaPorVendedor(rut: string): Observable<Productos> {
    const url = `${URL_SERVICIOS}/api/producto/${rut}`;
    return this.http.get<Productos>(url);
  }

  buscarVentaPorFecha(desde: Date,hasta:Date,usuario:string): Observable<Ventas> {
    const url = `${URL_SERVICIOS}/api/venta/${desde}/${hasta}/${usuario}`;
    return this.http.get<Ventas>(url);
  }
}
