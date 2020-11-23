import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators'
import { TargetModel } from '../models/TargetModel';
import { Moment } from 'moment';
@Injectable({providedIn: 'root'})
export class HttpService {
    API_URL = 'https://localhost:44341/api/'

    headers = {}
    constructor(private http: HttpClient) { }

    isUserLogedin() {
        let accessToken = localStorage.getItem("access_token");
        if(accessToken){
            this.headers = new HttpHeaders().set(
                'Authorization', `Bearer ${accessToken}`
            )
            return true;
        }
        return false;
    }

    login(login: string, password: string) {
        let url = this.API_URL + 'auth/login'
        let body = {login: login, password: password};
        return this.http.post(url, body).pipe(
            tap( result => {
                debugger;
                localStorage.setItem('access_token', result['token'])
                this.headers = new HttpHeaders().set(
                    'Authorization', `Bearer ${result['token']}`
                )
            })
        );
    }

    register(email: string, login: string, password: string) {
        let url = this.API_URL + 'auth/register'
        let body = {email: email, login: login, password: password};
        return this.http.post(url, body)
    }

    getTargets() {
        debugger;
        let url = this.API_URL + 'targets'
        return this.http.get(url, {'headers': this.headers}).pipe(
            tap((result: TargetModel[]) => {
              result.forEach(target => {
                target.deadLine = target.deadLine.split('T')[0].toLocaleLowerCase();
              })
            })
        );
    }
    
    addTarget(body) {
        let url = this.API_URL + 'targets/add'
        return this.http.post(url, body, {'headers': this.headers});
    }
}