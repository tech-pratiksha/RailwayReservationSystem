import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { RegisterModel } from './register.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
registerAPIUrl : string = "https://localhost:7297/api/Login/register";

  constructor(private _http:HttpClient) { }
  register(registerObj:RegisterModel){
    return this._http.post(this.registerAPIUrl,registerObj)
  }


  
}
