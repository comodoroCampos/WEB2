import { Component, Input, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-resultados-ventas',
  templateUrl: './resultados-ventas.component.html',
  styleUrls: ['./resultados-ventas.component.css'],
})
export class ResultadosVentasComponent implements OnInit {
  @Input() ventas: Venta[] = [];
  @Input() ventasAux: Venta[] = [];

  displayedColumns: string[] = [
    'cantidad',
    'producto',
    'fecha',
    'tipo',
    'usuario',
    'anular'
  ];
  constructor() {}

  ngOnInit(): void {}
  eliminar(venta: Venta) {
    console.log(venta);
  }
}
