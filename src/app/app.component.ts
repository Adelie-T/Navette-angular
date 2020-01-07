import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TourDateService } from './core/services/tour-date.service';
import { pipe } from 'rxjs';
import {first } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle = 'navette';
  public shuttleDate: moment.Moment; 
  public today : moment.Moment; 
  public tours: any[];
   

  public constructor(private tourDateService: TourDateService) {
    this.tours = new Array<any>() ;
  }

 

  public ngOnInit(): void{

  //Invoke service to get current shuttleDay
  this.tourDateService.getUtcDate()
  .pipe(
    first()) //first permet de souscrire juste pour un seul résultat (pas les MAJ)  
  .subscribe( //on souscrit à l'observable retourné par getUtcDate()
    (result: any) =>{
      this.today = moment(result.currentDateTime);

      this.shuttleDate = this.today.clone();

    console.log('Go !');
    this.tours.push(
      {
        hour: '08:00',
        availablePlaces : 8
      }
    )
    this.tours.push(
      {
        hour: '11:00',
        availablePlaces : 5
      }
    )
    this.tours.push(
      {
        hour: '14:00',
        availablePlaces : 3
      }
    )
    this.tours.push(
      {
        hour: '17:00',
        availablePlaces : 0
      }
    )
  });
  }

  public displayPreviousDate(): void {
    const shuttleDate: moment.Moment = this.shuttleDate.clone(); //on clone la date car on ne peut pas directement la modifier
    //console.log(shuttleDate.getDay())
    shuttleDate.subtract(1, 'd');

    this.shuttleDate = shuttleDate; 
  }

  public displayNextDate(): void {
    const shuttleDate: moment.Moment = this.shuttleDate.clone();
    shuttleDate.add(1, 'd');

    this.shuttleDate = shuttleDate;
  }

  public isItToday(): boolean{
    return this.shuttleDate.isSame(moment(), 'd');
  }

}
