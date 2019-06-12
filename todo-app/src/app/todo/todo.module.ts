import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosComponent]
})
export class TodoModule { }
