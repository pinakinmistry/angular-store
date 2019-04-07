import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { Cart } from './cart';
import { PRODUCTS } from './mock-products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart: Array<Cart> = [];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getCart(): Observable<Cart[]> {
    return of(this.cart);
  }

  getCartSize(): number {
    return this.cart.length;
  }

  getCartTotalQuantity(): number {
    return this.cart.reduce((total, product) => total + +product.quantity, 0);
  }

  getCartTotalAmount(): number {
    return this.cart.reduce((total, product) => total + product.quantity * product.price, 0);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  isProductInCart(id: number): boolean {
    return this.cart.some(product => product.id === id);
  }

  addToCart(id: number): void {
    const product = PRODUCTS.find(product => product.id === id);
    this.cart.push({
      id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(product => product.id !== id);
  }

  updateQuantity(id, updatedQuantity): void {
    this.cart = this.cart.map(product => {
      if(product.id === id) {
        product.quantity = updatedQuantity;
      }
      return product;
    })
  }

  clearCart(): void {
    this.cart = [];
  }
}
