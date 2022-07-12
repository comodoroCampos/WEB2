import { Component, OnInit } from '@angular/core';
import { ProductoInventario } from 'src/app/interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {
  basicData: any;
  horizontalOptions: any;
  cargando: boolean = false;
  productos: ProductoInventario[] = [];
  label: string[] = [];
  data: number[] = [];

  constructor(private ser: ServService) {
    this.cargando = false;
    this.ser.buscarInventarioGrafico().subscribe(
      (prodd) => {
        this.productos = prodd.productos;
        console.log(this.productos);
        for (const pr of this.productos) {
          this.label.push(pr.nombre);
          this.data.push(pr.stock);
        }
        this.basicData = {
          labels: this.label,
          datasets: [
            {
              label: 'Productos',
              backgroundColor: '#42A5F5',
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
