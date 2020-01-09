import { Injectable } from '@angular/core';

// on crée une interface pour définir un genre pour user (constitué de login + password)
export interface IUser {
  login : '',
  password:'',
  
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private user: IUser = null;

  private readonly users : any[] = [ //on crée un attribut qui contient un tableau d'objets JSON qui contiennent 
    {login : 'tototo', password: 'tototo'},
    {login : 'tititi', password: 'tititi'}
  ];

  constructor() { }

  public controlUser(user : any): boolean {
    console.log(`User passed : ${JSON.stringify(user)}`);

    let isAuthenticated: boolean = false;

    //Loop over users to find user
    this.users.forEach((storedUser : any) => {
      if (storedUser.login === user.login && storedUser.password === user.password) {
        //C'est bon, j'ai trouvé un user
        isAuthenticated = true;
      }
    });

    return isAuthenticated;
  }

  public isAuthenticated(): boolean {
    return this.user && this.user != null;
  }
}
