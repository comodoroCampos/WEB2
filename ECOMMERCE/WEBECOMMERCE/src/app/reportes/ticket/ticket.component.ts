import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { instanceOfToken } from 'src/app/constantes/utils';
import { TicketElement } from 'src/app/interfaces/interface';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Output() onDebounce: EventEmitter<Date> = new EventEmitter();
  @Output() onEnter: EventEmitter<Date> = new EventEmitter();
  debouncer: Subject<Date> = new Subject();
  producto: string = '';
  nro_ticket: string = '';
  precioIni?: number;
  precioFin?: number;
  user:string='';
  estado: string = '';
  fecha_desde?: Date;
  fecha_hasta?: Date;
  disable_hasta: boolean = true;
  tickets: TicketElement[] = [];


  diaActual : Date = new Date();
  cargando: boolean = false;
  constructor(private ser: ServService,private router: Router) { 
    this.cargando = false;
    this.diaActual = new Date();
  }

  ngOnInit(): void {
  }
  selecionaFecha() {
    this.disable_hasta = true;
    if (this.fecha_desde) {
      this.debouncer.next(this.fecha_desde);
      this.disable_hasta = false;
    }

  }
  buscarFacturas() {
    this.cargando = true;
    this.tickets = [];
    this.ser.buscarTicket(this.estado,this.producto,this.nro_ticket, this.fecha_desde,this.fecha_hasta,this.user).subscribe(
      (sall) => { 
        if(instanceOfToken(sall)){
          this.router.navigate(['/login']);
        }else{
        this.tickets = sall.ticket;
        console.log(this.tickets);
        this.cargando = false;
        }
      },
      (err) => {
        this.cargando = false;
        this.tickets = [];
      }
    )
  }
}
