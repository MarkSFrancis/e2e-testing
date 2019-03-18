import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const coreAppModule = {
  imports: [
    FormsModule
  ],
  providers: []
};

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...coreAppModule.imports
  ],
  providers: [
    coreAppModule.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
