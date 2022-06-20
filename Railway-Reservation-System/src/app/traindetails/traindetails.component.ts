import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainDetailsService } from '../train-details.service';
import { TrainModel } from '../traindetails.model';

@Component({
  selector: 'app-traindetails',
  templateUrl: './traindetails.component.html',
  styleUrls: ['./traindetails.component.css']
})
export class TraindetailsComponent implements OnInit {
  TrainDetails = new TrainModel();
  submitted: boolean = false;
  fromFilter: string = '';
  toFilter: string = '';
  traindetails$!: Observable<any[]>
  trainDetails!: any;
  constructor(private traindetailservice: TrainDetailsService) { }

  ngOnInit(): void {

    // this.traindetailservice.GetTrainDetails()

    // this.traindetailservice.GetTrainDetails();

    this.getTrainDetails();
  }
  getTrainDetails() {
    this.submitted = true;
    this.traindetailservice.getTrainDetails()
      .subscribe(res => {
        this.TrainDetails = res.trainDetails
      })
  }
}