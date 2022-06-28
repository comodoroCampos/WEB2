import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TicketElement, TicketReporte } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';

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


  exportExcel() {
  import('xlsx').then((xlsx) => {
    const reporte:TicketReporte[]=[]
    for (const fc of this.ticket) {
      const f:TicketReporte={
        boleta: fc.nro_ticket,
        monto: fc.ticket_amount,
        fecha: fc.created_at,
        estado: fc.status,
        vendedor: fc.name,
        producto: fc.producto
      };
      reporte.push(f);
    }
    const worksheet = xlsx.utils.json_to_sheet(reporte);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'products');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE,
  });
  FileSaver.saveAs(
    data,
    fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
  );
}
  teclaPresionada() {
    this.debouncer.next(this.termino);
    this.ticket = this.ticketAux;
    this.ticket = this.ticket.filter((tk) =>
    tk.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}