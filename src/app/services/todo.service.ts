import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  private readonly url = new URL('https://jsonplaceholder.typicode.com/users');

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url.href).pipe(catchError(this.handleError));
  }

  deleteUser(user: User): Observable<User> {
    return this.http
      .delete<User>(`${this.url.href}/${user.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    error.error instanceof ErrorEvent
      ? console.error('🤔 An error occurred:', error.error.message)
      : console.error(
          `🖐️Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  };
}
