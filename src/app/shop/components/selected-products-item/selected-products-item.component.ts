import { Component, Input, OnInit } from '@angular/core';
import { IShopItem } from '../../models/shop.models';

@Component({
  selector: 'app-selected-products-item',
  templateUrl: './selected-products-item.component.html',
  styleUrls: ['./selected-products-item.component.scss']
})
export class SelectedProductsItemComponent implements OnInit {
 @Input() item?:IShopItem;
  constructor() { }

  ngOnInit(): void {
  }

}
