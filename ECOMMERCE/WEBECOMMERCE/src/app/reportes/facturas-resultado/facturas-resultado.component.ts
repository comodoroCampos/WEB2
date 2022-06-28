import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FacturaElement, FacturaReporte } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';


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
      const reporte:FacturaReporte[]=[]
      for (const fc of this.facturas) {
        const f:FacturaReporte={
          folio: fc.nro_bill,
          monto: fc.bill_amount,
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
    this.facturas = this.facturasAux;
    this.facturas = this.facturas.filter((factura) =>
    factura.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}
