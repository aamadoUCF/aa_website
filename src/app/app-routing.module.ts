import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, data: { page: 'one'}
  },
  {
    path: 'projects',
    component: ProjectsComponent, data: { page: 'two'}
  },
  {
    path: 'interests',
    component: HobbiesComponent, data: { page: 'three'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
