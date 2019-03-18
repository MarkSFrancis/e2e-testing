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

  addTask() {
    this.tasks.push(this.newTaskName);
    this.newTaskName = '';

    return false;
  }
}
