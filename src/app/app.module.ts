import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GamePageService } from './game-page/game-page.service';
import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[GamePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
