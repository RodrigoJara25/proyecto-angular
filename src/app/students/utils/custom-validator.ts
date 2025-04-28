import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime, switchMap } from 'rxjs/operators';
import { CourseService } from '../../core/services/courses.service';

export function courseExistsAsyncValidator(courseService: CourseService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.value) {
            return of(null);  // Si no hay valor, no hay error
        }

        return courseService.coursesTitles$.pipe(
            debounceTime(300),  // Para evitar llamadas rápidas consecutivas
            switchMap(titles => {
                const courseExists = titles.includes(control.value);  // Verificamos si el curso ya existe
                return courseExists ? of({ courseExists: true }) : of(null);  // Si existe, retornamos el error, si no, null
            }),
            catchError(() => of(null))  // Si hay error, retornamos null de manera segura
        );
    };
}
