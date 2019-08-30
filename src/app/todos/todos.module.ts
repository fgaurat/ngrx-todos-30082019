import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosTableComponent } from './todos-table/todos-table.component';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TodosTableComponent, TodoFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    TodosTableComponent
  ]
})
export class TodosModule { }
