import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IIp, ILocation } from '../models/categories-model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getIP():string {
    this.http.get<IIp>('http://api.ipify.org/?format=json').subscribe(data=>{
      return data;
    });
    return '';
  }

  getLocation(ip:string){
    return this.http.get<ILocation>(`http://ip-api.com/json/${ip}`);
  }
}
