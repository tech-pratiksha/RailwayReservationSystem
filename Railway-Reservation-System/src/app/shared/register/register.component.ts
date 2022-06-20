import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/register.model';
import { RegisterService } from 'src/app/register.service';
import { UserService } from '../api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm : FormGroup
submitted : boolean = false;
  // public registerForm !: FormGroup
  // public registerObj = new RegisterModel();
  constructor(private FormBuilder : FormBuilder, private http : HttpClient, private router : Router, private registerservice : RegisterService ) { }

  ngOnInit(): void {
    this.registerForm = this.FormBuilder.group({
      // PassengerId:new FormControl("", Validators.required),
      FirstName:new FormControl("", Validators.required),
      LastName:new FormControl("", Validators.required),
      EmailId:new FormControl("", Validators.required),
      Password:new FormControl("", Validators.required),
      Gender:new FormControl("", Validators.required),
      Age:new FormControl("", Validators.required),
      MobileNumber:new FormControl("", Validators.required)
    })
  }

  // this.registerObj.PassengerId = this.registerForm.value.myPassengerId;
  // this.registerObj.FirstName = this.registerForm.value.myFirstName;
  // this.registerObj.LastName = this.registerForm.value.myLastName;
  // this.registerObj.EmailId = this.registerForm.value.myEmail;
  // this.registerObj.Password = this.registerForm.value.myPassword;
  // this.registerObj.Gender = this.registerForm.value.myGender;
  // this.registerObj.Age = this.registerForm.value.myAge
  // this.registerObj.MobileNumber = this.registerForm.value.myPhoneNumber;
  register(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  this.registerservice.register(this.registerForm.value)
  .subscribe(data=>{
    // alert(res.message);
    // this.registerForm.reset();
    this.router.navigate(['/login'])
    // console.log(this.registerForm);
  })
}
}
