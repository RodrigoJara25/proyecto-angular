import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../interfaces/student';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../../core/services/courses.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'student-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  formGroup: FormGroup;
  courseNames!: string[];

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<FormComponent>, private courseService: CourseService) {
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      course: ['', [Validators.required]],
    });

    // Nos suscribimos a un observable
    this.courseService.getCoursesTitles()
    this.courseService.coursesTitles$
    .pipe(
      filter((courses)=> courses.length > 0),                       // verificamos que hayan courses 
      map((courses)=>courses.map((course)=>course.toUpperCase())),   // mostramos los cursos en mayuscula
      map((courses)=> courses.sort((a,b)=>a.localeCompare(b))),      // Ordenamos alfabeticamente
    )
    .subscribe((courses)=>{
      console.log(courses);
      this.courseNames = courses;
    })
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
      note: this.formGroup.value.note,
    }
    console.log(student);
    this.matDialogRef.close();
  }

  get firstName() {
    return this.formGroup.get('firstName');
  }

  get isFirstNameInvalid() {
    return this.firstName?.touched && this.firstName?.invalid;
  }

  get lastName() {
    return this.formGroup.get('lastName');
  }

  get isLastNameInvalid() {
    return this.lastName?.dirty && this.lastName?.invalid;
  }

  get email() {
    return this.formGroup.get('email');
  }

  get isEmailInvalid() {
    return this.email?.dirty && this.email?.invalid;
  }

  get course() {
    return this.formGroup.get('course');
  }

  get isCourseInvalid() {
    return this.course?.touched && this.course.invalid; 
  }
}
