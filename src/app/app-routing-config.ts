import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
    data: {
      text: 'Home'
    }
  },
  {
    path: 'todo',
    component: TodoListComponent,
    data: {
      text: 'Todo'
    }
  }
];

export const AppRoutingConfig: ModuleWithProviders = RouterModule.forRoot(appRoutes);
