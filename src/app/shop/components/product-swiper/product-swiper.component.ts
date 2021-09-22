import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IShopItem } from '../../models/shop.models';
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
@Component({
  selector: 'app-product-swiper',
  templateUrl: './product-swiper.component.html',
  styleUrls: ['./product-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductSwiperComponent {
  @Input() product?: IShopItem;

  thumbsSwiper: any;

}
