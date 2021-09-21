import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { ProductComponent } from './components/product/product.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { BasketComponent } from './components/basket/basket.component';

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
