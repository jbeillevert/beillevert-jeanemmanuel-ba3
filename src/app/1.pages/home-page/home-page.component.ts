import { Component } from '@angular/core';
import { DataDisplayComponent } from '../../3.articles/data-display/data-display.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DataDisplayComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
