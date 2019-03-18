import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO';

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
