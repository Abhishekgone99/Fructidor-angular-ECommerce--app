import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products-Service/products.service';
import { Router } from '@angular/router';
import { SearchService } from '../../service/search-service/search.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filterCategories: any;
  erroMsg: any;
  payload: any = {
    query: '',
    listing_type: ['offer', 'demand'],
    origin: [],
    company: [],
  };
  activeButton: string = 'all';
  selectedOption: string = '1';
  constructor(
    private productService: ProductsService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // this.fetchProducts();
    this.searchService.searchTerm.subscribe((term: string) => {
      this.payload.query = term;
      this.fetchProducts();
    });
    this.fetchFilterCategories();
  }

  fetchProducts() {
    this.productService.getProducts(this.payload).subscribe({
      next: (res) => (this.products = res),
      error: (err) => (this.erroMsg = err),
    });
  }

  fetchFilterCategories() {
    this.productService.getFilterCategories().subscribe({
      next: (res) => (this.filterCategories = res),
      error: (err) => (this.erroMsg = err),
    });
  }

  filterProductsByListingType(listingType: string) {
    this.activeButton = listingType;
    if (listingType === 'all') {
      this.payload.listing_type = [];
    } else {
      this.payload.listing_type = [listingType];
    }
    this.fetchProducts();
  }

  isActive(button: string): boolean {
    return this.activeButton === button;
  }

  navigateToProductDetails(listingType: string, productId: number) {
    this.router.navigate(['selectedProduct', listingType, productId]);
  }

  navigateToCompany(companyId: number) {
    this.router.navigate(['company', companyId]);
  }

  sortProducts(value: any) {
    debugger;
    if (value === this.selectedOption) {
      return; // No need to sort if the sorting option hasn't changed
    }
    this.selectedOption = value;
    if (value === '2') {
      this.sortProductsByName();
    } else if (value === '1') {
      this.sortProductsLatest();
    }
  }

  sortProductsLatest() {
    debugger;
    const sortproducts = [...this.products];
    this.products = sortproducts.sort((a, b) => {
      return b.created_at - a.created_at;
    });
    console.log('latest', this.products);
  }

  sortProductsByName() {
    debugger;
    const sortproducts = [...this.products];
    this.products = sortproducts.sort((a, b) =>
      a.product_type_name.localeCompare(b.product_type_name)
    );
    console.log('alphabatical', this.products);
  }
}
