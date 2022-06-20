import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../login.model';
import { LoginService } from '../login.service';
import { RegisterModel } from '../register.model';
import { RegisterService } from '../register.service';
import { UserService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginObj = new LoginModel();
  submitted: boolean = false;
  constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      EmailId: [''],
      Password: ['']
    })
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginObj.EmailId = this.loginForm.value.EmailId;
    this.loginObj.Password = this.loginForm.value.Password;
    this.loginservice.login(this.loginForm.value)
      .subscribe(res => {
        //alert(res.message);
        //this.loginForm.reset();
        this.router.navigate(['/traindetails'])
      })
  }

}