import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result:any = {};
 
  constructor(private appService: AppService) {
     
   }
   
  ngOnInit() {
    
    this.appService.getResult().then(res => {
      this.result = res;
      //this.value = JSON.stringify(res);
      //this.result = this.value.split(" ")[0];
    // console.log(this.result);
    }, err => {
      
    });
  }
  //  @Input() RESULT: any = {};


  
}
