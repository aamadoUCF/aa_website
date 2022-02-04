import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made by Andrew Amado using Angular</p>
      </div>
    </footer>
  `,
  styles: [`
  .footer
  {
    font-size: small;
    background-color: #363636;
  }  
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
