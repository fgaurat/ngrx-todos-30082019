import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosService } from './services/todos.service';
import { mergeMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LoadTodosService {
  loadTodos$ = createEffect( () => this.actions$.pipe(
    ofType('[Todo-list Component] Load'),
    mergeMap( () => this.service.findAll().pipe(
        map(todos => {
          return ( {
            type: '[Todo-list Component] Loaded success',
            payload: todos
          })})
    ))
  ) );


  deleteTodos$ = createEffect( () => this.actions$.pipe(
    ofType('[Todo-list Component] Delete'),
    mergeMap((data:any) => {
      console.log(data.todo);
      return this.service.delete(data.todo).pipe(
        map(() => ({type:'[Todo-list Component] Load'}))
      );
    }),
  ) );




  constructor(private actions$: Actions, private service: TodosService) { }
}
