import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getCartSize(): number {
    return this.productService.getCartSize();
  }

  getCartTotalAmount(): number {
    return this.productService.getCartTotalAmount();
  }

}
