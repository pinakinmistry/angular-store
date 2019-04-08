# AngularStore

## Overview

Angular Store is a simple prototype of an online store with following features:
1. Product Listing: Search, add/remove from cart
2. Product Detail: View details, add/remove from cart
3. Cart Listing: View selected products, update quantities, remove one, clear cart and show totals
4. Cart Info: Cart info should be visible to provide summary of selected items and total
5. Navigation: User should be able to navigate around and identify actions easily

## Tech Details
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

- Angular Material is used for modern look and feel

- ProductsList, ProductDetail, Cart are page level components swapped using client side routing

- CartInfo is a reusable component used at 3 places to provide summary of cart's content

- ProductService is the common service between these components. It does all the heavy lifting to provide mocked data, handle user actions, and running math on cart content. This is to keep all the component light weight as per Angular's style guide.

## Local Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

This app is deployed as github page using `angular-cli-ghpages`

Refer `https://alligator.io/angular/deploying-angular-app-github-pages/` for details

## TODO

- ProductModule to hold ProductsList and ProductDetail components
- CartModule to hold Cart and CartInfo components
- Split ProductService into ProductService and CartService
- Lazy Loading
