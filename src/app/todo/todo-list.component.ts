import { Component } from '@angular/core';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTaskName = '';

  add() {
    this.tasks.push(this.newTaskName);
    this.newTaskName = '';

    return false;
  }

  delete(taskToRemove: string) {
    let found = false;
    this.tasks = this.tasks.filter(t => {
      if (found) {
        return true;
      }

      if (t === taskToRemove) {
        found = true;
        return false;
      }

      return true;
    });
  }
}
