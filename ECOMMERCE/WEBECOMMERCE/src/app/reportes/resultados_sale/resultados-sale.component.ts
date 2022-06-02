import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Sale, Sales, VentaCompleta } from '../../interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-resultados-sale',
  templateUrl: './resultados-sale.component.html',
  styleUrls: ['./resultados-sale.component.css']
})
export class ResultadosSaleComponent implements OnInit {

  
  @Output() onDebounce: EventEmitter<Date> = new EventEmitter();
  @Output() onEnter: EventEmitter<Date> = new EventEmitter();
  debouncer: Subject<Date> = new Subject();
  prod: string = '';
  desc: string = '';
  precioIni?: number;
  precioFin?: number;
  cargando: boolean = false;
  user:string='';
  estado: string = '';
  fecha_desde?: Date;
  fecha_hasta?: Date;
  disable_hasta: boolean = true;
  sales: VentaCompleta[] = [];
  diaActual : Date = new Date();
  constructor(private ser: ServService) {
    this.cargando = false;
    this.diaActual = new Date();
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  selecionaFecha() {
    this.disable_hasta = true;
    if (this.fecha_desde) {
      this.debouncer.next(this.fecha_desde);
      this.disable_hasta = false;
    }

  }

  buscarSales() {
    this.cargando = true;
    this.sales = [];
    this.ser.buscarTodasSales(this.fecha_desde, this.fecha_hasta, this.user, this.prod, this.estado).subscribe(
      (sall) => {
        this.sales = sall.sales;
        console.log(this.sales);
        this.cargando = false;
      },
      (err) => {
        this.cargando = false;
        this.sales = [];
      }
    )
  }
}
