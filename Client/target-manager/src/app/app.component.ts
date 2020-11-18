import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'target-manager';
  firstName = 'Sometimes there'
  lastName = 'firsName LastName'

  IsUserLogedIn = false;
  
  onLogin(){
    this.IsUserLogedIn = true;
  }
}
