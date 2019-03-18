import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestingModules } from './testing-modules';
import { coreAppModule } from 'src/app/app.module';

export class ServiceTestBed<T> {
  providers: any[];

  constructor(public serviceUnderTest: Type<T>, private modules?: any[]) {
    if (!this.modules) {
      this.modules = TestingModules;
    }

    this.providers = coreAppModule.providers;

    this.providers.push(serviceUnderTest);
  }

  public setup() {
    const me = this;
    return async () => {
      TestBed.configureTestingModule({
        imports: me.modules,
        providers: me.providers
      });
    }
  };

  get service(): T {
    return TestBed.get(this.serviceUnderTest);
  }
}
