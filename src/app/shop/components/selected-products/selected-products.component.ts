import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent  {
  items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);

  observables = [] as Array<Observable<IShopItem | null>> ;

  constructor(private store: Store<AppState>, private shopService:ShopService) {
    this.shopService.getUser().subscribe(data=>{
      data.favorites. forEach(el=>{
        this.observables.push(this.shopService.getItem(el));
      });
      this.items$ = forkJoin(this.observables) as Observable<IShopItem[] | null>;
    });
  }

}
