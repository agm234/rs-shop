import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { IShopItem } from 'src/app/shop/models/shop.models';

import { API_URL, URL } from '../../app.constants';
import { ICategories } from '../models/categories-model';

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
    this.http.get('http://ipinfo.io').subscribe();
    return this.http.get('http://ipinfo.io');
  }

  search(str:string){
    return  this.http.get<IShopItem[]>(`${URL}goods/search?text=${str}`);
  }
}
