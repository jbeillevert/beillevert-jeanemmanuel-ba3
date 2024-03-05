import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './1.pages/home-page/home-page.component';
import { BasketPageComponent } from './1.pages/basket-page/basket-page.component';
import { CheckoutPageComponent } from './1.pages/checkout-page/checkout-page.component';


export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "panier", component: BasketPageComponent },
    { path: "paiement", component: CheckoutPageComponent },
    { path: "*", redirectTo: "" },
];

