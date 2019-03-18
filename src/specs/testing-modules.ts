import { RouterTestingModule } from '@angular/router/testing';
import { coreAppModule } from 'src/app/app.module';

export const TestingModules = [
  RouterTestingModule,
  ...coreAppModule.imports
]
