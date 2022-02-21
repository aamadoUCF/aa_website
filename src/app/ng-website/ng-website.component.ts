import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-website',
  template: `
        <section class="section">
        <h1 class="title has-text-white-ter">Personal Website</h1>
          <p class="subtitle has-text-grey-light">Used Angular Framework –  January. 2022 - Present </p>
          <p class="subtitle"><a href="https://github.com/aamados/aamados.github.io" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a></p>

            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">

                <div class="tile is-child">

                  <!-- Semi-detailed description of project -->
                  <p>I have always been interested in front-end development, but I was also just as much intimidated. 
                    It was something I never touched during my classes, but I felt that every software engineer should 
                    have some sort of experience with. Starting was very challenging, as with anything you do for the first time. 
                    With continuous practice, I was beginning to feel like I knew what I was doing.</p>

                  <br>

                  <p>This website was made using the Angular and Bulma frameworks. Bulma is a CSS framework that has many essential 
                    elements and provides easy to use organization for front-end devlopers of all skill levels. </p>

                </div>

                <div class="tile is-child">

                <!-- My contributions to the project -->
                <dl class="has-text-white-ter">
                  <dt>- Used Angular framework for development.</dt>
                  <dt>- Used Bulma as a CSS framework. </dt>
                  <dt>- Used GitHub for version control.</dt>
                  <dt>- Learned fundamentals of front-end development.</dt>
                  <dt>- Deployed to GitHub pages.</dt>
                </dl>

                </div>
              </div>

            </div>
      </section>
  `,
  styles: [`
    a
    {
      color: #33CAFF;
    }
    .center
    {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      margin-bottom: auto;
      max-width: 100%
    }
    .click-logo
    {
      max-width: 2%;
      display: inline-block;
      margin-right: 20px;

    }
    figcaption
    {
      text-align: center;
    }
  `]
})
export class NgWebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
