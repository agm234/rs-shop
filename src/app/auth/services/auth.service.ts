import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_USER } from 'src/app/app.constants';

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

  constructor(private http: HttpClient) { }

  login(user:ILogin){
    this.http.post<IKey>(`${ API_URL_USER}login`, user).subscribe(data=>{
      console.log(data);
      localStorage.setItem('token', data.token);
    });
  }

  register(register:IRegiser){
    this.http.post<IKey>(`${ API_URL_USER}register`, register).subscribe(data=>{
      console.log(data);
      localStorage.setItem('token', data.token);
    });
  }
}
