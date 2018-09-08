import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  constructor(private http: HttpClient) {}

  sendLoginRequest(emailInput: String, passwordInput: String) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = {
      headers: httpHeaders
    };
    let body = {
      email: emailInput,
      password: passwordInput
    };
    return this.http.post(
      "http://localhost:8000/api/login",
      body,
      options
    );
  }

  sendRegisterRequest(
    usernameInput: string,
    emailInput: String,
    passwordInput: String,
    confirm_passwordInput: string
  ) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = {
      headers: httpHeaders
    };
    let body = {
      name: usernameInput,
      email: emailInput,
      password: passwordInput,
      confirm_password: confirm_passwordInput
    };
    return this.http.post(
      "http://localhost:8000/api/register",
      body,
      options
    );
  }
}
