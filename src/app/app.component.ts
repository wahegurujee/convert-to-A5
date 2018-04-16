import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

this.reset = function () {
  this.reset();
}
this.find = function(){
   this.gamepageService.getResult().then(res => {
    this.result = res;
   // console.log(this.token);
  }, err => {
    
  });
}