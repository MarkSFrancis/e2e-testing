import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingConfig } from './app-routing-config';

@NgModule({
  imports: [AppRoutingConfig],
  exports: [RouterModule]
})
export class AppRoutingModule { }
