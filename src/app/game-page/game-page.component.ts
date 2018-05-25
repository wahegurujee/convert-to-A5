import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GamePageService } from '../game-page/game-page.service';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
  providers: [GamePageService],
  animations: [
    trigger('photoState', [
      state('hide', style({ transform: 'rotate(0)' })),
      state('show', style({ transform: 'rotate(-360deg)' })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
    trigger('photoState', [
        state('hide', style({ transform: 'rotate(0)' })),
        state('show', style({ transform: 'rotate(-360deg)' })),
        transition('show => hide', animate('400ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
      ]),
      trigger('photoState', [
        state('hide', style({ transform: 'rotate(0)' })),
        state('show', style({ transform: 'rotate(-360deg)' })),
        transition('show => hide', animate('400ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
      ]),
      trigger('photoState', [
        state('hide', style({ transform: 'rotate(0)' })),
        state('show', style({ transform: 'rotate(-360deg)' })),
        transition('show => hide', animate('400ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
      ])
  ]
})
export class GamePageComponent implements OnInit {
    
  dropdown: any;
  vehicle: [any];
  //val:number;
  Token:any;
  image6:any = [];
  image7:any = [];
  image8:any = [];
  image9:any = [];
  token:any = {};
  set_val:any;
  bool:any;
  positive = true;
  positive2 = true;
  positive3 = true;
  find = true;
 

 
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
  selectedName1: any ="";
  selectedName2: any ="";
  selectedName3: any ="";
  selectedName4: any ="";
  request = {
    token:{},
    planet_names:[],
    vehicle_names:[]
  }
  
 
  constructor(private gamepageService: GamePageService) {
    this.donlon = '/assets/images/donlon.PNG';
    this.enchai = '/assets/images/enchai.PNG';
    this.jebing = '/assets/images/jebing.PNG';
    this.sapir = '/assets/images/sapir.PNG';
    this.lerbin = '/assets/images/lerbin.PNG';
    this.pingasor = '/assets/images/pingasor.PNG';
  
  }
  show = false;
 
 
  get stateName() {
      return this.show ? 'show' : 'hide'
    }
    get stateName2() {
        return this.show ? 'show' : 'hide'
      }
      get stateName3() {
        return this.show ? 'show' : 'hide'
      }
      get stateName4() {
        return this.show ? 'show' : 'hide'
      }
  
  
    toggle() {
      this.show = !this.show;
    }
  

  ngOnInit() {
   this.dropData(0);  

   var angle = 0;
setInterval(function(){
      angle+=3;
     $("#image1").rotate(angle);
  }, 50);
  }

  fill() {
    return this.set_val = this.positive;
  }
  fill1(){
    return this.set_val = this.positive2;
  } 
  fill2(){
    return this.set_val = this.positive3;
  }

  // @Output()
  // change: EventEmitter<boolean> = new EventEmitter<boolean>();
  // updateCount = this.change.emit(this.find);
  
  

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

  captureValue = function(val, flags, dif) { 
    this.vehicle.find((obj) => {
      if(this.request.vehicle_names[flags] && this.request.vehicle_names[flags] !== val){
          obj.total_no = obj.name === this.request.vehicle_names[flags] ? obj.total_no+1 : obj.total_no;
      }
      obj.total_no = obj.name === val ? obj.total_no-1 : obj.total_no;
  });
  this.request.vehicle_names[flags] = val; 
  console.log(this.request);

  if(dif === 6)
  {
    
   
  if(this.request.vehicle_names[flags] === 'Space pod')
  {
    this.image6 = [
       'assets/images/pod.PNG',
    ];
  }
  else if(this.request.vehicle_names[flags] === 'Space rocket')
  {
      this.image6 = [
          'assets/images/rocket.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space shuttle')
  {
      this.image6 = [
           'assets/images/shuttle.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space ship')
  {
      this.image6 = [
          'assets/images/ship.PNG',
      ]; 
  }

  this.positive = false;
  this.set_val = this.positive;
  }

  if(dif === 7)
  {
  if(this.request.vehicle_names[flags] === 'Space pod')
  {
    this.image7 = [
      'assets/images/pod.PNG',
    ];
  }
  else if(this.request.vehicle_names[flags] === 'Space rocket')
  {
      this.image7 = [
           'assets/images/rocket.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space shuttle')
  {
      this.image7 = [
           'assets/images/shuttle.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space ship')
  {
      this.image7 = [
          'assets/images/ship.PNG',
      ]; 
  }
  this.positive2 = false;
  this.set_val = this.positive2;
  }

  if(dif === 8)
  {
  if(this.request.vehicle_names[flags] === 'Space pod')
  {
    this.image8 = [
       'assets/images/pod.PNG',
    ];
  }
  else if(this.request.vehicle_names[flags] === 'Space rocket')
  {
      this.image8 = [
          'assets/images/rocket.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space shuttle')
  {
      this.image8 = [
          'assets/images/shuttle.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space ship')
  {
      this.image8 = [
           'assets/images/ship.PNG',
      ]; 
  }
  this.positive3 = false;
  this.set_val = this.positive3;
  }

  if(dif === 9)
  {
    
  if(this.request.vehicle_names[flags] === 'Space pod')
  {
    this.image9 = [
       'assets/images/pod.PNG',
    ];
  }
  else if(this.request.vehicle_names[flags] === 'Space rocket')
  {
      this.image9 = [
           'assets/images/rocket.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space shuttle')
  {
      this.image9 = [
          'assets/images/shuttle.PNG',
      ]; 
  }
  else if(this.request.vehicle_names[flags] === 'Space ship')
  {
      this.image9 = [
           'assets/images/ship.PNG',
      ]; 
  }
  }


}



  optionDisable = function(count){
        return count === 0 ? true : false;
    };

   vehicles =  this.gamepageService.getvehicleData().then(res => {
      this.vehicle = res;
    }, err => {

    });


    GetToken = this.gamepageService.getToken().then(res => {
      this.Token = res;
      this.request.token = this.Token.token;
    }, err => {
      
    });


    // changeGV(){
    //   this.gamepageService.setMyGV(this.request);
    //   console.log("called");
  
    // }
    // showGV(){
    //    this.GV = this.gamepageService.getMyGV();
    //    console.log(this.GV);
    //   }


    dropData(val) {
  
      this.gamepageService.getdropData().then(res => {
        this.dropdown = res;
      }, err => {

      });
      if(val === 0){
      
        this.request.planet_names[val] = this.selectedName1;
      }
      else if(val === 1){
        var angle = 0;
        setInterval(function(){
              angle+=3;
             $("#image2").rotate(angle);
        },50);
        this.request.planet_names[val] = this.selectedName2;
      }
      else if(val === 2){
        var angle = 0;
        setInterval(function(){
              angle+=3;
             $("#image3").rotate(angle);
        },50);
        this.request.planet_names[val] = this.selectedName3;
      }
      else if(val === 3){
        var angle = 0;
        setInterval(function(){
              angle+=3;
             $("#image4").rotate(angle);
        },50);
        this.request.planet_names[val] = this.selectedName4;

      
      }
    
    }



}
