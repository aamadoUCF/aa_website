import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <p class="title">
          Interests
        </p>
        <p class="subtitle">
          Interests, hobbies, and facts about myself.
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
      filter: hue-rotate(135deg);
      margin-bottom: 20px;
    }
  `]
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
