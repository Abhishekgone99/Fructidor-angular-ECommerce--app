import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../../service/products-Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { SearchService } from '../../service/search-service/search.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  imports: [HeaderComponent, SearchBarComponent, RatingComponent],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any[] = [];
  productList: any[] = [];
  productId: any;
  listingType: any;
  rating: any;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.listingType = params.get('listing_type');
      if (this.productId && this.listingType) {
        this.fetchProductOfferDetails();
      }
    });
    // let id = this.route.snapshot.paramMap.get('id');
    // this.productId = id;
    // this.fetchProductOfferDetails();
  }

  fetchProductOfferDetails() {
    if (this.listingType === 'offer') {
      this.productsService.getProductOfferDetails().subscribe({
        next: (res) => {
          this.productList = res.slice(0, 4);
          this.productDetails = res.filter(
            (product: any) => product.id == this.productId
          );
        },
      });
    } else if (this.listingType === 'demand') {
      this.productsService.getProductDemandDetails().subscribe({
        next: (res) => {
          this.productList = res.slice(0, 4);
          this.productDetails = res.filter(
            (product: any) => product.id == this.productId
          );
        },
      });
    }
  }

  navigateToProductDetails(listingType: string, productId: number) {
    this.router.navigate(['selectedProduct', listingType, productId]);
  }

  navigateToCompany(companyId: number) {
    this.router.navigate(['company', companyId]);
  }
}
