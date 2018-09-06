import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email;
  password;

  response: object;

  constructor(private dataFetch: DataFetchService) { }

  ngOnInit() {

  }

  onClickLogin() {
    this.dataFetch.sendLoginRequest(this.email, this.password).subscribe(
      data => this.response = data 
    );
  }

}
