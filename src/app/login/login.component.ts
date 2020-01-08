import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { //on implémente OnInit pour pouvoir préciser ce qu'on veut au démarrage

  public loginForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

  public go(): void {}

  public isNotFormValid(): boolean {
    return this.loginForm.invalid;
  }

}
