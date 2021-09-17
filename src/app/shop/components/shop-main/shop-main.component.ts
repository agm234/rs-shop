import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPopularItemsState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';
@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.scss']
})
export class ShopMainComponent implements OnInit {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1090/500`);
    items$:Observable<IShopItem[]>;
    showNavigationArrows = false;
    showNavigationIndicators = true;

  constructor(private store: Store<AppState>) {
    this.items$ = store.pipe(select(selectPopularItemsState));
  }
  ngOnInit(): void {
  }


}
