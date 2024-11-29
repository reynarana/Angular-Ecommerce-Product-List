import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  currentView: 'mobile' | 'tablet' | 'desktop' = 'desktop';

  constructor(private productService: ProductService) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.loadProducts();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.currentView = 'mobile';
    } else if (width < 1024) {
      this.currentView = 'tablet';
    } else {
      this.currentView = 'desktop';
    }
  }

  setView(view: 'mobile' | 'tablet' | 'desktop'): void {
    this.currentView = view;
  }
}