import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategories } from '../models/categories-model';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GetCardsService {

  items$ = new BehaviorSubject<ICategories[]>([]);

  constructor(private http: HttpClient) {

  }

  getCategories(){
    return this.http.get<ICategories[]>(API_URL);

  }

  getCurrentIpLocation(): Observable<any> {
    this.http.get('http://ipinfo.io').subscribe(data=>{
      console.log(JSON.stringify(data));
    });
    return this.http.get('http://ipinfo.io').pipe(map(response => console.log(JSON.stringify(response))));
  }
}
