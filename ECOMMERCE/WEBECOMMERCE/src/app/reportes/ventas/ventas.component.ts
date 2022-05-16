import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

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
  constructor() {
   

    this.empleado = '';
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
}
