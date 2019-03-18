import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getHeading(): Promise<string> {
    const titleElement = element(by.css('h1.display-4'));
    return await titleElement.getText();
  }
}
