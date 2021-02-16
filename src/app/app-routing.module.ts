import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PaymentComponent } from './pages/payment/payment.component';


const routes: Routes = [
  {
    path: '', component: CardDetailsComponent
  },
  {
    path: 'add', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PaymentComponent]
