import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwiperModule } from 'swiper/angular';

import { SharedModule } from '../shared/shared.module';
import { BasketComponent } from './components/basket/basket.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import {
  CategoryItemsFieldComponent,
} from './components/category-items-field/category-items-field.component';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderComponent } from './components/order/order.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductSwiperComponent } from './components/product-swiper/product-swiper.component';
import { ProductComponent } from './components/product/product.component';
import { RefactorOrderComponent } from './components/refactor-order/refactor-order.component';
import {
  SelectedProductsItemComponent,
} from './components/selected-products-item/selected-products-item.component';
import {
  SelectedProductsComponent,
} from './components/selected-products/selected-products.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import {
  WaitlistItemProductComponent,
} from './components/waitlist-item-product/waitlist-item-product.component';
import { WaitlistItemComponent } from './components/waitlist-item/waitlist-item.component';
import { ColorDirective } from './directives/color.directive';
import { StarsDirective } from './directives/stars.directive';
import { SortByPopularityPipe } from './pipes/sort-by-popularity.pipe';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { SplitpipePipe } from './pipes/splitpipe.pipe';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    CategoryPanelComponent,
    ShopMainComponent,
    SplitpipePipe,
    StarsDirective,
    ProductCategoryComponent,
    FiltersComponent,
    CategoryItemComponent,
    CategoryItemsFieldComponent,
    SortByPricePipe,
    SortByPopularityPipe,
    ColorDirective,
    ProductComponent,
    ProductSwiperComponent,
    SelectedProductsComponent,
    SelectedProductsItemComponent,
    BasketComponent,
    OrderComponent,
    WaitListComponent,
    WaitlistItemComponent,
    WaitlistItemProductComponent,
    RefactorOrderComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    ShopRoutingModule,
  ],
  exports:[
    CategoryPanelComponent,
    ShopMainComponent,
    SplitpipePipe,
    ProductCategoryComponent,
    StarsDirective,
    FiltersComponent,
    CategoryItemComponent,
    CategoryItemsFieldComponent,
    ColorDirective,
    ProductComponent,
    ProductSwiperComponent,
    SelectedProductsComponent,
    SelectedProductsItemComponent,
    BasketComponent,
    OrderComponent,
    WaitListComponent,
    WaitlistItemComponent,
    WaitlistItemProductComponent,
    RefactorOrderComponent,
  ],

})
export class ShopModule { }
