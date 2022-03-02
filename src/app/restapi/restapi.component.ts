import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restapi',
  template: `
  <section class="section">
  <h1 class="title has-text-white-ter">REST API</h1>
    <p class="subtitle has-text-grey-light">Written in JavaScript –  Oct. 2020 - Nov. 2020</p>
    <p class="subtitle"><a href="https://github.com/COP4331C-Fall2020-Group8/Greymatter-API" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a></p>

      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">

          <div class="tile is-child">

            <!-- Semi-detailed description of project -->
            <p>This project was made in part of a group assignment for Processes for Object-Oriented Software Development (COP 4331).
              Our project was named GreyMatter and was a website for studying. The main feature of the website was to create flashcards which could be 
              organized into a set along with a description and title for each set. Myself and another team member were in charge of creating API endpoints for the website. 
              We used MongoDB as data storage and had it linked to our API endpoints. 
            </p>

            <br>

            <p>Some of these endpoints include: </p>
            <ul>
              <li>- addSet</li>
              <li>- updateSet</li>
              <li>- addCard</li>
              <li>- updateCard</li>
              <li>- getSetID</li>
              <li>- login</li>
              <li>- register</li>
            </ul>

          </div>

          <div class="tile is-child">

          <!-- My contributions to the project -->
          <dl class="has-text-white-ter">
            <dt>- Used JavaScript for development</dt>
            <dt>- Took suggestions from front-end and adapted endpoints to best fit their needs.</dt>
            <dt>- Used GitHub for version control.</dt>
            <dt>- Documented HTTP status codes for each endpoint.</dt>
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
    ul
    {
      columns: 2;
      color: #eee;
    }
  `]
})
export class RestapiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
