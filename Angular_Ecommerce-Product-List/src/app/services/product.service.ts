import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../Models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Flagship with titanium build, A17 Pro chip, and advanced zoom.',
      price: 67744,
      image: 'assets/iPhone 15 Pro Max.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      description: 'Compact premium phone with A17 Pro chip and USB-C.',
      price: 56444,
      image: 'assets/iPhone 15 Pro.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 3,
      name: 'iPhone 15 Plus',
      description: 'Large display, A16 chip, and excellent cameras.',
      price: 50794,
      image: 'assets/iPhone 15 Plus.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 4,
      name: 'iPhone 15',
      description: 'Standard model with A16 chip and USB-C.',
      price: 45144,
      image: 'assets/iPhone 15.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 5,
      name: 'iPhone SE (3rd Gen)',
      description: 'Budget-friendly with A15 chip and 5G.',
      price: 24238,
      image: 'assets/iPhone SE (3rd Gen).jpg',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'iPhone 14 Pro Max',
      description: ' High-end features, A16 chip, and 48MP camera.',
      price: 33844,
      image: 'assets/iPhone 14 Pro Max.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'iPhone 14 Pro',
      description: 'Dynamic island and always-on display.',
      price: 45144,
      image: 'assets/iPhone 14 Pro.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'iPhone 14 Plus',
      description: 'Big screen, A15 chip, and long battery life.',
      price: 45144,
      image: 'assets/iPhone 14 Plus.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'iPhone 13 Mini',
      description: 'Compact with A15 chip and dual cameras.',
      price: 45144,
      image: 'assets/iPhone 13 Mini.jpg',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'iPhone 13',
      description: 'Balanced design with great performance.',
      price: 33844,
      image: 'assets/iPhone 13.jpg',
      category: 'Stuff Toy'
    },
  
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }
}