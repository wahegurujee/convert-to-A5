import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) {
  }

  reset = function () {
    this.reset();
  }
  find = function(){
    this.appService.getResult().then(res => {
     this.result = res;
    //console.log(this.result);
   }, err => {
     
   });
 }

}



