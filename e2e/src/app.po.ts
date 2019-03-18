import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getTasks(): Promise<string[]> {
    const allTasks = await element.all(by.css('.tasks li'));
    const taskContents: string[] = [];
    for (let task of allTasks) {
      taskContents.push(await task.getText());
    }

    return taskContents;
  }

  async addTask(text: string) {
    const addElement = element(by.css('input[name="new-task-name"]'));
    await addElement.clear();
    await addElement.sendKeys(text);

    const addButtonElement = element(by.css('a.btn-primary'));
    await addButtonElement.click();
  }
}
