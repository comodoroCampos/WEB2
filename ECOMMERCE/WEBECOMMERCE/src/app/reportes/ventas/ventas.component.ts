import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { instanceOfToken } from 'src/app/constantes/utils';
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
  diaActual : Date = new Date();

  @Output() onDebounce: EventEmitter<Date> = new EventEmitter();
  @Output() onEnter: EventEmitter<Date> = new EventEmitter();
  debouncer: Subject<Date> = new Subject();
  constructor(private ventaService: ServService,private router: Router) {
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

  buscar() {
    console.log(this.empleado);
    this.ventas = [];
    this.cargando = true;
    this.ventaService.buscarVentaPorFecha(this.fecha_desde!,this.fecha_hasta!,this.empleado).subscribe(
      (ven) => {
        if(instanceOfToken(ven)){
          console.log('')
          this.router.navigate(['/login']);
        }else{
        this.ventas = ven.venta;
        this.cargando = false;
        console.log(this.ventas);
        }
      },
      (err) => {
        this.cargando = false;
        this.ventas = [];
      }
    );
  }
}
