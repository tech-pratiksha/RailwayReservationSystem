import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainDetailsService {
  TrainDetailsAPIUrl : string = "https://localhost:7297/api/TrainDetails/TrainDetails";

  constructor(private httpclient:HttpClient) { }
  // GetTrainDetails():Observable<any[]>
  // {
  //   return this.httpclient.get<any[]>(this.TrainDetailsAPIUrl);
   
    
  // }
  getTrainDetails()
  {
    return this.httpclient.get<any>(this.TrainDetailsAPIUrl)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }
}
