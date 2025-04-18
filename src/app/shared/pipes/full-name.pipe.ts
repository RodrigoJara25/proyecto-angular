import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: false
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    const result = value.firstName + ' ' + value.lastName;
    if (args[0] === 'uppercase' ) {
      return `${result}`.toUpperCase();
    }
    return result;
  }

}
