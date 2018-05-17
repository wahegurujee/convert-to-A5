import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from '../game-page/game-page.component';
import { ResultComponent } from '../result/result.component';

const routes: Routes = [
  {
  path:'Result/GamePage',
  component:GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
