import { TodoListComponent } from './todo-list.component';
import { ComponentTestBed } from 'src/specs/ComponentTestBed';

const helper = new ComponentTestBed(TodoListComponent);

describe('TodoListComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });

  it('should push task onto tasks when adding task', () => {
    helper.component.newTaskName = 'Test Task';
    helper.component.add();

    expect(helper.component.tasks.length).toBe(1);
    expect(helper.component.tasks[0]).toBe('Test Task');
  });

  it('should remove a task from tasks when deleting task', () => {
    helper.component.todoService.tasks = ['Test Task', 'Sample'];
    helper.component.delete('Sample');

    expect(helper.component.tasks.length).toBe(1);
    expect(helper.component.tasks[0]).toBe('Test Task');
  });
});
