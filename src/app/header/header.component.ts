import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="navbar is-dark">
      <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/assets/img/Symbol-Spiderman.png" routerLink="/">
        </a>
      </div>

      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-start">
        <a href="" class="navbar-item" routerLink="/">Home</a>
        <a href="" class="navbar-item" routerLink="/projects">Projects</a>
        <a href="" class="navbar-item" routerLink="/interests">Interests</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
