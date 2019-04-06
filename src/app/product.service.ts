import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart: Array<{id: number, quantity: number}> = [];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getCart(): Observable<{id: number, quantity: number}[]> {
    return of(this.cart);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  isProductInCart(id: number): boolean {
    return this.cart.some(product => product.id === id);
  }

  addToCart(id: number): void {
    this.cart.push({
      id,
      quantity: 1,
    });
  }
}
