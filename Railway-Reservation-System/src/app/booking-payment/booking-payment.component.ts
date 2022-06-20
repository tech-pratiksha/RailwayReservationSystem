import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDetailService } from '../payment-detail.service';
@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css']
})
export class BookingPaymentComponent implements OnInit {


  constructor(public service: PaymentDetailService ,private router:Router,) { }

  ngOnInit(): void {
    
    }
    onSubmit(form:NgForm){
      this.service.postPaymentDetail().subscribe(
        res=>{
          this.router.navigate(['/ticket'])
        },
        err=>
        {console.log(err);}
      );
    }

  }