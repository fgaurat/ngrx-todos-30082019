import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, merge } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadTodo, deleteTodo } from '../todos.actions';


@Component({
  selector: 'atos-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css']
})
export class TodosTableComponent implements OnInit {



  todos$: Observable<Todo[]>;
  displayedColumns: string[] = ['id-col', 'title-col', 'buttons-col'];

  constructor(private store: Store<any>) {

    this.todos$ = store.select(state => state.allTodos.todos);

  }

  ngOnInit() {
    this.store.dispatch(loadTodo());
  }


  doDelete(todo: Todo) {
    this.store.dispatch(deleteTodo({todo}));
  }

}
