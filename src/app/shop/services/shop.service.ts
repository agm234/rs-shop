import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { API_URL_CATITEMS, API_URL_ITEMBYID, API_URL_USER } from 'src/app/app.constants';
import { IShopItem, IUserInfo } from '../models/shop.models';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state.models';
import { getCategoriesItems, getSubCategoriesItems } from 'src/app/redux/actions';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
    count?:number;
    count$ = new BehaviorSubject<number>(10);
    categoryName$ = new BehaviorSubject<string>('');
    subCategoryId = '';
    filter$ = new Subject<string>();
    isDesc$ = new Subject<boolean>();
  constructor(private http: HttpClient,private store: Store<AppState>) {
      this.count$.subscribe(data=>{
          this.count=data;
      })
   }

  getCategoriesItems(query:string){
    return this.http.get<IShopItem[]>(`${API_URL_CATITEMS}${query}?start=0&count=${this.count}`);
  }
  getPopularItems(query:string){
    return this.http.get<IShopItem[]>(`${API_URL_CATITEMS}${query}?start=0&count=30`);
  }
  getSubCategoriesItems(query:string,subCategory:string){
    return this.http.get<IShopItem[]>(`${API_URL_CATITEMS}${query}/${subCategory}?start=0&count=${this.count}`);
  }
  getItem(query:string){
    return this.http.get<IShopItem>(`${API_URL_ITEMBYID}${query}`);
  }
  loadCards(array:Array<string>){
      console.log(array)
      console.log(array.length)
    if(array.length<2){
        this.store.dispatch(getCategoriesItems({payload:array[0]}));
    } else {
        this.store.dispatch(getSubCategoriesItems({payload:array}));
    }
  }
  addToSelect(id:string){
      const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem("token"));
      const headers = { headers: header };
      this.http.post('http://localhost:3004/users/favorites',{id:id},headers).subscribe()
  }
  getUser(){
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem("token"));
    const headers = { headers: header };
    return this.http.get<IUserInfo>('http://localhost:3004/users/userInfo',headers)
  }
  addToBasket(id:string){
    const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem("token"));
    const headers = { headers: header };
    this.http.post('http://localhost:3004/users/cart',{id:id},headers).subscribe()
}
    deleteFromSelect(id:string){
        const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem("token"));
        const headers = { headers: header };
        this.http.delete(`http://localhost:3004/users/favorites?id=${id}`,headers).subscribe()
    }
    deleteFromBasket(id:string){
        const header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer '+localStorage.getItem("token"));
        const headers = { headers: header };
        this.http.delete(`http://localhost:3004/users/cart?id=${id}`,headers).subscribe()
    }
}
