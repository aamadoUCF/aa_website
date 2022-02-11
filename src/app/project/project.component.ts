import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <div class="columns box is-desktop">
      <div class="column box is-4">
        Project Name
        
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
