import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <article>
      <section class="section">
        <h1 class="title has-text-white-ter">Minecraft Player Data Collecter <img src="/assets/img/heapcraftLogo.png" class="project-logo"alt="Logo"></h1>
          <p class="subtitle has-text-grey-light">Written in Java –  Aug. 2021 - Dec. 2021 </p>

          <p>This project was made in part of a bigger project, <a href="https://minecraftcollab.com/">Measuring Collaboration in Minecraft</a>, my Senior Design project.
          It acted as the project's core as all other aspects of the assignment relied on the data being present. 
          Throughout the duration of this project, I led both the Software Development and Back-End teams, meaning I oversaw the progress, development, and implementation
           of this program. </p>

           <br>

           <p>As players perform specific actions in a Minecraft server, data simultaneously was recorded in a JSON format. All recorded events contained generic data, however
              depending on which event was recorded, there were additional fields recorded. For example, PlayerJoinEvent would only have generic data while another event such as 
              BlockBreakEvent has the generic data and also an additional field for the type of block they placed.</p>

            <br>

            <dl class="has-text-white-ter">
              <dt>- </dt>
            </dl>

      </section>
    </article>
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
    .project-logo
    {
      max-width:2%;
      display: inline-block;
      position: absolute;
      margin-left: 10px;
    }
  `]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
