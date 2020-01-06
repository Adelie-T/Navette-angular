import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle = 'Navette';
  public PreviousDateSelector = '<<';
  public NextDateSelector ='>>';
  public shuttleDate: moment.Moment = moment();
  public tours: any[];
 

  public constructor() {
    this.tours = new Array<any>() ;
  }

  public ngOnInit(): void{
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

  }

  public displayPreviousDate(): void {
    const shuttleDate: moment.Moment = this.shuttleDate.clone(); //on clone la date car on ne peut pas directement la modifier
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
