import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { instanceOfToken } from 'src/app/constantes/utils';
import { ProductoDuoc, ProductoInventario } from '../../interfaces/interface';
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

  productos: ProductoInventario[] = [];

  constructor(private ser: ServService,private router: Router) {
    this.cargando = false;

  }

  ngOnInit(): void {
  }

  buscarProductos() {
    this.ser.buscarInventario(this.prod, this.desc, this.precioIni, this.precioFin).subscribe(
      (prodd) => {
        if(instanceOfToken(prodd)){
          this.router.navigate(['/login']);
        }else{
        this.productos = prodd.productos;
        this.cargando = false;
        }
      },
      (err) => {
        this.cargando = false;
        this.productos = [];
      }
    )
  }
}
