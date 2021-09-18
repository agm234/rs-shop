import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getItem } from 'src/app/redux/actions';
import { AppState } from 'src/app/redux/state.models';
import { IShopItem } from '../../models/shop.models';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

   @Input() item?: IShopItem;
    id='';
  constructor(private router:Router,public routed:ActivatedRoute,private store: Store<AppState>,
    private shopService:ShopService) {
    this.routed.params.subscribe(( {id} ) => {
        this.id=id
     });
   }

  ngOnInit(): void {
  }
  navigateToProduct(id:string){
    this.router.navigate([`${this.id}`,`${id}`])
  }
  addToSelect(id:string){
    this.shopService.addToSelect(id);
  }
}
