import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="tile is-ancestor">
      <div class="tile is-parent">
          <figure class="image">
            <img src="/assets/img/andrew_compressed.jpg">
            <figcaption>UCF - Computer Science - Class of 2021</figcaption>
            <figcaption>
              <a href="https://github.com/aamados" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a>
              <a href="mailto:aamado@knights.ucf.edu" target="_blank" rel="noopener noreferrer"><img src="/assets/img/mailLogo.png" alt="" class="click-logo"></a>
              <a href="/assets/info/resume.pdf" target="_blank" rel="noopener noreferrer"><img src="/assets/img/resumeLogo.png" alt="" class="click-logo"></a>
            </figcaption>
          </figure>
    <div class="tile is-parent is-10 is-vertical">
      <div class="tile is-child notification is-danger">
        <p class="title">Welcome to my Website!</p>
        <p class="subtitle has-text-warning">⚠️ Please note that this website is under construction ⚠️</p>
        <p class="subtitle">In the CS field, it is important to spend time learning about new technologies and how you can use them. 
          That is why I made this website to learn about front-end development, showcase my past projects, and overall share more about myself.</p>
      </div>

      <div class="tile is-child">
        <p class="subtitle">I began my software engineering journey in 2014 when I started creating server plugins for Minecraft. 
          I always enjoyed learning about Java and spending time creating my programs. I couldn't describe to you how I felt once 
          everything worked as intended. That gratification is what motivated me to pursue software engineering as a career.</p>

          <p class="subtitle">On December 18, 2021, I became one step closer to achieving that goal as I had finally graduated from the UCF. 
            All the hours spent studying, struggling, and connecting with others made it all worth the journey.</p>

            <p class="subtitle">Feel free to browse this website for additional information about myself.</p>
      </div>
    </div>
  `,
  styles: [`
    p
    {
      color: #eee;
    }

    img
    {
      max-width: 100%;
      height: auto;
    }

    figcaption
    {
      text-align: center;
      color: #eee
    }

    .click-logo
    {
      max-width: 15%;
      display: inline-block;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 5px;
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
