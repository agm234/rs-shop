import { Pipe, PipeTransform } from '@angular/core';
import { IShopItem } from '../models/shop.models';

@Pipe({
  name: 'splitpipe',
})
export class SplitpipePipe implements PipeTransform {

  transform(value: IShopItem[] | null): Array<IShopItem[]> | null {
    var arrays = [], size = 6;
    while ((value as IShopItem[] ).length > 0)
      arrays.push((value as IShopItem[] ).splice(0, size));
    return arrays;
  }

}
