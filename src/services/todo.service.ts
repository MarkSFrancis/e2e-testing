import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  tasks: string[] = [];

  add(newTask: string): TodoService {
    this.tasks.push(newTask);
    return this;
  }

  delete(taskToRemove: string): TodoService {
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

    return this;
  }
}
