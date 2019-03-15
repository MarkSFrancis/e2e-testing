import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add task when button clicked', async () => {
    page.navigateTo();
    await page.addTask('Sample Task');
    const tasks = await page.getTasks();
    expect(tasks.length > 0).toBeTruthy();
    expect(tasks[0]).toBe('Sample Task');
  });
});
