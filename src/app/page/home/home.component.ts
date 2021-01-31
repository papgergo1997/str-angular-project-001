import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: Product[] = this.productService.list;

  productFeatured: Product[] = this.productService.list.filter(product => product.featured)

  productSales: Product[] = this.productService.list.filter(product => product.salesPrice < product.price && product.salesPrice > 0)

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
