import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './2.components/header/header.component';
import { NavbarComponent } from './2.components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'jdr-project';
}
