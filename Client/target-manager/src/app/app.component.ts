import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'target-manager';
  firstName = 'Sometimes there'
  lastName = 'firsName LastName'

  IsUserLogedIn = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.IsUserLogedIn = this.httpService.isUserLogedin();
  }
  
  onLogin(){
    this.IsUserLogedIn = true;
  }
}
