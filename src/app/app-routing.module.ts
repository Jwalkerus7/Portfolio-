import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MessageFormComponent } from './shared/components/message-form/message-form.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';

const routes: Routes = [
  {
    path: 'message',
    component: MessageFormComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: DisplayMoviesComponent
  }
];

@NgModule({
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}