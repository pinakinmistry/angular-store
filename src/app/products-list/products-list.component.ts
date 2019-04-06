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
  displayedColumns: string[] = ['name', 'price', 'image'];
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

}
