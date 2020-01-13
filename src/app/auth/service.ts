// src/app/auth/auth.service.ts
import {Injectable} from '@angular/core';
import {decode} from 'jwt-decode';
import {tokenNotExpired} from 'angular2-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthService {


  url = 'https://sso.opencirclesolutions.nl/auth/realms/greenfield/protocol/openid-connect/token';
  access = 'access_token';

  constructor(private http: HttpClient) {}

  public getToken(): string {

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin:': '*',
        'client_id':  'ocs-webshare',
        'client_secret':  '987a95cb-8ba6-4fef-bba9-bcf6ce8465da',
        'grant_type':  'password'
      })
    };

    let resources;

    this.http.post(this.url, headerOptions)
      .subscribe(
        data => { // json data
          resources = data[this.access];
          console.log('Success: ', data);
        },
        error => {
          console.log('Error: ', error);
        });


    return resources;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
