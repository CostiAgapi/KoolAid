import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class UserService {

  private token;
  private isUserLoggedIn;
  private username;
  private webServicesLink = "http://localhost:8080/";

  constructor(private httpService: Http) {

  }

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  postUserCredentialsToWS(user){
      var jsonUser  = JSON.stringify(user);
      return this.httpService.post("http://localhost:8080/login",jsonUser).map((response: Response) => {
            this.token = response.headers.get('Authorization');
            console.log("Authorization header: " + response.headers.get('Authorization'));
            console.log("all headers: " + response.headers.keys());
            console.log("--------");
            console.log(this.token);
        });

  }

  getCars(){
    return this.httpService.get("http://localhost:8080/api/getString");
  }
}
