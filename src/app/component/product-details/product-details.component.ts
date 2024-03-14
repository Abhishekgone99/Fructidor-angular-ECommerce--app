import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../../service/products-Service/products.service';
import { ActivatedRoute } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';

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
  listing_type: any;
  rating: any;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    debugger;
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.listing_type = params.get('listingType');
      if (this.productId) {
        this.fetchProductOfferDetails();
      }
    });
    // let id = this.route.snapshot.paramMap.get('id');
    // this.productId = id;
    // this.fetchProductOfferDetails();
  }

  fetchProductOfferDetails() {
    debugger;
    if (this.listing_type === 'offer') {
      this.productsService.getProductOfferDetails().subscribe({
        next: (res) => {
          this.productList = res;
          this.productDetails = res.filter(
            (product: any) => product.id == this.productId
          );
        },
      });
    } else if (this.listing_type === 'demand') {
      this.productsService.getProductDemandDetails().subscribe({
        next: (res) => {
          this.productList = res;
          this.productDetails = res.filter(
            (product: any) => product.id == this.productId
          );
        },
      });
    }
  }
}
