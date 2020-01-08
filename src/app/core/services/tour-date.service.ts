import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class TourDateService {

  constructor( 
    //Dans l'attibut "httpClient" on injecte une dépendance du service "HttpClient"
    private httpClient: HttpClient
    ) { }

  public getUtcDate(): Observable<any> {
    return this.httpClient.get<any>( //on interroge l'API (backend) avec la méthode GET
      environment.worldClockApiRoot //adresse de l'API (serveur)
    );
  }

      
  public displayNextDate( shuttleDate: moment.Moment): moment.Moment {
    const theDate: moment.Moment = shuttleDate.clone().add(1, 'd'); //on clone la date car on ne peut pas directement la modifier
    return this.check(theDate);
  } 

  // public displayPreviousDate(shuttleDate: moment.Moment): moment.Moment {
  //   const theDate: moment.Moment = shuttleDate.clone(); //on clone la date car on ne peut pas directement la modifier
  //   return theDate.isSame(today, 'd') ? theDate : this.check(theDate.subtract(1, 'd'), false); 
  // }



  private check(date : moment.Moment, increment: boolean = true) : moment.Moment { //increment est un paramètre optionnel qui s'il n'est pas passé vaudra true
    const dateToCheck: moment.Moment = date.clone();

    if (dateToCheck.isoWeekday() === 6 || dateToCheck.isoWeekday() === 7) {
      let offset: number = 8 - dateToCheck.isoWeekday(); 
      if (!increment){
        offset = (offset + 1) * -1;
      }
      return dateToCheck.add(offset, 'd');        
    }
    return dateToCheck;
  }

}
