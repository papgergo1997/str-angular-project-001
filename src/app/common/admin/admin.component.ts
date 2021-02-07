import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { ConfigTableService, ITableCol } from 'src/app/service/config-table.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  constructor(
    private productService: ProductService,
    private config: ConfigTableService,
  ) { }

  ngOnInit(): void {
  }

  onUpdateClick(product: Product): void {
    this.productService.update(product).subscribe(
      updateProduct => console.log(updateProduct)
    );
  }

  onDeleteClick(product: Product): void {
    this.productService.remove(product).subscribe(
      () => console.log('deleted')
    );
  }

}
