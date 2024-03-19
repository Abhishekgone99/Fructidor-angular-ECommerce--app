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
  selectedSortOption: string = 'newListing';

  constructor(
    private productService: ProductsService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchFilterCategories();
    // this.sortProducts('newListing');
    this.searchService.searchTerm.subscribe((term: string) => {
      this.payload.query = term;
      this.fetchProducts();
    });
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

  //   sortProducts(option: string) {
  //     debugger;
  //     this.selectedSortOption = option;
  //     if (option === 'newListing') {
  //       this.products.sort((a, b) => {
  //         let date1 = new Date(b.updated_at);
  //         let date2 = new Date(a.updated_at);
  //         return date1.valueOf() - date2.valueOf();
  //       });
  //     } else if (option === 'productName') {
  //       this.products.sort((a, b) => {
  //         return a.product_type_name.localeCompare(b.product_type_name);
  //       });
  //     }
  //   }

  sortProductsLatest() {
    this.products.sort((a, b) => {
      let date1 = new Date(b.updated_at);
      let date2 = new Date(a.updated_at);
      return date1.valueOf() - date2.valueOf();
    });
  }

  sortProductsByName() {
    this.products.sort((a, b) => {
      return a.product_type_name.localeCompare(b.product_type_name);
    });
  }
}
