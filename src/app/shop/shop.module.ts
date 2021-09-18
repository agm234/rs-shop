import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import {SharedModule} from '../shared/shared.module';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { SplitpipePipe } from './pipes/splitpipe.pipe';
import { StarsDirective } from './directives/stars.directive';
import { ProductCategoryComponent } from './components/product-category/product-category.component'

import { ShopRoutingModule } from './shop-routing.module';
import { FiltersComponent } from './components/filters/filters.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryItemsFieldComponent } from './components/category-items-field/category-items-field.component';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { SortByPopularityPipe } from './pipes/sort-by-popularity.pipe';
import { ColorDirective } from './directives/color.directive';
import { ProductComponent } from './components/product/product.component';
import { SwiperModule } from 'swiper/angular';
import { ProductSwiperComponent } from './components/product-swiper/product-swiper.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { SelectedProductsItemComponent } from './components/selected-products-item/selected-products-item.component';

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
    SelectedProductsItemComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    ShopRoutingModule
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
    SelectedProductsItemComponent
  ]
})
export class ShopModule { }
