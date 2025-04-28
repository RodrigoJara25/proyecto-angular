import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-angular';
  showFiller = false;

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


