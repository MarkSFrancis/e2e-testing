import { AppComponent } from './app.component';
import { ComponentTestBed } from 'src/specs/ComponentTestBed';
import { NavbarComponent } from './navbar/navbar.component';

const helper = new ComponentTestBed(AppComponent, undefined, [NavbarComponent]);

describe('AppComponent', () => {
  beforeEach(helper.setup());

  it('should create the app', () => {
    const app = helper.component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'E2E'`, () => {
    expect(helper.component.title).toEqual('E2E');
  });

  it('should render title in a h1 tag', () => {
    const compiled = helper.html;
    expect(compiled.querySelector('h1').textContent).toContain('E2E App');
  });
});
