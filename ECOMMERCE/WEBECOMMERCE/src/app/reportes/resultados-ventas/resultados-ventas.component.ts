import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReporteVentas, Venta } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-resultados-ventas',
  templateUrl: './resultados-ventas.component.html',
  styleUrls: ['./resultados-ventas.component.css'],
})
export class ResultadosVentasComponent implements OnInit {
  @Input() ventas: Venta[] = [];
  @Input() ventasAux: Venta[] = [];

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  
  reporteVenta: ReporteVentas[] = [];
  termino: string = '';
  displayedColumns: string[] = [
    'cantidad',
    'producto',
    'fecha',
    'tipo',
    'usuario',
  ];
  constructor() {
    this.termino = '';
  }

  ngOnInit(): void {}
  eliminar(venta: Venta) {
    console.log(venta);
  }

  formatoFecha: string = moment(new Date()).format('YYYY-MM-DD HH:mm');

  exportExcel() {
    console.log(this.formatoFecha);
    this.reporteVenta = [];
    for (let venta of this.ventas) {
      this.reporteVenta.push({
        cantidad: venta.cantidad,
        producto: venta.producto,
        fecha: moment(venta.fecha).format('YYYY-MM-DD HH:mm'),
        tipo: venta.tipo,
        usuario: venta.usuario,
      });
    }
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.reporteVenta);
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
    this.ventas = this.ventasAux;
    this.ventas = this.ventas.filter((venta) =>
      venta.producto.toLowerCase().includes(this.termino.toLowerCase())
    );
    console.log(this.termino);
  }
}
