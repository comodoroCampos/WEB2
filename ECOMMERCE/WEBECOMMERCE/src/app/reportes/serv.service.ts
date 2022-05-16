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

  buscarVentaPorFecha(fecha: Date): Observable<Ventas> {
    const url = `${URL_SERVICIOS}/api/venta/${fecha}`;
    return this.http.get<Ventas>(url);
  }
}
