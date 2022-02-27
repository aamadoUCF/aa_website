import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python-data-script',
  template: `
        <section class="section">
        <h1 class="title has-text-white-ter">Minecraft Data Exporter</h1>
          <p class="subtitle has-text-grey-light">Written in Python –  Nov. 2021 </p>
          <p class="subtitle"><a href="https://github.com/aamados/minecraft-mongo-export-script" target="_blank" rel="noopener noreferrer"><img src="/assets/img/githubLogo.png" alt="" class="click-logo"></a></p>

            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">

                <div class="tile is-child">

                  <!-- Semi-detailed description of project -->
                  <p>While working on Measuring Collaboration in Minecraft, I was tasked with exporting and sorting the data that was previously collected. 
                    Originally, I used MongoDB Compass for exporting, but found a command line to be faster. I then began to 
                    manually export and sort the data, but this proved to be a lengthy process. After the second time exporting the data, 
                    I wrote a Python script to execute ‘mongoexport’ commands in Ubuntu. In its design, I made choosing player events and data fields 
                    easy so long you know the names of them. In the code, I created two string arrays one for the events and another for 
                    each dimension in the Minecraft world. A for loop then goes through each event and sorts the data by each event in their respective world folder.</p>

                  <br>

                  <p>The time to complete exporting depends on the dataset (our data consisted of about 7,000,000 records), 
                    but didnt take more than 8 minutes to complete in my experiences opposed to the 30-45 minutes whilst manually exporting.
                  </p>

                </div>

                <div class="tile is-child">

                <!-- My contributions to the project -->
                <dl class="has-text-white-ter">
                  <dt>- Created script using Google Colab.</dt>
                  <dt>- Designed program to be modular. </dt>
                  <dt>- Utilized program to solve a tedious problem.</dt>
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
  `]
})
export class PythonDataScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
