import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private readonly url = 'https://jsonplaceholder.typicode.com/users'

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.url}/${user.id}`)
  }


}
