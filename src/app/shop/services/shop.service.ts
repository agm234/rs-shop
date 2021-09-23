import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BehaviorSubject, Subject } from 'rxjs';
import { API_URL_CATITEMS, API_URL_ITEMBYID } from 'src/app/app.constants';
import { getCategoriesItems, getSubCategoriesItems } from 'src/app/redux/actions';
import { AppState } from 'src/app/redux/state.models';

import { IOrder, IShopItem, IUserInfo } from '../models/shop.models';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  count?: number;

  count$ = new BehaviorSubject<number>(10);

  categoryName$ = new BehaviorSubject<string>('');

  subCategoryId = '';

  filter$ = new Subject<string>();

  isDesc$ = new Subject<boolean>();

  itemsArray:{ id:string, amount:number }[] = [];


  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.count$.subscribe((data) => {
      this.count = data;
    });
  }

  getCategoriesItems(query: string) {
    return this.http.get<IShopItem[]>(
      `${API_URL_CATITEMS}${query}?start=0&count=${this.count}`,
    );
  }

  getPopularItems(query: string) {
    return this.http.get<IShopItem[]>(
      `${API_URL_CATITEMS}${query}?start=0&count=30&sortBy=rating&reverse=true`,
    );
  }

  getSubCategoriesItems(query: string, subCategory: string) {
    return this.http.get<IShopItem[]>(
      `${API_URL_CATITEMS}${query}/${subCategory}?start=0&count=${this.count}`,
    );
  }

  getItem(query: string) {
    return this.http.get<IShopItem>(`${API_URL_ITEMBYID}${query}`);
  }

  loadCards(array: Array<string>) {
    if (array.length < 2) {
      this.store.dispatch(getCategoriesItems({ payload: array[0] }));
    } else {
      this.store.dispatch(getSubCategoriesItems({ payload: array }));
    }
  }

  addToSelect(id: string) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http
      .post('http://localhost:3004/users/favorites', { id: id }, headers)
      .subscribe();
  }

  getUser() {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    return this.http.get<IUserInfo>('http://localhost:3004/users/userInfo', headers);
  }

  setOrder(order:IOrder) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http.post('http://localhost:3004/users/order', order, headers).subscribe();
  }

  addToBasket(id: string) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http
      .post('http://localhost:3004/users/cart', { id: id }, headers)
      .subscribe();
  }

  deleteFromSelect(id: string) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http
      .delete(`http://localhost:3004/users/favorites?id=${id}`, headers)
      .subscribe();
  }

  deleteFromBasket(id: string) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http
      .delete(`http://localhost:3004/users/cart?id=${id}`, headers)
      .subscribe();
  }

  refactorOrder(order:IOrder){
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http.put('http://localhost:3004/users/order', order, headers).subscribe();
  }

  deleteOrder(id:string){
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    const headers = { headers: header };
    this.http.delete(`http://localhost:3004/users/order?id=${id}`, headers).subscribe();
  }
}
