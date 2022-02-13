import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minecraft-data',
  template: `
    <section class="section">
        <h1 class="title has-text-white-ter">Minecraft Player Data Collecter</h1>
          <p class="subtitle has-text-grey-light">Written in Java –  Aug. 2021 - Nov. 2021 </p>
          <p class="subtitle"><a href="https://github.com/austinconnor/MinecraftCollab/tree/Data-Plugin" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a>
                              <a href="https://minecraftcollab.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/heapcraftLogo.png" alt="" class="click-logo"></a></p>

            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">

                <div class="tile is-child">

                  <!-- Semi-detailed description of project -->
                  <p>This project was made in part of a bigger project, <a href="https://minecraftcollab.com/">Measuring Collaboration in Minecraft</a>, my Senior Design project.
                  It acted as the project's core as all other aspects of the assignment relied on the data being present. 
                  Throughout the duration of this project, I led both the Software Development and Back-End teams, meaning I oversaw the progress, development, and implementation
                  of this program. </p>

                  <br>

                  <p>As players perform specific actions in a Minecraft server, data simultaneously is recorded and formatted in JSON. All recorded events contained generic data, however
                      depending on which event was recorded, there were additional fields recorded. For example, PlayerJoinEvent would only have generic data while another event such as 
                      BlockBreakEvent has the generic data and also an additional field for the type of block they placed.</p>

                </div>

                <div class="tile is-child">

                <!-- My contributions to the project -->
                <dl class="has-text-white-ter">
                  <dt>- Recorded player actions such as player location, world, world time, and event type.</dt>
                  <dt>- Cached data locally to then send to MongoDB.</dt>
                  <dt>- Developed the program to be modular and easy to use for future researcher use. </dt>
                  <dt>- Utilized the PaperMC API for development.</dt>
                  <dt>- Added an Activity feature that allows players to share what type of activity they are performing.</dt>
                  <dt>- Coinfigured Maven project for this program.</dt>
                  <dt>- Used GitHub for version control.</dt>
                  <dt>- Oversaw software development of this project</dt>
                </dl>

                </div>
              </div>

              <!-- Visual example -->
              <div class="tile is-child">

              <figure>
                <img src="/assets/img/data-overview.png" alt="Data Process Overview" class="center">
                <figcaption class="has-text-white-ter">Visual example of program's function.</figcaption>
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
export class MinecraftDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
