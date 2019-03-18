import { Component } from '@angular/core';
import { appRoutes } from '../app-routing-config';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  selector: 'app-navbar'
})
export class NavbarComponent {
  links = appRoutes;
}
