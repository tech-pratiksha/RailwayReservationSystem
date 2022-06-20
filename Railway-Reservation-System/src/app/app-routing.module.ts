import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './shared/register/register.component';
import { TraindetailsComponent } from './traindetails/traindetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
 
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'traindetails',component:TraindetailsComponent},
  {path: 'trainbooking',component:BookingdetailsComponent},
  {path:'seat-selection',component:SeatSelectionComponent},
  {path:'payment',component:BookingPaymentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
