import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { getItem } from 'src/app/redux/actions';
import { selectItemState } from 'src/app/redux/selectors/shop.selector';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  item:IShopItem[] = [];

  slides?:string[];

  favorites?:boolean;

  cart?:boolean;

  favoritesArr:string[] = [];

  constructor(private router:Router, public routed:ActivatedRoute, private store: Store<AppState>, private shopService:ShopService) {
    this.routed.params.subscribe(( { id } ) => {
      this.store.dispatch(getItem({ payload:id }));
    });
    this.store.pipe(select(selectItemState)).subscribe(data=>{
      this.item = data;
    });

  }

  ngOnInit(): void {
    this.shopService.getUser().subscribe(data=>{
      this.item.forEach(el=>{

        if (data.favorites.includes(el.id)){
          this.favorites = true;
        } else {
          this.favorites = false;
        }
        if (data.cart.includes(el.id)){
          this.cart = true;
        } else {
          this.cart = false;
        }

      });

    });
  }

  addToSelect(id:string){
    this.shopService.addToSelect(id);
    this.favorites = !this.favorites;
  }

  deleteFromSelect(id:string){
    this.shopService.deleteFromSelect(id);
    this.favorites = !this.favorites;
  }

  addToBasket(id:string){
    this.shopService.addToBasket(id);
    this.cart = !this.cart;
  }

  deleteFromBasket(id:string){
    this.shopService.deleteFromBasket(id);
    this.cart = !this.cart;
  }

  navigate(str:string, str2?:string){
    if (str2){
      this.router.navigate([`${str}_${str2}`]);
    } else {
      this.router.navigate([`${str}`]);
    }

  }
}
