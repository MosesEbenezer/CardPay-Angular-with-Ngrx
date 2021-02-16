import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { CardPaymentReducer } from './reducers/card-payment.reducer';

import { AppComponent } from './app.component';
import { InputsComponent } from './pages/payment/components/inputs/inputs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    NavBarComponent,
    routingComponents,
    CardDetailsComponent
  ],
  // exports: [ MatFormFieldModule, MatInputModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({ card: CardPaymentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
