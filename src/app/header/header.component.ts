import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/assets/img/Symbol-Spiderman.png" routerLink="/">
        </a>

      <div role="button" class="navbar-burger is-dark" aria-label="menu" aria-expanded="false" data-target="navBarElements" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active')">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>

      </div>

      <!-- menu -->
      <div id="navBarElements" class="navbar-menu">
        <div class="navbar-start">
        <a href="" class="navbar-item" routerLink="/">Home</a>
        <a href="" class="navbar-item" routerLink="/projects">Projects</a>
        <!-- <a href="" class="navbar-item" routerLink="/interests">Interests</a> -->
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
