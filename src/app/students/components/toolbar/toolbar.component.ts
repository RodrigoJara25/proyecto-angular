import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'student-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @Input() drawer!: MatDrawer; 

  userObservable!: Observable<any>;

  constructor() {
    this.userObservable = this.getUser();
  }

  getUser(): Observable<any> {
    return of({
      username: 'Rodrigo Jara',
      role: 'admin',
    }).pipe(
      delay(2000)
    )
  }
}
