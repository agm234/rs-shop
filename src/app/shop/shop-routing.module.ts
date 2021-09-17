import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CategoryPanelComponent} from './components/category-panel/category-panel.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { ProductComponent } from './components/product/product.component';

const routes:Routes = [
  {
    path: '',
    component: ShopMainComponent,
    data: { breadcrumb: 'zxcasdqwer'},
  },
  {
    path: 'CategoryPanel',
    component: CategoryPanelComponent,
    data: { breadcrumb: 'CategoryPanel'}
  },
  {
    path: ':id',
    component: ProductCategoryComponent,
    data: { breadcrumb: ':id'}
  },
  {
    path: ':id/:id',
    component: ProductComponent,
    data: { breadcrumb: ':id'}
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
