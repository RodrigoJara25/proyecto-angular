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
import {MatTableModule} from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { LetterNotePipe } from './pipes/letter-note.pipe';
import { FontSizeDirective } from './directives/font-size.directive';

@NgModule({
  declarations: [
  
    FullNamePipe,
        LetterNotePipe,
        FontSizeDirective
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
    MatTableModule,       // Tabla
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
    MatTableModule,       // Tabla
    FullNamePipe,         // FullName Pipe
    LetterNotePipe,       // letterNote Pipe
    FontSizeDirective,    // FontSize Directive
  ]
})
export class SharedModule { }
