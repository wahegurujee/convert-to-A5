import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
  public resultURL = 'https://findfalcone.herokuapp.com/find';


  public httpOption = {
    headers: new HttpHeaders({
    'Accept':  'application/json',
    'Content-Type': 'application/json'
  })
  };
  constructor(private http:HttpClient) { }

  getResult(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http.post(this.resultURL, { 
        "token": "VFzoZTBhPhVLCRucBYnOixHfQGQCBHdJ",
        "planet_names": [
                "Donlon",
                "Enchai",
                "Sapir",
                "Lerbin"
                ],
        "vehicle_names": [
                "Space pod",
                "Space rocket",
                "Space shuttle",
                "Space pod"
                ]
      }, this.httpOption).subscribe( response => {
       // console.log(response);
        resolve(response);
      }, error => {
        reject(error);
      });
    });    
  }

}
    