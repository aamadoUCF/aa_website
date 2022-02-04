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
    <div class="tile is-parent is-10">
      <div class="tile is-child box has-background-grey-dark">
        <p class="title">Welcome to my Website!</p>
        <p>Three Description</p>
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
