import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p class="subtitle has-text-white-ter">Website built by 
        <a href="https://github.com/aamados" class="has-text-danger" target="_blank" rel="noopener noreferrer">Andrew Amado</a> using 
        <a href="https://angular.io/" class="has-text-danger" target="_blank" rel="noopener noreferrer">Angular</a>.</p>
      </div>
    </footer>
  `,
  styles: [`
  .footer
  {
    margin-top: 20px;
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
