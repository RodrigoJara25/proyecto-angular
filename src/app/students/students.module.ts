import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    FormComponent,
    DialogFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FormComponent,
    DialogFormComponent,
  ]
})
export class StudentsModule { }
