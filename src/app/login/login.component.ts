import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserServiceService } from '../core/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { //on implémente OnInit pour pouvoir préciser ce qu'on veut au démarrage

  public loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  public get login(): AbstractControl { //getter magique (on ne met pas () dans la vue)
    return this.loginForm.controls.login; //il renvoit le contôle 'login'
  }

  public get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({ //login et password sont des controles
      login:[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      password:[
        '',
        Validators.compose([
          Validators.required,          
        ])
      ]
    });
  }

  public go(): void {
   if (this.userService.controlUser(this.loginForm.value)) {
     console.log('Hello User');
     
   } else {
     console.log('Je ne te connais pas !');
     //Snackbar to inform user that he is fu** b*st**rd
   }
  }

  public isNotFormValid(): boolean {
    return this.loginForm.invalid;
  }

}
