import { Component } from '@angular/core';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'student-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  // array de Student[]
  students: Student[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      course: 'angular',
      createdAt: new Date(2024, 1, 25),
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@gmail.com',
      course: 'react',
    }
  ];

  // componentes de la tabla
  displayedColumns: string[] = [
    'firstName',
    'email',
    'course',
    'createdAt'
  ];

  dataSource: Student[] = [];

  constructor() {
    this.dataSource = this.students;
  }
}
