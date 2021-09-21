import { Pipe, PipeTransform } from '@angular/core';
import { IShopItem } from '../models/shop.models';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {

  transform(value: IShopItem[] | null, isDesc:boolean, arg?: string):IShopItem[] | null {
    if (arg === 'price') {
      return this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: IShopItem[] | null, isDesc:boolean) {
    const sortedValue = (value as IShopItem[]).sort((val1:IShopItem, val2:IShopItem) => {
      const valOne = +val1.price;
      const valTwo = +val2.price;
      return valOne - valTwo;
    });
    if (isDesc) {
      return sortedValue;
    }
    return sortedValue.reverse();
  }

}
