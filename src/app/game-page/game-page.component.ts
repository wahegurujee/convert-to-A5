import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  dropdown: any;
  box1: any;
  //val:number;
  donlon: any;
  enchai: any;
  jebing: any;
  sapir: any;
  lerbin: any;
  pingasor: any;
  pod: any;
  rocket: any;
  ship: any;
  shuttle: any;
  selectedName1: any;
  selectedName2: any;
  selectedName3: any;
  selectedName4: any;
  request = {
    planet_names:[],
    vehicle_names:[]
  }
 
  constructor(private http: Http) {
    this.donlon = '/assets/images/donlon.PNG';
    this.enchai = '/assets/images/enchai.PNG';
    this.jebing = '/assets/images/jebing.PNG';
    this.sapir = '/assets/images/sapir.PNG';
    this.lerbin = '/assets/images/lerbin.PNG';
    this.pingasor = '/assets/images/pingasor.PNG';
    this.pod = '/assets/images/pod.PNG';
    this.rocket = '/assets/images/rocket.PNG';
    this.ship = '/assets/images/ship.PNG';
    this.shuttle = '/assets/images/shuttle.PNG';
  }
  ngOnInit() {
   this.dropData();
   
  }
  checkDisability = function(item, flag) {
    switch (flag) {
      case 1:
        return item == this.selectedName2 || item == this.selectedName3 || item == this.selectedName4;

      case 2:
        return item == this.selectedName1 || item == this.selectedName3 || item == this.selectedName4;

      case 3:
        return item == this.selectedName1 || item == this.selectedName2 || item == this.selectedName4;

      case 4:
        return item == this.selectedName1 || item == this.selectedName2 || item == this.selectedName3;
    }

  };
  captureValue = function(obj) {
  	return obj = obj-1;
  }
  optionDisable = function(count){
        return count === 0 ? true : false;
    };


    dropData = function(val) {
      const url = 'https://findfalcone.herokuapp.com/planets';
      this.http.get(url).subscribe(res =>
        this.dropdown = res.json()
      );
      console.log(val);
      if(val === 0){
        console.log("in 1st")
        this.request.planet_names[val] = this.selectedName1;
      }
      else if(val === 1){
        console.log("in 2st")
        this.request.planet_names[val] = this.selectedName2;
      }
      else if(val === 2){
        this.request.planet_names[val] = this.selectedName3;
      }
      else if(val === 3){
        this.request.planet_names[val] = this.selectedName4;
      }
      console.log(this.request);

      const urll = 'https://findfalcone.herokuapp.com/vehicles';
      this.http.get(urll).subscribe(res =>
        this.box1 = res.json()
      );
    }
}
