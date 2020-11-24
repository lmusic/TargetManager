import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { RegisterForm } from '../models/register-form';
import { HttpService } from '../services/httpService';


@Component({
  selector: 'app-authorization-component',
  templateUrl: './authorization-component.component.html',
  styleUrls: ['./authorization-component.component.scss']
})
export class AuthorizationComponentComponent implements OnInit {
  
  loginForm = new LoginForm();
  registerForm = new RegisterForm();
  isLoading = true;

  @Output() onLogin = new EventEmitter<boolean>();

  IsLoginMode = true;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.isLoading = false;
  }

  submit() {
    this.isLoading = true;

    if(this.IsLoginMode) {
        this.httpService.login(this.loginForm.value.Login, this.loginForm.value.Password).subscribe(result => {
          if(result){
            this.isLoading = false;
            this.onLogin.emit();
          }
        });
        return;
    }
 
    this.httpService.register(this.registerForm.value.Email, this.registerForm.value.Login, this.registerForm.value.Password).subscribe(result => {
        this.isLoading = false;
        this.switchMode();
    });
  }

  switchMode(){
    this.IsLoginMode = !this.IsLoginMode;
  }

}
