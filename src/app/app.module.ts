import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { CardPaymentReducer } from './reducers/card-payment.reducer';

import { AppComponent } from './app.component';
// import { InputsComponent } from './pages/payment/components/inputs/inputs.component'; // may have to be removed.
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    // InputsComponent,
    NavBarComponent,
    routingComponents,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    StoreModule.forRoot({ card: CardPaymentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
