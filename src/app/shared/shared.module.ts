import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,      // Sidenav
    MatSidenavModule,     // Sidenav
    MatListModule,        // List
    MatIconModule,        // Toolbar
    MatToolbarModule,     // Toolbar
    MatFormFieldModule,   // Tabla
    MatInputModule,       // Tabla
    MatSelectModule,      // Tabla
    ReactiveFormsModule,  // Formulario
  ],
  exports: [
    MatButtonModule,      // Sidenav
    MatSidenavModule,     // Sidenav
    MatListModule,        // List
    MatIconModule,        // Toolbar
    MatToolbarModule,     // Toolbar
    MatFormFieldModule,   // Tabla
    MatInputModule,       // Tabla
    MatSelectModule,      // Tabla
    ReactiveFormsModule,  // Formulario
  ]
})
export class SharedModule { }
