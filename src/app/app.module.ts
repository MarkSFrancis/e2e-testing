import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TypeDecorator } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const coreAppModule = {
  imports: [
    FormsModule
  ],
  providers: []
};

@NgModule({
  declarations: [
    AppComponent
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
