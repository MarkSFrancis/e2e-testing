import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Type } from '@angular/core';
import { TestingModules } from './testing-modules';

export class TestBedHelper<T> {
  constructor(public componentUnderTest: Type<T>, private modules?: any[], private components?: any[]) {
    if (!this.modules) {
      this.modules = TestingModules;
    }
    if (!this.components) {
      this.components = [];
    }

    this.components.push(componentUnderTest);
  }

  public setup() {
    const me = this;
    return async () => {
      TestBed.configureTestingModule({
        imports: me.modules,
        declarations: me.components
      }).compileComponents();

      me.initFixture();
    }
  };

  private _fixture: ComponentFixture<T>;

  get component(): T {
    return this._fixture.debugElement.componentInstance;
  }

  get html(): HTMLElement {
    this._fixture.detectChanges();
    return this._fixture.debugElement.nativeElement;
  }

  private initFixture(): void {
    this._fixture = TestBed.createComponent(this.componentUnderTest);
  }
}
