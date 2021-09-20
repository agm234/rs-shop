import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-busket-item',
  templateUrl: './busket-item.component.html',
  styleUrls: ['./busket-item.component.scss']
})
export class BusketItemComponent implements OnInit {
    count:number;
    favorites=true;
    favoritesArr:string[]=[];
    @Input() item?:IShopItem;
  constructor(private shopService:ShopService) {
    this.count=2;
  }

  ngOnInit(): void {
    this.isFavorites()
  }
  isFavorites(){
    this.shopService.getUser().subscribe(data=>{
        this.favoritesArr=data.favorites;
    })
  }
  addToSelect(id:string){
    this.shopService.addToSelect(id);
    this.favorites=!this.favorites;
  }
 removeFromSelect(id:string){
      this.shopService.deleteFromSelect(id);
      this.favorites=!this.favorites;
  }
  deleteFromBasket(id:string){
    this.shopService.deleteFromBasket(id);
  }
}
