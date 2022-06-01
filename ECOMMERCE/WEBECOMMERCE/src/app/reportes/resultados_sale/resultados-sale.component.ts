import { Component, OnInit } from '@angular/core';
import { Sale } from '../../interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-resultados-sale',
  templateUrl: './resultados-sale.component.html',
  styleUrls: ['./resultados-sale.component.css']
})
export class ResultadosSaleComponent implements OnInit {

  prod: string = '';
  desc: string = '';
  precioIni?: number;
  precioFin?: number;
  cargando: boolean = false;

  sales: Sale[] = [];

  constructor(private ser: ServService) {
    this.cargando = false;

  }

  ngOnInit(): void {
  }

  buscarSales() {
    this.ser.buscarTodasSales().subscribe(
      (sall) => {
        this.sales = sall.sales;
        this.cargando = false;
      },
      (err) => {
        this.cargando = false;
        this.sales = [];
      }
    )
  }
}
