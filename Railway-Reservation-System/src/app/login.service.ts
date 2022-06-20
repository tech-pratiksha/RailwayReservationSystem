import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginAPIUrl : string = "https://localhost:7297/api/Login/login";

  constructor(private _http : HttpClient) { }
  login(loginObj:LoginModel){
    return this._http.post(this.loginAPIUrl,loginObj)
  }
}
