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
        private httpClient: HttpClient //Dans l'attibut "httpClient" on injecte une dépendance du service "HttpClient"
    ) { }

  public getUtcDate(): Observable<any> {
    return this.httpClient.get<any>( //on interroge l'API (backend) avec la méthode GET
      environment.worldClockApiRoot //adresse de l'API (serveur)
    );
  }

      
  public incrementDate( shuttleDate: moment.Moment): moment.Moment {
    const theDate: moment.Moment = shuttleDate.clone().add(1, 'd'); //on clone la date car on ne peut pas directement la modifier
    return this.check(theDate);
  } 

  
  public decrementDate(shuttleDate: moment.Moment, today : moment.Moment): moment.Moment {
    const theDate: moment.Moment = shuttleDate.clone();
    return theDate.isSame(today, 'd') ? theDate : this.check(theDate.subtract(1, 'd'), false); //pas compris 
    
    if (theDate.isSame(today, 'd')) {
      return theDate;
    } else {
      return this.check(theDate.subtract(1, 'd'), false);
    }
  }

  private check(date : moment.Moment, increment: boolean = true) : moment.Moment { //increment est un paramètre optionnel qui s'il n'est pas passé vaudra true
    const dateToCheck: moment.Moment = date.clone();

    if (dateToCheck.isoWeekday() === 6 || dateToCheck.isoWeekday() === 7) {
      let offset: number = 8 - dateToCheck.isoWeekday(); //on calcul de combien de jours il faut ajouter/retirer pour ne pas tomber sur un we
      if (!increment){ 
        offset = (offset + 1) * -1;
      }
      return dateToCheck.add(offset, 'd');        
    }
    return dateToCheck;
  }

}
