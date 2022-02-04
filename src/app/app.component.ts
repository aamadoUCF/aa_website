import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--header-->
    <app-header></app-header>

    <router-outlet></router-outlet>

    <!--footer-->
    <app-footer></app-footer> 
   `,
  styles: [`
    body
    {
      background-color: black;
    }
  `]
})
export class AppComponent {
  title = 'aa_website';
}

