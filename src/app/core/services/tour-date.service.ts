import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


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

}
