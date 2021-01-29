import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pagi',
  templateUrl: './product-pagi.component.html',
  styleUrls: ['./product-pagi.component.scss']
})
export class ProductPagiComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
