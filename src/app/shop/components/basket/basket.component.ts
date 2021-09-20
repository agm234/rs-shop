import { Component, OnInit,NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    count:number;
    favorites=true;
    favoritesArr:string[]=[];
    items$: Observable<IShopItem[] | null> = new BehaviorSubject([]);
    observables= [] as Array<Observable<IShopItem | null>> ;
    isOrderActive:boolean;
  constructor(private shopService:ShopService,private router:Router) {
      this.count=1;
      this.isOrderActive=false;
    this.shopService.getUser().subscribe(data=>{
        data.cart.forEach(el=>{
            this.observables.push(this.shopService.getItem(el))
        })
        this.items$=forkJoin(this.observables) as Observable<IShopItem[] | null>;
      })
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
  navigateToProduct(id:string){
    this.router.navigate([`product`,`${id}`])
  }
}
