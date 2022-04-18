import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { selectUserInfo } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent implements OnInit {
  items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);

  observables = [] as Array<Observable<IShopItem | null>> ;

  constructor(private store: Store<AppState>, private shopService:ShopService) {


  }

  ngOnInit(){
    if (localStorage.getItem('token')) {
      this.store.dispatch(getUserInfo());
    }
    this.store.pipe(select(selectUserInfo)).subscribe(data=>{
      this.observables = [];
      data.forEach(element=>{
        element.favorites.forEach(el=>{
          this.observables.push(this.shopService.getItem(el));
        });
      });
      this.items$ = forkJoin(this.observables) as Observable<IShopItem[] | null>;

    });
  }


}
