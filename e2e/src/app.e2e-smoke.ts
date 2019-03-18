import { AppPage } from './app.po';

describe('E2E Testing - App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should displace welcome in header somewhere', async () => {
    page.navigateTo();

    const heading = await page.getHeading();
    expect(heading ? heading.toLowerCase() : undefined).toContain('welcome')
  });
});
