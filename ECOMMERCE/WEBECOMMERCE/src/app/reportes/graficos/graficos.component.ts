import { Component, OnInit } from '@angular/core';
import { ProductoInventario } from 'src/app/interfaces/interface';
import { ServService } from '../serv.service';
import { VentaGrafico } from '../../interfaces/interface';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {
  basicData: any;
  ventaData: any;
  horizontalOptions: any;
  basicOptions: any;
  cargando: boolean = false;
  productos: ProductoInventario[] = [];
  ventas:VentaGrafico[]=[];
  label: string[] = [];
  data: number[] = [];
  labelVenta: string[] = [];
  dataVenta: number[] = [];
  constructor(private ser: ServService) {
    this.cargando = false;
    this.ser.buscarInventarioGrafico().subscribe(
      (prodd) => {
        this.productos = prodd.productos;
        for (const pr of this.productos) {
          this.label.push(pr.nombre);
          this.data.push(pr.stock);
        }
        this.basicData = {
          labels: this.label,
          datasets: [
            {
              label: 'Productos',
              backgroundColor: '#4263F5',
              data: this.data,
            },
          ],
        };
      },
      (err) => {
        this.cargando = false;
        this.productos = [];
      }
    );
    this.ser.buscarVentasGrafico().subscribe(
      (venta) => {
        this.ventas = venta.ventas;
        for (const pr of this.ventas) {
          this.labelVenta.push(pr.fecha);
          this.dataVenta.push(pr.total);
        }
        this.ventaData = {
          labels: this.labelVenta,
          datasets: [
            {
              label: 'Ventas por dia',
              backgroundColor: '#F2F542',
              data: this.dataVenta,
            },
          ],
        };
      },
      (err) => {
        this.cargando = false;
        this.ventas = [];
      }
    );

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
    
      this.cargando = true;
    
  }

  ngOnInit(): void {}
}
