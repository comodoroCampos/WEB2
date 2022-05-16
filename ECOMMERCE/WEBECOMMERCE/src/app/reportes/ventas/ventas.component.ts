import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  fecha_desde: Date;
  fecha_hasta: Date;
  disable_hasta: boolean = true;
  empleado: string = '';

  constructor() {
    this.fecha_desde = new Date();
    this.fecha_hasta = new Date();
    this.empleado = '';
  }

  ngOnInit(): void {}
  selecionaFecha() {
    this.disable_hasta = false;
    if (this.fecha_desde < this.fecha_hasta) {
      this.disable_hasta = false;
    }
    console.log(this.fecha_desde);
    console.log(this.fecha_hasta);
  }

  buscar() {
    console.log(this.fecha_desde);
    console.log(this.fecha_hasta);
    console.log(this.empleado);
  }
}
