import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    FormComponent,
    DialogFormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FormComponent,
    DialogFormComponent,
    TableComponent,
  ]
})
export class StudentsModule { }
