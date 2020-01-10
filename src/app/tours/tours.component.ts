import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { TourDateService } from './../core/services/tour-date.service';
import { pipe } from 'rxjs';
import {first } from 'rxjs/operators';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  //Dans chaque classe on définit les attibuts (qu'on utilisera dans la classe avec this.**)

  public shuttleDate: Moment; //on peut utiliser juste "Moment" à condition qu'on importe que le module {Moment} et non pas tout (*) de 'moment'
  public today : moment.Moment; 
  public tours: any[];


  public constructor(public tourDateService: TourDateService) { //on injecte la dépendance à TourDateService
    this.tours = new Array<any>() ; //au moment de l'instanciation, on initialise les attributs
  }

 public ngOnInit(): void{

  //Invoke service to get current shuttleDay
  this.tourDateService.getUtcDate()
  .pipe(
    first()) //first permet de souscrire juste pour un seul résultat (pas les MAJ)  
  .subscribe( //on souscrit à l'observable retourné par getUtcDate()
    (result: any) =>{
      this.today = moment(result.currentDateTime);

      this.shuttleDate = 
      //this.tourDateService.check(
        this.today.clone()
        //)
        ; 

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
    const theDate: moment.Moment = this.shuttleDate.clone(); //on clone la date car on ne peut pas directement la modifier
    //console.log(shuttleDate.getDay())
    this.shuttleDate = this.tourDateService.decrementDate(theDate, this.today);
  }

   public displayNextDate(): void {
    const theDate: moment.Moment = this.shuttleDate.clone();
    this.shuttleDate = this.tourDateService.incrementDate(theDate);
 }


  public isItToday(): boolean {
    return this.shuttleDate.isSame(this.today, 'd');
  }


}
