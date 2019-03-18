import { Component } from '@angular/core';
import { TodoService } from 'src/services/todo.service';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTaskName = '';

  get hasTasks(): boolean {
    return this.todoService.tasks.length > 0;
  }

  get tasks(): string[] {
    return this.todoService.tasks;
  }

  constructor(public todoService: TodoService) {
  }

  add() {
    this.todoService.add(this.newTaskName);
    this.newTaskName = '';

    return false;
  }

  delete(taskToRemove: string) {
    this.todoService.delete(taskToRemove);

    return false;
  }
}
