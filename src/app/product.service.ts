import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart: Array<{id: number, quantity: number, price: number}> = [];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getCartSize(): number {
    return this.cart.length;
  }

  getCartTotalAmount(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
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
      price: PRODUCTS.find(product => product.id === id).price,
    });
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(product => product.id !== id);
  }
}
