import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Venta } from 'src/app/interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  fecha_desde?: Date;
  fecha_hasta?: Date;
  disable_hasta: boolean = true;
  empleado: string = '';


  @Output() onDebounce: EventEmitter<Date> = new EventEmitter();
  @Output() onEnter: EventEmitter<Date> = new EventEmitter();
  debouncer: Subject<Date> = new Subject();
  constructor(private ventaService: ServService) {
    this.fecha_desde = new Date;
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
    console.log(this.fecha_desde);
    console.log(this.fecha_hasta);
  }

  buscar() {
    console.log(this.fecha_desde);
    console.log(this.fecha_hasta);
    console.log(this.empleado);
  }

  cargando: boolean = false;
  ventas: Venta[] = []

  buscarVentas() {
    this.cargando = true;
    this.ventas = [];
    this.ventaService.buscarVentaPorFecha(this.fecha).subscribe(
      (ven) => {
        this.ventas = ven.ventas;
        this.cargando = false;

      }, (err) => {
        this.cargando = false;
        this.ventas = [];
      }
    );
  }
}
