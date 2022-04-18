import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductComponent } from './components/product/product.component';
import {
  SelectedProductsComponent,
} from './components/selected-products/selected-products.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';

const routes:Routes = [
  {
    path: '',
    component: ShopMainComponent,
  },
  {
    path: 'CategoryPanel',
    component: CategoryPanelComponent,
  },
  {
    path: 'select',
    component: SelectedProductsComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'waitlist',
    component: WaitListComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: ':id',
    component: ProductCategoryComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ShopRoutingModule { }
