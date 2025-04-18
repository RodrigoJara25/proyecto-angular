import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'student-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {
  constructor(private matDialog: MatDialog) {}
  openFormDialog(): void {
    const dialogRef = this.matDialog.open(FormComponent, {
      width: '400px',
      // disableClose: true  // opcional: evita que se cierre haciendo clic afuera
    });

    // Si quieres agregar alguna funcion despues de que se cierre el Dialog
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('El formulario fue cerrado', result);
    // });
  }
}
