import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  declarations: [TodosComponent, TodoComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodosComponent]
})
export class TodoModule { }
