import { Injectable } from '@angular/core';

// on crée une interface pour définir un genre pour user (constitué de login + password)
export interface IUser {
  login : string,
  password: string,
  isUp?: boolean,
}

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  private user: IUser = null;

  private readonly users : IUser[] = [ //on crée un attribut qui contient un tableau d'objets JSON qui contiennent 
    {login : 'tototo', password: 'tototo', isUp: false},
    {login : 'tititi', password: 'tititi', isUp : false}
  ];

  constructor() { }

  //où est-ce utilisé?
  public controlUser(user : any): boolean {
    console.log(`User passed : ${JSON.stringify(user)}`);


    let isAuthenticated: boolean = false;

    //Loop over users to find user
    this.users.forEach((storedUser : any) => {
      if (storedUser.login === user.login && storedUser.password === user.password) {
        //C'est bon, j'ai trouvé un user
        isAuthenticated = true;
        this.user = user;
        this.user.isUp = true;
      }
    });

    return isAuthenticated;
  }

  public isAuthenticated(): boolean {
    return this.user && this.user != null;
  }

  //pas compris : 
  public getUser(): Promise<any> | any {
    if (this.user) {
      return this.user;
    }

    return new Promise<any>((resolve) => {
      const user: string = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
        resolve(this.user);
      } else {
        resolve(null);
      }
    });
  }

  public registerUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
}
