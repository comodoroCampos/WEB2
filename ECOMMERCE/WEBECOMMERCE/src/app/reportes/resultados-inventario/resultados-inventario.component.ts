import { Component, OnInit } from '@angular/core';
import { ProductoDuoc } from '../../interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-resultados-inventario',
  templateUrl: './resultados-inventario.component.html',
  styleUrls: ['./resultados-inventario.component.css']
})
export class ResultadosInventarioComponent implements OnInit {

  prod: string = '';
  desc: string = '';
  precioIni?: number;
  precioFin?: number;
  cargando: boolean = false;

  productos: ProductoDuoc[] = [];

  constructor(private ser: ServService) {
    this.cargando = false;

  }

  ngOnInit(): void {
  }

  buscarProductos() {
    this.ser.buscarTodosProductos().subscribe(
      (prodd) => {
        this.productos = prodd.productos;
        this.cargando = false;
      },
      (err) => {
        this.cargando = false;
        this.productos = [];
      }
    )
  }
}
