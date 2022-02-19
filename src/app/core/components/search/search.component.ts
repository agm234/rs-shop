import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { IShopItem } from 'src/app/shop/models/shop.models';

import { GetCardsService } from '../../services/get-cards.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchStr = '';

  isSearch$ = new BehaviorSubject<boolean>(false);

  search$: Observable<IShopItem[] | null> = new BehaviorSubject([]);

  constructor(private getCardsService:GetCardsService, private router:Router) { }

  find(str:string){
    this.search$ = this.getCardsService.search(str);
  }

  navigateToitem(id:string){
    this.isSearch$.next(true);
    this.searchStr = '';
    this.router.navigate(['product', id]);
  }

  showSearchResulst(){
    this.isSearch$.next(true);
  }

  hideSearchResults(){
    this.isSearch$.next(false);
  }

}
