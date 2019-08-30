import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url_todos);
  }

  delete(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete(url);
  }

  add(todo: Todo): Observable<any> {
    return this.http.post<any>(environment.url_todos, todo, this.httpOptions);
  }

}
