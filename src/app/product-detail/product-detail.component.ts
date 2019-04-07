import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import { Product } from '../product';
import { Nutrient } from '../nutrient';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  displayedColumns: string[] = ['nutrient', 'dailyValue', 'dailyValueText'];
  dataSource: MatTableDataSource<Nutrient>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.dataSource = new MatTableDataSource(product.nutrients);
      });
  }

  addToCart(id: number): void {
    this.productService.addToCart(id);
  }

  isProductInCart(id: number): boolean {
    return this.productService.isProductInCart(id);
  }

  removeFromCart(id: number): void {
    this.productService.removeFromCart(id);
  }

  backToStore(): void {
    this.router.navigate(['/']);
  }
}
