import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ITableCol } from 'src/app/service/config-table.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  sortKey: string = '';
  phrase: string = '';
  productKeys: string[] = Object.keys(new Product());
  search: string = '';
  filterKey: string = 'name';
  productList$: Observable<Product[]> = this.productService.getAll();
  @Input() cols: ITableCol[] = [];
  @Input() productList: Product[] = [];
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter()
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter()
  @Output() createProduct: EventEmitter<Product> = new EventEmitter()

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }
  // onChangeSearch(event: Event, filterKey: string): void {
  //   this.search = (event.target as HTMLInputElement).value;
  //   this.filterKey = filterKey;
  // }

  onUpdateClick(product: Product): void {
    this.updateProduct.emit(product)
  }
  onDeleteClick(product: Product): void {
    this.deleteProduct.emit(product)
  }
  onClickCreate(product: Product): void {
    product.catId = parseInt(product.catId);
    this.createProduct.emit(product)
  }
  onChangeSort(data: string): void {
    this.sortKey = data;
  }

}
