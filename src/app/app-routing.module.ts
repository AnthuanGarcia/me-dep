import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndiProjectComponent } from './indi-project/indi-project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', component: ProfileComponent,  data:{animationState: 'one'} },
  { path: 'exp', component: ExpComponent,  data:{animationState: 'two'} },
  { path: 'projects', component: ProjectsComponent, data: {animationState: 'three'} },
  { path: 'individual',  component: IndiProjectComponent, data: {animationState: 'four'}},
  { path: 'contact', component: ContactComponent, data: {animationState: 'five'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
