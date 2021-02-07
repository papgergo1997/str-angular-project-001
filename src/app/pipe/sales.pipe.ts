import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sales'
})
export class SalesPipe implements PipeTransform {

  transform(productList: Product[], salesPrice: number): Product[] {
    if (!Array.isArray(productList) || !salesPrice) {
      return productList
    }
    return productList.filter(item => item.salesPrice ? salesPrice > 0 : false)
  }

}
