import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Course } from "../../courses/interfaces/Couse";

@Injectable({
    providedIn: 'root',
})
export class CourseService {

    // Creamos el DataSubject
    private coursesSubject = new BehaviorSubject<Course[]>([]);
    // Creamos el Observable
    courses$ = this.coursesSubject.asObservable();

    // Creamos otro observable para los nombres de los cursos
    private coursesTitlesSubject = new BehaviorSubject<string[]>([]);
    coursesTitles$ = this.coursesTitlesSubject.asObservable();

    // Fuente de datos (array de cursos)
    private _courses: Course[] = [
        {
            title: 'Angular',
            description: 'Angular es un framework para construir aplicaciones web',
        },
        {
            title: 'React',
            description: 'React es una libreria para construir interfaces de usuario',
        },
        {
            title: 'Vue',
            description: 'Vue es una libreria para construir interfaces de usuario',
        },
        {
            title: 'Svelte',
            description: 'Svelte es una libreria para construir interfaces de usuario',
        },
    ];

    getCourses(): void {
        // No se puede usar el observable para enviiar ifnormacion, ya que los observable solo escuchan la informacion
        // this.dataSubject.next(this._courses);
        this.coursesSubject.next(this._courses);
    }

    getCoursesTitles(): void {
        const names = this._courses.map((course)=>course.title);
        this.coursesTitlesSubject.next(names);
    }

    addCourse(course: Course): void {
        this._courses = [...this._courses, course];
        this.coursesSubject.next(this._courses);
        this.coursesTitlesSubject.next(this._courses.map((course)=> course.title));
    }
}