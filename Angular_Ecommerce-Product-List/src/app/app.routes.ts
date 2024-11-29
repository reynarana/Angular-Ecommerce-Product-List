import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
export const routes: Routes = [
    { path: 'products', component: ProductComponent }, // Use ProductComponent, not ProductService
    { path: '', redirectTo: '/products', pathMatch: 'full' } // Redirect to products by default
];