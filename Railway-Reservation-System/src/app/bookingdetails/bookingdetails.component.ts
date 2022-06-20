import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDetailsService } from '../booking-details.service';
import { FromPipe } from '../from.pipe';
import { TOPipe } from '../to.pipe';
@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
registerForm : FormGroup
submitted : boolean = false;
  constructor(public service: BookingDetailsService ,private router:Router, private http : HttpClient, private FormBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      // PassengerId:new FormControl("", Validators.required),
      TravellingFrom:new FormControl("", Validators.required),
      TravellingTo:new FormControl("", Validators.required),
      DepartureDate:new FormControl("", Validators.required),
      ReturningDate:new FormControl("", Validators.required),
      Adults:new FormControl("", Validators.required),
      Children:new FormControl("", Validators.required)
    })
  }
  bookingdetails(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  this.service.bookingdetails(this.registerForm.value)
  .subscribe(data=>{
    // alert(res.message);
    // this.registerForm.reset();
    this.router.navigate(['/seat-selection'])
    // console.log(this.registerForm);
  })
}
}