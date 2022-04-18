import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
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
export class ShopMainComponent implements OnInit {
  images = [
    '../../../../assets/icons/ipad.jpg',
    '../../../../assets/icons/lg.jpg',
    '../../../../assets/icons/karcher.jpg',
  ];

  items$: Observable<IShopItem[]>;

  width?: number;

  showNavigationArrows = false;

  showNavigationIndicators = true;

  constructor(private store: Store<AppState>, private router: Router) {
    this.items$ = store.pipe(select(selectPopularItemsState));
  }

  ngOnInit() {
    this.width = window.innerWidth;
  }

  navigateToProducts(id: string) {
    this.router.navigate(['product', id]);
  }

  navigateToCategory(id: string) {
    this.router.navigate([id]);
  }

  navigateToSubCategory(id: string, subId: string) {
    this.router.navigate([`${id}_${subId}`]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
}
