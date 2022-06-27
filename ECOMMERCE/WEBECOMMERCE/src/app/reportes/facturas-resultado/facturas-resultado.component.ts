import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FacturaElement } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-facturas-resultado',
  templateUrl: './facturas-resultado.component.html',
  styleUrls: ['./facturas-resultado.component.css']
})
export class FacturasResultadoComponent implements OnInit {
  @Input() facturas: FacturaElement[] = [];
  @Input() facturasAux: FacturaElement[] = [];
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  displayedColumns: string[] = [
    'factura',
    'monto',
    'fecha',
    'nombre',
    'producto'
  ];
  constructor() { 
    this.termino = '';
  }

  ngOnInit(): void {
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
    this.facturas = this.facturasAux;
    this.facturas = this.facturas.filter((factura) =>
    factura.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}
