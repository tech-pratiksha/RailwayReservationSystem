import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterModel } from '../register.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private _http:HttpClient) { }
  loginAPIUrl : string = "https://localhost:7297/api/Login/register";
  // register(registerObj:RegisterModel){
  //   return this._http.post(this.loginAPIUrl,registerObj)
  // }


   login(loginObj:any){
   return this._http.post<any>('${this.loginAPIUrl}login',loginObj)
   }
}
