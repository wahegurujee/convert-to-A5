import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from '../game-page/game-page.component';
import { ResultComponent } from './result.component';
import { RouterModule } from '@angular/router/src/router_module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule 
  ],
  declarations: [
    GamePageComponent,
    ResultComponent
  ]
})
export class ResultModule { }
