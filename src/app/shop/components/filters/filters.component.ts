import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  isDesc = false;

  search = '';

  constructor(private shopService:ShopService) { }


  onFilter(search:string) {
    this.isDesc = !this.isDesc;
    this.search = search;
    this.shopService.filter$.next(this.search);
    this.shopService.isDesc$.next(this.isDesc);
  }
}
