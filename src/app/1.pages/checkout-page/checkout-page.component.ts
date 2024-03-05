import { Component } from '@angular/core';
import { CheckoutComponent } from '../../2.components/checkout/checkout.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CheckoutComponent],
  templateUrl: './checkout-page.component.html',
})
export class CheckoutPageComponent {

}
