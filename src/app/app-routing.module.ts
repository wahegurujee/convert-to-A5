import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePageComponent } from './game-page/game-page.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Result',
    component:ResultComponent
  },
  {
  path:'GamePage',
  component:GamePageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
