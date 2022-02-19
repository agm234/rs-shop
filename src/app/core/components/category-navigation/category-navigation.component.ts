import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { BehaviorSubject, Observable } from 'rxjs';
import { selectVideosState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { ShopService } from 'src/app/shop/services/shop.service';

import { getCategories, getPopularItems } from '../../../redux/actions/index';
import { ICategories } from '../../models/categories-model';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent  {
  categories$: Observable<ICategories[] | null> = new BehaviorSubject([]);

  constructor(private store: Store<AppState>, private shopService:ShopService, private router:Router) {
    this.store.dispatch(getCategories());
    this.categories$ = store.pipe(select(selectVideosState));
    this.store.dispatch(getPopularItems({ payload:'electronics' }));
  }



  navigateToCategory(categoryId:string, categoryName:string){
    this.shopService.categoryName$.next(categoryName);
    this.shopService.count = 10;
    this.router.navigate([`${categoryId}`]);
  }
}
