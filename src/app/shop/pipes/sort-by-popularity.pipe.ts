import { Pipe, PipeTransform } from '@angular/core';
import { IShopItem } from '../models/shop.models';

@Pipe({
  name: 'sortByPopularity',
})
export class SortByPopularityPipe implements PipeTransform {


  transform(value: IShopItem[] | null, isDesc:boolean, arg?: string):IShopItem[] | null {
    if (arg === 'popular') {
      return this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: IShopItem[] | null, isDesc:boolean) {
    const sortedValue = (value as IShopItem[]).sort((val1:IShopItem, val2:IShopItem) => {
      const valOne = +val1.rating;
      const valTwo = +val2.rating;
      return valOne - valTwo;
    });
    if (isDesc) {
      return sortedValue;
    }
    return sortedValue.reverse();
  }


}
