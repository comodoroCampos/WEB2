import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() productos: Producto[] = [];
  @Input() productosAux: Producto[] = [];
  
  displayedColumns: string[] = ['rut', 'nombres', 'apellidos', 'solicitud', 'fecha', 'motivo', 'anular'];
  constructor() { }

  ngOnInit(): void {
  }

}
