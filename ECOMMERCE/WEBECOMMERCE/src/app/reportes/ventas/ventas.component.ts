import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Venta } from 'src/app/interfaces/interface';
import Swal from 'sweetalert2';
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
  cargando: boolean = false;
  ventas: Venta[] = [];

  @Output() onDebounce: EventEmitter<Date> = new EventEmitter();
  @Output() onEnter: EventEmitter<Date> = new EventEmitter();
  debouncer: Subject<Date> = new Subject();
  constructor(private ventaService: ServService) {
    this.fecha_desde = new Date();
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



  buscar() {
    this.cargando = true;
    this.ventas = [];
    if (!this.fecha_desde||this.fecha_hasta||this.empleado=='') {
      Swal.fire({
        icon:  'error',
        title: 'Selecciona una fecha y usuario Aweonao',
        text: 'campos obligatorios',
      });
      return;
    }
    this.ventaService.buscarVentaPorFecha(this.fecha_desde!,this.fecha_hasta!,this.empleado).subscribe(
      (ven) => {
        this.ventas = ven.venta;
        this.cargando = false;
        console.log(this.ventas);
      },
      (err) => {
        this.cargando = false;
        this.ventas = [];
      }
    );
  }
}
