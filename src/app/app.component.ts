import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle = 'navette';
  public options: string[];
  public option: string; 

  public constructor() {
    this.options = new Array<string>() ;

  }

  public ngOnInit(): void{
    this.options.push('Accueil');
    this.options.push('Navette');
    this.options.push('Mon compte');
    this.options.push('Contact');
  }

  public addOption(): void {
    if (!this.checkOption()) {
      this.options.push(this.option);
    }         
  }

  public checkOption(): boolean {
    return !(this.option && this.option.trim().length > 0);
  }

}
