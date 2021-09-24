import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';
import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { selectUserInfo } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy{
  count:number;

  favorites = true;

  favoritesArr:string[] = [];

  items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);

  observables = [] as Array<Observable<IShopItem | null>> ;

  isOrderActive = false;

  itemsObject:{ [key:string]:number } = {};

  subscription?:Subscription;

  itemsArray:{ id:string, amount:number }[] = [];

  PriceObject:{ [key:string]:number } = {};

  finalPrice = 0;

  items?:IShopItem[];

  isFavorite?:boolean;

  constructor(private shopService:ShopService, private store: Store<AppState>, private router:Router) {
    this.count = 1;
    this.isOrderActive = false;

  }

  ngOnInit(): void {
    this.isFavorites();
    if (localStorage.getItem('token')) {
      this.store.dispatch(getUserInfo());
    }
    this.store.pipe(select(selectUserInfo)).subscribe(data=>{
      this.observables = [];
      this.finalPrice = 0;
      data.forEach(element=>{
        element.cart.forEach(el=>{
          this.observables.push(this.shopService.getItem(el));
        });
      });
      this.items$ = forkJoin(this.observables) as Observable<IShopItem[] | null>;
      this.subscription = this.items$.subscribe(data1=>{
        this.items = data1 as IShopItem[];
        data1?.forEach(el=>{
          this.itemsObject[el.id] = 1;
          this.itemsArray.push({ id:el.id, amount:1 });
          this.PriceObject[el.id] = el.price;
          this.finalPrice += el.price * 1;
        });
      });
    });
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

  isFavorites(){
    this.shopService.getUser().subscribe(data=>{
      this.favoritesArr = data.favorites;
    });
  }

  addToSelect(id:string){
    this.shopService.addToSelect(id);
    this.favorites = !this.favorites;
  }

  removeFromSelect(id:string){
    this.shopService.deleteFromSelect(id);
    this.favorites = !this.favorites;
  }

  deleteFromBasket(id:string){
    this.shopService.deleteFromBasket(id);
    this.store.dispatch(getUserInfo());
  }

  navigateToProduct(id:string){
    this.router.navigate(['product', `${id}`]);
  }

  plus(id:string){
    this.itemsObject[id] = this.itemsObject[id] + 1;
    this.itemsArray.filter(el=>el.id === id)[0].amount = this.itemsObject[id];
    this.finalPrice += this.PriceObject[id] * 1;
  }

  minus(id:string){
    if (this.itemsObject[id] > 0){
      this.itemsObject[id] = this.itemsObject[id] - 1;
      this.itemsArray.filter(el=>el.id === id)[0].amount = this.itemsObject[id];
      this.finalPrice -= this.PriceObject[id] * 1;
    }

  }

  order(){
    this.isOrderActive = !this.isOrderActive;
    this.shopService.itemsArray = this.itemsArray;

  }

  isFavoriteItem(id:string){
    if (this.favoritesArr.includes(id)){
      return  true;
    }
    return false;
  }
}
