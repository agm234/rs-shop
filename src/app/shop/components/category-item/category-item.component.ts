import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state.models';

import { IShopItem, IUserInfo } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {

  @Input() item?: IShopItem;

  favorites?:boolean;

  cart?:boolean;

  id = '';

  user$: Observable<IUserInfo | null> = new BehaviorSubject({} as IUserInfo);

  constructor(private router:Router, public routed:ActivatedRoute, private store: Store<AppState>,
    private shopService:ShopService) {
    this.routed.params.subscribe(( { id } ) => {
      this.id = id;
    });
  }

  ngOnInit(): void {
    this.shopService.getUser().subscribe(data=>{
      if (data.favorites.includes(this.item?.id as string)){
        this.favorites = true;
      } else {
        this.favorites = false;
      }
      if (data.cart.includes(this.item?.id as string)){
        this.cart = true;
      } else {
        this.cart = false;
      }
    });
  }

  navigateToProduct(id:string){
    this.router.navigate(['product', `${id}`]);
  }

  addToSelect(id:string){
    this.shopService.addToSelect(id);
    this.favorites = !this.favorites;
  }

  addToBasket(id:string){
    this.shopService.addToBasket(id);
    this.cart = !this.cart;
  }

  removeFromBasket(id:string){
    this.shopService.deleteFromBasket(id);
    this.cart = !this.cart;
  }

  removeFromSelect(id:string){
    this.shopService.deleteFromSelect(id);
    this.favorites = !this.favorites;
  }
}
