import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section class="hero is-link is-bold">
      <div class="hero-body">
        <p class="title">
          Projects
        </p>
        <p class="subtitle">
          My notable programming projects.
        </p>
      </div>
    </section>
  `,
  styles: [`
  .hero
  {
    background-image: url("/assets/img/background_home.jpg") !important;
    background-size: cover;
    background-position: center center;
    filter: hue-rotate(180deg)
  }
`
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
