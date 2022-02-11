import { Component } from '@angular/core';
import {
  fader
} from './route-animations'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <!--header-->
    <app-header></app-header>

    <div [@routeAnimations]="prepareRoute(outlet)" >
      <router-outlet #outlet="outlet"></router-outlet>
    </div>

    <!--footer-->
    <app-footer></app-footer> 
   `,
  styles: [`
    body
    {
      background-color: black;
    }
  `],
  animations: [
    fader
  ]    
})

export class AppComponent {
  title = 'aa_website';

  prepareRoute(outlet: RouterOutlet)
  {
    return  outlet.activatedRouteData['animation']
  }
}

