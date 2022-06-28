import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TicketElement } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-ticket-resultado',
  templateUrl: './ticket-resultado.component.html',
  styleUrls: ['./ticket-resultado.component.css']
})
export class TicketResultadoComponent implements OnInit {
  @Input() ticket: TicketElement[] = [];
  @Input() ticketAux: TicketElement[] = [];
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  displayedColumns: string[] = [
    'ticket',
    'monto',
    'fecha',
    'nombre',
    'producto',
    'estado'
  ];
  constructor() { 
    this.termino = '';
  }

  ngOnInit(): void {
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
    this.ticket = this.ticketAux;
    this.ticket = this.ticket.filter((tk) =>
    tk.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}