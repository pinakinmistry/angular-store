import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

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

  addToCart(event, id: number): void {
    event.stopPropagation();
    this.productService.addToCart(id);
  }

  isProductInCart(id: number): boolean {
    return this.productService.isProductInCart(id);
  }

  removeFromCart(event, id: number): void {
    event.stopPropagation();
    this.productService.removeFromCart(id);
  }

  showProductDetails(product): void {
    this.router.navigate(['/product', product.id]);
  }
}
