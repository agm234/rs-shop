import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { API_URL_USER } from 'src/app/app.constants';
import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

interface IKey{
  token:string;
}
interface ILogin{
  login:string;
  password:string;
}
interface IRegiser{
  firstName:string;
  lastName: string;
  login: string;
  password:string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  login(user:ILogin){
    this.http.post<IKey>(`${ API_URL_USER}login`, user).subscribe(async data=>{
      await localStorage.setItem('token', data.token);
      this.store.dispatch(getUserInfo());
    });

  }

  register(register:IRegiser){
    this.http.post<IKey>(`${ API_URL_USER}register`, register).subscribe(async data=>{
      await localStorage.setItem('token', data.token);
      this.store.dispatch(getUserInfo());
    });

  }
}
