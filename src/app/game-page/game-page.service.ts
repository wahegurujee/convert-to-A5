import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GamePageService {
public baseURL = 'https://findfalcone.herokuapp.com/planets';
public baseURLL = 'https://findfalcone.herokuapp.com/vehicles';
public tokenURL = 'https://findfalcone.herokuapp.com/token';

public httpOptions = {
    headers: new HttpHeaders({
    'Accept':  'application/json'
  })
};

  constructor(private http: HttpClient) { }

  getdropData(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get(this.baseURL).subscribe( response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });    
  }


  
  getvehicleData(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get(this.baseURLL).subscribe( response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });    
  }


  getToken(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http.post(this.tokenURL, this.httpOptions).subscribe( response => {
        console.log(response);
        resolve(response);
      }, error => {
        reject(error);
      });
    });    
  }


}
