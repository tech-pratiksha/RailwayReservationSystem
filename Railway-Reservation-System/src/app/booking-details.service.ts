import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingDetails } from './booking-details.model';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  // registerAPIUrl : string = "https://localhost:7297/api/Login/register";

  // constructor(private _http:HttpClient) { }
  // register(registerObj:RegisterModel){
  //   return this._http.post(this.registerAPIUrl,registerObj)



  bookingdetailsAPIUrl : string  = "https://localhost:7297/api/BookingDetails/BookingDetails";
  constructor(private _http:HttpClient) { }
 
 


  
  bookingdetails(bookingObj:BookingDetails){
    return this._http.post(this.bookingdetailsAPIUrl,bookingObj)
  }
}