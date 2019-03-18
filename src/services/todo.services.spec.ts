import { TodoService } from './todo.service';
import { ServiceTestBed } from '../specs/ServiceTestBed';

const helper = new ServiceTestBed<TodoService>(TodoService);
describe('TodoService', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.service;
    expect(app).toBeTruthy();
  });

  it('should push task onto tasks when adding task', () => {
    helper.service.add('Test Task');

    expect(helper.service.tasks.length).toBe(1);
    expect(helper.service.tasks[0]).toBe('Test Task');
  });

  it('should remove a task from tasks when deleting task', () => {
    helper.service.tasks = ['Test Task', 'Sample'];
    helper.service.delete('Sample');

    expect(helper.service.tasks.length).toBe(1);
    expect(helper.service.tasks[0]).toBe('Test Task');
  });

  it('should remove first matched task from tasks when deleting task', () => {
    helper.service.tasks = ['Test Task', 'Sample', 'Test Task'];
    helper.service.delete('Test Task');

    expect(helper.service.tasks.length).toBe(2);
    expect(helper.service.tasks[0]).toBe('Sample');
  });
});
