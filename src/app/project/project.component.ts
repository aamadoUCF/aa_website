import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <article>
      <!-- Minecraft Player Data Collector -->
      
      <app-minecraft-data></app-minecraft-data>

      <hr>

      <!-- Website -->

      <app-ng-website></app-ng-website>

      <hr>

      <!-- Python Database Exporter -->

      <app-python-data-script></app-python-data-script>
      
      <hr>

      <!-- RestAPI - GreyMatter POOP -->

      <app-restapi></app-restapi>

      <hr>

      <!-- Discord Bot -->

      <app-discord-bot></app-discord-bot>

    </article>
  `,
  styles: [`
  hr
  {
    width: 95%;
    margin: auto;
    background-color: grey;
  }
  `]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
