import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
    categoryName?:Observable<string>;
  constructor(private shopService:ShopService) {
      console.log(1231)
  }

  ngOnInit(): void {
    this.categoryName=this.shopService.categoryName$;
  }

}
