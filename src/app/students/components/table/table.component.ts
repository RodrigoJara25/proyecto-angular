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
      note: 17,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@gmail.com',
      course: 'react',
      note: 12,
    },
  ];

  // componentes de la tabla
  displayedColumns: string[] = [
    'firstName',
    'email',
    'course',
    'note'
  ];

  dataSource: Student[] = [];

  constructor() {
    this.dataSource = this.students;
  }
}
