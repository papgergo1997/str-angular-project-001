import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() search: string = '';
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSearch(event: Event): void {
    this.search = (event.target as HTMLInputElement).value;
  }

}
