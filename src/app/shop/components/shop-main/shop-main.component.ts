import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { selectPopularItemsState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem } from '../../models/shop.models';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ShopMainComponent {
  images = [
    'https://www.21vek.by/img/tmp/banners/6144493ee5240730х440_21vek_iPad 2021.jpg?1632215938',
    'https://www.21vek.by/img/tmp/banners/6148676a5d4ae730x440_21Vek_Stulya_SAIT_RGB.jpg?1632135024',
    'https://www.21vek.by/img/tmp/banners/613ef990610db730x440_bosch.jpg?1632206334',
  ];

  items$:Observable<IShopItem[]>;

  showNavigationArrows = false;

  showNavigationIndicators = true;

  constructor(private store: Store<AppState>, private router:Router) {
    this.items$ = store.pipe(select(selectPopularItemsState));
  }


  navigateToProducts(id:string){
    this.router.navigate(['product', id]);
  }

  navigateToCategory(id:string){
    this.router.navigate([id]);
  }

  navigateToSubCategory(id:string, subId:string){
    this.router.navigate([`${id}_${subId}`]);
  }
}
