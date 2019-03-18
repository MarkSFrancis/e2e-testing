import { WelcomeComponent } from './welcome.component';
import { ComponentTestBed } from 'src/specs/ComponentTestBed';

const helper = new ComponentTestBed(WelcomeComponent);

describe('WelcomeComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });
});
