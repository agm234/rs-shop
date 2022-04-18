import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ShopService } from 'src/app/shop/services/shop.service';

import { GetCardsService } from '../../core/services/get-cards.service';
import {
  fetchCategories, fetchCategoriesItems, fetchItem, fetchPopularItems, fetchSubCategoriesItems,
  getCategories, getCategoriesItems, getItem, getPopularItems, getSubCategoriesItems,
} from '../actions';
import { fetchUserInfo, getUserInfo } from '../actions/shop.action';

@Injectable()
export class CardsEffects {
  constructor(
    private actions: Actions,
    private getCardsService: GetCardsService,
    private shopService: ShopService,
  ) {}

  loadCategoryItems:Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getCategoriesItems),
    switchMap(({ payload: query }) => this.shopService.getCategoriesItems(query).pipe(
      map(categoriesItems => fetchCategoriesItems({ payload: categoriesItems })),
    )),
    catchError(() => EMPTY),
  ));

  loadCards: Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getCategories),
    switchMap(() => this.getCardsService.getCategories().pipe(
      map(categories => fetchCategories({ payload: categories })),
    )),
    catchError(() => EMPTY),
  ));

  loadPopularItems:Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getPopularItems),
    switchMap(({ payload: query }) => this.shopService.getPopularItems(query).pipe(
      map(popularItems => fetchPopularItems({ payload: popularItems })),
    )),
    catchError(() => EMPTY),
  ));

  loadSubCategoryItems:Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getSubCategoriesItems),
    switchMap(({ payload: [query, subcategory] }) => this.shopService.getSubCategoriesItems(query, subcategory).pipe(
      map(SubCategoriesItems => fetchSubCategoriesItems({ payload: SubCategoriesItems })),
    )),
    catchError(() => EMPTY),
  ));

  loadItemById:Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getItem),
    switchMap(({ payload: query }) => this.shopService.getItem(query).pipe(
      map(Items => fetchItem({ payload: Items })),
    )),
    catchError(() => EMPTY),
  ));

  loadUserInfo:Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(getUserInfo),
    switchMap(() => this.shopService.getUser().pipe(
      map(User=> fetchUserInfo({ payload: User })),
    )),
    catchError(() => EMPTY),
  ));
}
