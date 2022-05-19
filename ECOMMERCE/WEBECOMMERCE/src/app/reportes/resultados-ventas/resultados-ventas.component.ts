import { Component, Input, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';

@Component({
  selector: 'app-resultados-ventas',
  templateUrl: './resultados-ventas.component.html',
  styleUrls: ['./resultados-ventas.component.css'],
})
export class ResultadosVentasComponent implements OnInit {
  @Input() ventas: Venta[] = [];
  @Input() ventasAux: Venta[] = [];

  displayedColumns: string[] = [
    'cantidad',
    'producto',
    'fecha',
    'tipo',
    'usuario',
    'anular'
  ];
  constructor() { }

  ngOnInit(): void { }
  eliminar(venta: Venta) {
    console.log(venta);
  }

  formatoFecha:string = (moment(new Date())).format('YYYY-MM-DD HH:mm');

  exportExcel() {
    console.log(this.formatoFecha);
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.ventas);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
