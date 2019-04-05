import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {name: 'Apple', description: 'Eat one every day to keep the doctor away!', price: 12, image: ''},
  {name: 'Grape', description: 'Wine is great, but grapes are even better', price: 8, image: ''},
];

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'price', 'image'];
  dataSource = new MatTableDataSource(PRODUCTS);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
