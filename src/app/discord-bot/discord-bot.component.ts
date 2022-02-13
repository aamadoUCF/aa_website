import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discord-bot',
  template: `
    <section class="section">
        <h1 class="title has-text-white-ter">Discord Manager Bot</h1>
          <p class="subtitle has-text-grey-light">Written in Java –  Oct. 2020 </p>
          <p class="subtitle"><a href="https://github.com/aamados/stormBot" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a></p>

            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                <div class="tile is-child">

                  <!-- Semi-detailed description of project -->
                  <p>This bot was created to manage servers on the popular social network, Discord. 
                    I wanted to tackle a new project, so I decided to dip my toes into making my first bot. 
                    This bot was originally intended for fun use and features a couple of neat commands thus far. 
                    All of this is possible using the Discord JDA API.
                  </p>

                  <br>

                  <p>The bot is an event-driven project where it relies on input from users in a server to have the bot do things. 
                    For example, there is a feature that allows users have the bot send random dog or cat images/gifs. This is made possible 
                    using an API that provides such media. To execute the command, a user must type the command prefix (by default is “.”) and 
                    then the command name. For dog media, use “.dog”. For cat media, use “.cat”.
                    </p>

                </div>

                <div class="tile is-child">

                <!-- My contributions to the project -->
                <dl class="has-text-white-ter">
                  <dt>- Utilized Discord JDA library for this event-driven program.</dt>
                  <dt>- Added essential server and user management features such as role management, kick, ban, and mute.</dt>
                  <dt>- Scraped API responses using GSON API into JSON for retrieving images.</dt>
                  <dt>- Deployed project to Heroku.</dt>
                </dl>

                </div>

              </div>

              <!-- Visual example -->
              <div class="tile is-child">

                <figure>
                  <img src="/assets/img/bot-example.gif" alt="Data Process Overview" class="gif">
                  <figcaption class="has-text-white-ter">Example of Dog and Cat commands.</figcaption>
                </figure>

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
      width:50%;
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
    .gif
    {
      width: 75%;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class DiscordBotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
