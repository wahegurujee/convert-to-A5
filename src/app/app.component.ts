import { Component, Input } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import { GamePageService } from './game-page/game-page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamePageService]

})
export class AppComponent {

  constructor(private appService: AppService, private gamepageService: GamePageService) {
  }
request:any = {};
GV:any;
dropdown:any;
set_val:any;


// reset = function () {
//   this.reset();
// }


  // this.gamepageService.getdropData().then(res => {
  //   this.dropdown = res;
  //   console.log("In app");
  //   console.log(this.dropdown);
  // }, err => {

  // });
// @Input()
// updateCount
// updateFromChild(event){
//  // this.request;
//   console.log(event);
// }

find = function(){
  this.appService.getResult().then(res => {
  this.result = res;
 
  }, err => {
    
  });
}


}
