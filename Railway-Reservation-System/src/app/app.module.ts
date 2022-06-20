import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { TraindetailsComponent } from './traindetails/traindetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { FromPipe } from './from.pipe';
import { TOPipe } from './to.pipe';
import{TrainDetailsService} from './train-details.service';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    TraindetailsComponent,
    BookingdetailsComponent,
    FooterComponent,
    SeatSelectionComponent,
    FromPipe,
    TOPipe,
    BookingPaymentComponent,
  
    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [TrainDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
