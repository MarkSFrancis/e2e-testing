import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getTasks(): Promise<string[]> {
    console.log('Getting tasks...');
    const allTasks = await element.all(by.css('.tasks li'));

    const taskContents: string[] = [];
    for (let task of allTasks) {
      taskContents.push(await task.getAttribute('task-id'));
    }

    console.log('Loaded tasks');

    return taskContents;
  }

  async removeTask(taskToRemove: string): Promise<any> {
    const taskElement = element(by.css(`li[task-id="${taskToRemove}"]`));
    const removeElement = taskElement.element(by.css('a.btn-danger'));

    await removeElement.click();
  }

  async addTask(text: string): Promise<any> {
    const addElement = element(by.css('input[name="new-task-name"]'));
    await addElement.clear();
    await addElement.sendKeys(text);

    const addButtonElement = element(by.css('a.btn-primary'));
    await addButtonElement.click();
  }
}
