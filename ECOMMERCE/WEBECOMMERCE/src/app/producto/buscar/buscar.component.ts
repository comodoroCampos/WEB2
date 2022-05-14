import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Producto } from 'src/app/interfaces/interface';
import { VentaService } from 'src/app/venta/venta.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';

  cargando: boolean = false;
  productos:Producto[]=[]

  constructor(private ventaService: VentaService) {
    this.termino = '';
  }

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.cargando = true;
    this.ventaService.buscarProducto(this.termino).subscribe(
      (prod) => {
        this.productos = prod.productos;
        this.cargando = false;

      }, (err) => {
        this.cargando = false;
        this.productos = [];
      }
    );
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
    console.log(this.termino);
  }
}
