import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../../interfaces/interface';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { VentaService } from '../../venta/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-venta',
  templateUrl: './input-venta.component.html',
  styleUrls: ['./input-venta.component.css']
})
export class InputVentaComponent implements OnInit {

  @Output() onEnter: EventEmitter<Producto> = new EventEmitter();
  @Output() onDebounce: EventEmitter<Producto> = new EventEmitter();

  debouncer: Subject<Producto> = new Subject();

  producto: Producto = {
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: [],
    codigo: ''
  };

  constructor(private ventaService:VentaService) { }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
  teclaPresionada() {
    this.debouncer.next(this.producto);

  }
  guardar(){
    this.onEnter.emit(this.producto);

    this.ventaService.agregarProducto(this.producto).subscribe(
      (sl) => {
        console.log('Producto ingresada');
        Swal.fire({
          icon: sl.ok ? 'success' : 'error',
          title: 'Se guardo la Wea',
          text: sl.mensaje,
        });
      },
      (err) => {
        console.log('error');
        console.log(err);
      }
    );
    this.producto = {
      nombre: '',
      precio: 0,
      descripcion: '',
      categoria: '',
      imagen: [],
      codigo: ''
    };
  }
}
