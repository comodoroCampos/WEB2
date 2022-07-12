import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    DividerModule,
    DataViewModule,
    TableModule,
    ChartModule
 
  ],
  exports: [
    InputMaskModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    DividerModule,
    DataViewModule,
    TableModule,
    ChartModule
   
  ]
})
export class PrimengModule { }
