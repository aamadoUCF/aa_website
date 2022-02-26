import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <article>
      <!-- Minecraft Player Data Collector -->
      
      <app-minecraft-data></app-minecraft-data>

      <!-- Website -->

      <app-ng-website></app-ng-website>
      
      <!-- RestAPI - GreyMatter POOP -->

      <app-restapi></app-restapi>

      <!-- Discord Bot -->

      <app-discord-bot></app-discord-bot>

    </article>
  `,
  styles: [`
  `]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
