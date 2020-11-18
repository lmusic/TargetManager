import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { RegisterForm } from '../models/register-form';


@Component({
  selector: 'app-authorization-component',
  templateUrl: './authorization-component.component.html',
  styleUrls: ['./authorization-component.component.scss']
})
export class AuthorizationComponentComponent implements OnInit {
  
  loginForm = new LoginForm();
  registerForm = new RegisterForm();

  @Output() onLogin = new EventEmitter<boolean>();

  IsLoginMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.onLogin.emit(true);
  }

  switchMode(){
    this.IsLoginMode = !this.IsLoginMode;
  }

}
