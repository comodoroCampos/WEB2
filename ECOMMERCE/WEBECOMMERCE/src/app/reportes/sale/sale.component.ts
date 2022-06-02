import { Component, Input, OnInit } from '@angular/core';
import { ReporteSales, Sale } from 'src/app/interfaces/interface';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Input() sale: Sale[] = [];
  @Input() saleAux: Sale[] = [];

  reporteSales: ReporteSales[] = [];

  displayedColumns: string[] = [
    'producto',
    'usuario',
    'monto',
    'estado'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  exportExcel() {
    this.reporteSales = [];
    for (let sale of this.sale) {
      this.reporteSales.push({
        product_id: sale.product_id,
        user_id: sale.user_id,
        amount: sale.amount,
        status: sale.status
      });
    }
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.reporteSales);
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

}
