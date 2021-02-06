import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nyolcas terminál';

  list: Observable<Product[]> = this.productService.getAll();
  }

  constructor(
    private productService: ProductService
  ) { }
  
}
