import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { getCards } from 'src/app/redux/actions';
import { selectItemsState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-category-items-field',
  templateUrl: './category-items-field.component.html',
  styleUrls: ['./category-items-field.component.scss'],
})
export class CategoryItemsFieldComponent implements OnInit {
  isDesc = false;

  id?:string;

  filter = '';

  items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);

  private subs: Subscription = new Subscription();

  constructor(public routed:ActivatedRoute, private router:Router, private store: Store<AppState>, private shopService:ShopService) {
    this.routed.params.subscribe(( { id } ) => {
      this.id = id;
      this.shopService.loadCards((this.id?.split('_') as string[]));
    });
    this.items$ = this.store.pipe(select(selectItemsState));
  }

  ngOnInit(): void {
    this.subs.add(this.shopService.filter$.subscribe((data) => {
      this.filter = data;
      this.store.dispatch(getCards());
    }));
    this.subs.add(this.shopService.isDesc$.subscribe((data) => {
      this.isDesc = data;
    }));
    this.subs.add(this.shopService.count$.subscribe(() => {
      this.shopService.loadCards((this.router.url.slice(1).split('_') as string[]));
    }));
  }

  load(){
    this.shopService.count$.next((this.shopService.count as number) + 10);
  }

}
