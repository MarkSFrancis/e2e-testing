import { TestBedHelper } from 'src/specs/TestBedHelper';
import { NavbarComponent } from './navbar.component';

const helper = new TestBedHelper(NavbarComponent);

describe('NavbarComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });

  it('Should have routes', () => {
    const app = helper.component;

    expect(app.links).toBeTruthy();
    expect(app.links.length > 0).toBeTruthy('Missing router links');
  });
});
