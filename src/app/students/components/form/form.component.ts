import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../../interfaces/student';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'student-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formGroup: FormGroup;

  // array de Student[]
  students: Student[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      course: 'angular',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@gmail.com',
      course: 'react',
    },
  ];

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<FormComponent>) {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      course: [''],
    });

    // this.dataSource = this.students; // actualizamos el dataSource cada vez que se actualiza el arraya de estudiantes
  }

  submit() {
    //   this.matDialog
    //   .open(DialogComponent, {
    //     data: {
    //       title: 'Confirmación',
    //       content: '¿Estás seguro de que deseas guardar este estudiante?'
    //     }
    // })
    //   .afterClosed()
    //   .subscribe({
    //     next: (confirmed) => {
    //       if (confirmed) {
    //         const student = {
    //           firstName: this.formGroup.value.firstName,
    //           lastName: this.formGroup.value.lastName,
    //           email: this.formGroup.value.email,
    //           course: this.formGroup.value.course,
    //         }
        
    //         // this.students.push(student);
    //         // this.dataSource = this.students;
    //         console.log(student);
        
    //         this.formGroup.reset();
    //       }
    //     }
    //   })
    const student = {
      firstName: this.formGroup.value.firstName,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      course: this.formGroup.value.course,
    }
    console.log(student);
    this.matDialogRef.close();
  }
}
