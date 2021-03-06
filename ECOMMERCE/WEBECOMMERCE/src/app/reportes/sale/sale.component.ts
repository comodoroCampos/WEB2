import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReporteSales, Sale } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';
import { VentaCompleta } from '../../interfaces/interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Input() sale: VentaCompleta[] = [];
  @Input() saleAux: VentaCompleta[] = [];

  

  displayedColumns: string[] = [
    'producto',
    'usuario',
    'monto',
    'estado',
    'fecha'
  ];

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';
  constructor() {
    this.termino = '';
  }

  ngOnInit(): void {
  }

  exportExcel() {


    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.sale);
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
    this.sale = this.saleAux;
    this.sale = this.sale.filter((sl) =>
      sl.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
    console.log(this.termino);
  }

}
