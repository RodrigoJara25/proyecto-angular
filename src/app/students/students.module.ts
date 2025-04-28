import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    FormComponent,
    DialogFormComponent,
    TableComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FormComponent,
    DialogFormComponent,
    TableComponent,
    SidebarComponent,
    ToolbarComponent
  ]
})
export class StudentsModule { }
