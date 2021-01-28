import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [
    {
      id: 1,
      catId: 1,
      name: '3 nap Barcelonában',
      description: 'Több szöveg Barcelonáról',
      image: '1.png',
      price: 120000,
      salesPrice: 90000,
      stock: 13,
      featured: true,
      active: true
    },
    {
      id: 2,
      catId: 1,
      name: '3 nap Londonban',
      description: 'Több szöveg Londonról',
      image: '2.png',
      price: 190000,
      salesPrice: 150000,
      stock: 4,
      featured: false,
      active: true
    },
    {
      id: 3,
      catId: 2,
      name: '3 nap Hévízen',
      description: 'Több szöveg Hévízről',
      image: '3.png',
      price: 120000,
      salesPrice: 90000,
      stock: 19,
      featured: true,
      active: true
    },
    {
      id: 4,
      catId: 2,
      name: '5 nap Gyulán',
      description: 'Több szöveg Gyuláról',
      image: '4.png',
      price: 120000,
      salesPrice: 90000,
      stock: 11,
      featured: false,
      active: true
    },
  ]
  constructor() { }
}
