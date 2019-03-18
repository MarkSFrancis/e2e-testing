import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  }
];

export const AppRoutingConfig: ModuleWithProviders = RouterModule.forRoot(appRoutes);
