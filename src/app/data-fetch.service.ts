import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient) { }

  sendLoginRequest(emailInput: String, passwordInput: String) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    }
    let body = {
      email: emailInput,
      password: passwordInput
    }
    console.log(emailInput);
    console.log(passwordInput);
    return this.http.post('http://fitness-lanka-laravel.herokuapp.com/api/login', body, options);
  }
}