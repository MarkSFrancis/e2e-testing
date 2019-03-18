import { TodoPage } from './todo.po';

describe('E2E Testing - Todo', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should add task when button clicked', async () => {
    page.navigateTo();

    await page.addTask('Sample Task');

    const tasks = await page.getTasks();
    expect(tasks.length > 0).toBeTruthy('Tasks array was empty after adding new task');
    expect(tasks[0]).toBe('Sample Task');
  });

  it('should remove task when button clicked', async () => {
    page.navigateTo();
    await page.addTask('Sample Task');

    await page.removeTask('Sample Task');

    const tasks = await page.getTasks();
    expect(tasks.length === 0).toBeTruthy('Tasks array was not empty after removing last task');
  });

  it('should show placeholder when no tasks are present', async () => {
    page.navigateTo();
    const hasText = await page.tasksHasTextInsteadOfTasks();
    expect(hasText).toBeTruthy('Missing card-text when no tasks are present')
  });
});
