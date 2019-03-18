import { WelcomeComponent } from './welcome.component';
import { TestBedHelper } from 'src/specs/TestBedHelper';

const helper = new TestBedHelper(WelcomeComponent);

describe('WelcomeComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });
});
