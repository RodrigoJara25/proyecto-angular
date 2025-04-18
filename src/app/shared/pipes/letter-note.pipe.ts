import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterNote',
  standalone: false
})
export class LetterNotePipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 18 && value <= 20) {
      return 'AD';
    } else if (value >= 16 && value <= 17) {
      return 'A';
    } else if (value >= 13 && value <= 15) {
      return 'B';
    } else if (value >= 11 && value <= 12) {
      return 'C';
    } else {
      return 'F';
    }
  }
}
