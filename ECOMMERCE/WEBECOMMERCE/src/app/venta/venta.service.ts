import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../constantes/constantes';
import { Respuesta,Producto } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) {  }

  agregarProducto(producto:Producto): Observable<Respuesta> {
    return this.http.post<Respuesta>(`${URL_SERVICIOS}/api/producto/`, producto);
  }
}




