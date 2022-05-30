import { Component, Input, OnInit } from '@angular/core';
import { Producto, ProductoDuoc, ReporteProductosDuoc } from '../../interfaces/interface';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {

  @Input() productoDuoc: ProductoDuoc[] = [];
  @Input() productoDuocAux: ProductoDuoc[] = [];

  reporteProductosDuoc: ReporteProductosDuoc[] = [];

  displayedColumns: string[] = [
    'nombre',
    'precio',
    'cantidad',
    'descripcion'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  exportExcel() {
    this.reporteProductosDuoc = [];
    for (let producto of this.productoDuoc) {
      this.reporteProductosDuoc.push({
        name: producto.name,
        price: producto.price,
        description: producto.description,
        quantity: producto.quantity
      });
    }
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.reporteProductosDuoc);
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
