import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategories } from '../../models/categories-model';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state.models';
import { selectVideosState } from 'src/app/redux/selectors/shop.selector';
import { getCategories,  getPopularItems } from '../../../redux/actions/index';
import { ShopService } from 'src/app/shop/services/shop.service';
import { Router } from '@angular/router';
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
    this.shopService.count$.next(10);
    this.router.navigate([`${categoryId}`]);
  }
}
