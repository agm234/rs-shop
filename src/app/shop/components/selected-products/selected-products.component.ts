import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { getCategoriesItems } from 'src/app/redux/actions';
import { selectItemsState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent implements OnInit {
    items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);
  constructor(private store: Store<AppState>) {
    this.store.dispatch(getCategoriesItems({payload:'electronics/mobile'}));
    this.items$= this.store.pipe(select(selectItemsState));
    this.store.pipe(select(selectItemsState)).subscribe(data=>{
        console.log(data)
    }
    )
  }

  ngOnInit(): void {
  }

}
