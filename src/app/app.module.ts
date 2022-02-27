import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { MinecraftDataComponent } from './minecraft-data/minecraft-data.component';
import { DiscordBotComponent } from './discord-bot/discord-bot.component';
import { NgWebsiteComponent } from './ng-website/ng-website.component';
import { RestapiComponent } from './restapi/restapi.component';
import { PythonDataScriptComponent } from './python-data-script/python-data-script.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    HobbiesComponent,
    AboutComponent,
    ProjectComponent,
    MinecraftDataComponent,
    DiscordBotComponent,
    NgWebsiteComponent,
    RestapiComponent,
    PythonDataScriptComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
