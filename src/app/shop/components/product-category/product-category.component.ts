import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],

})
export class ProductCategoryComponent implements OnInit {
  id:string[] = [];

  isLengt:boolean = false;

  categoryName?:Observable<string>;

  constructor(private shopService:ShopService, public routed:ActivatedRoute, private router :Router) {
    this.routed.params.subscribe(( { id } ) => {
      if (id?.split('_').length > 1){
        this.isLengt = true;
        this.id = id?.split('_');
      } else {
        this.isLengt = false;
        this.id = id?.split('_');
      }
    });
  }

  ngOnInit(): void {
    this.categoryName = this.shopService.categoryName$;
  }

  navigate(str:string){
    this.router.navigate([`${str}`]);
  }
}
