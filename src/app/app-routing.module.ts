import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsListComponent} from './products-list/products-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
