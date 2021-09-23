import { Component, Input, OnInit } from '@angular/core';

import { IItems, IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-waitlist-item-product',
  templateUrl: './waitlist-item-product.component.html',
  styleUrls: ['./waitlist-item-product.component.scss'],
})
export class WaitlistItemProductComponent implements OnInit{

  @Input() product?:IItems;

  item?:IShopItem;

  constructor(private shopService:ShopService) {

  }

  ngOnInit(): void {
    this.shopService.getItem((this.product as IItems).id).subscribe(data=>{
      this.item = data;
    });
  }


}
