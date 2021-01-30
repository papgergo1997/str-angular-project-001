import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  productList: Product[] = this.productService.list.filter(item => item.catId === 1);
  productFeatured: Product[] = this.productList.filter(product => product.featured);
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
