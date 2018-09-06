import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient) { }

  sendLoginRequest(email: String, password: String) {
    let httpHeaders = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': 'http://fitness-lanka.herokuapp.com/api/auth/login',
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    let body = {
      email: email,
      password: password,
      remember_me: '1'
    }
    return this.http.post('http://fitness-lanka.herokuapp.com/api/auth/login', body, options);
  }

}
