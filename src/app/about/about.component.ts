import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="tile is-ancestor">
      <div class="tile is-parent">
          <figure class="image">
            <img src="/assets/img/andrew_compressed.jpg">
            <figcaption>UCF - Computer Science - Class of 2021</figcaption>
          </figure>
    <div class="tile is-parent is-10 is-vertical">
      <div class="tile is-child notification is-danger">
        <p class="title">Welcome to my Website!</p>
        <p class="subtitle has-text-warning">⚠️ Please note that this website is under construction ⚠️</p>
        <p class="subtitle">I made this website to learn about front-end development, showcase my past projects, and overall share more about myself.</p>
      </div>

      <div class="tile is-child">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </div>
  `,
  styles: [`
    p
    {
      color: #eee;
    }

    img
    {
      max-width: 100%;
      height: auto;
    }

    figcaption
    {
      text-align: center;
      color: #eee
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
