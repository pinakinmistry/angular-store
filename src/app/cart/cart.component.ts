import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import { ProductService } from '../product.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource: MatTableDataSource<Cart>;

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(): void {
    this.productService.getCart()
      .subscribe(cart => {
        this.dataSource = new MatTableDataSource(cart);
      });
  }

  clearCart(): void {
    this.productService.clearCart();
    this.getCart();
  }

  getCartSize(): number {
    return this.productService.getCartSize();
  }

  backToStore(): void {
    this.router.navigate(['/']);
  }
}
