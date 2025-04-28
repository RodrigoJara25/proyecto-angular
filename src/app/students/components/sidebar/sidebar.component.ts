import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'student-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = false;
}
