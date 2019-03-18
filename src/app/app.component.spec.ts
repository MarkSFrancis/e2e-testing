import { AppComponent } from './app.component';
import { TestBedHelper } from 'src/specs/TestBedHelper';

const helper = new TestBedHelper(AppComponent);

describe('AppComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TODO'`, () => {
    expect(helper.component.title).toEqual('TODO');
  });

  it('should render title in a h1 tag', () => {
    const compiled = helper.html;
    expect(compiled.querySelector('h1').textContent).toContain('TODO List');
  });

  it('should push task onto tasks when adding task', () => {
    helper.component.newTaskName = 'Test Task';
    helper.component.add();

    expect(helper.component.tasks.length).toBe(1);
    expect(helper.component.tasks[0]).toBe('Test Task');
  });

  it('should remove a task from tasks when deleting task', () => {
    helper.component.tasks = ['Test Task', 'Sample'];
    helper.component.delete('Sample');

    expect(helper.component.tasks.length).toBe(1);
    expect(helper.component.tasks[0]).toBe('Test Task');
  });

  it('should remove first matched task from tasks when deleting task', () => {
    helper.component.tasks = ['Test Task', 'Sample', 'Test Task'];
    helper.component.delete('Test Task');

    expect(helper.component.tasks.length).toBe(2);
    expect(helper.component.tasks[0]).toBe('Sample');
  });
});
