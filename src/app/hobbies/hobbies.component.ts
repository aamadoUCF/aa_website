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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
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
