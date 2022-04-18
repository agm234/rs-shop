import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getUserInfo } from 'src/app/redux/actions/shop.action';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-selected-products-item',
  templateUrl: './selected-products-item.component.html',
  styleUrls: ['./selected-products-item.component.scss'],
})
export class SelectedProductsItemComponent implements OnInit {
  @Input() item?:IShopItem;

  cart?:boolean;

  constructor(private store: Store<AppState>, private shopService:ShopService, private router:Router) { }

  ngOnInit(): void {
    this.shopService.getUser().subscribe(data=>{
      if (data.cart.includes(this.item?.id as string)){
        this.cart = true;
      } else {
        this.cart = false;
      }
    });
  }

  delete(id:string){
    this.shopService.deleteFromSelect(id);
    this.store.dispatch(getUserInfo());
  }

  addToBasket(id:string){
    this.shopService.addToBasket(id);
    this.cart = !this.cart;
  }

  deleteFromBasket(id:string){
    this.shopService.deleteFromBasket(id);
    this.cart = !this.cart;
  }

  navigateToProduct(id:string){
    this.router.navigate(['product', `${id}`]);
  }
}
