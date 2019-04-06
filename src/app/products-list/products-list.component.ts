import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'cartAction'];
  dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.dataSource = new MatTableDataSource(products);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addToCart(id: number): void {
    this.productService.addToCart(id);
  }

  isProductInCart(id: number): boolean {
    return this.productService.isProductInCart(id);
  }

  getCartSize(): number {
    return this.productService.getCartSize();
  }

  getCartTotalAmount(): number {
    return this.productService.getCartTotalAmount();
  }

  removeFromCart(id: number): void {
    this.productService.removeFromCart(id);
  }
}
