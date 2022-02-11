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

    <app-project></app-project>

  `,
  styles: [`
  .hero
  {
    background-image: url("/assets/img/background_home.jpg") !important;
    background-size: cover;
    background-position: center center;
    filter: hue-rotate(180deg);
    margin-bottom: 20px;
  }
`
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
