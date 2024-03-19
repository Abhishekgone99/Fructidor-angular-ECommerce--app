import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products-Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgbProgressbarConfig,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-overview',
  standalone: true,
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.css',
  imports: [NgbProgressbarModule],
})
export class CompanyOverviewComponent implements OnInit {
  @Input() companyProfile: any;
  @Input() additionalCompanyDetails: any;
  @Input() companyStats: any;
  @Input() companyId: any;
  productsList: any;
  activeButton: string = 'offer';

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    config: NgbProgressbarConfig
  ) {
    config.height = '6px';
  }
  ngOnInit(): void {
    this.fetchProducts('offer');
  }

  toggleProducts(type: string) {
    this.activeButton = type;
    this.fetchProducts(type);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { productType: type },
      queryParamsHandling: 'merge',
    });
  }

  fetchProducts(type: string) {
    if (type === 'offer') {
      this.productService.getCurrentOffers(this.companyId).subscribe({
        next: (res) => {
          this.productsList = res;
        },
      });
    } else if (type === 'demand') {
      this.productService.getCurrentDemands(this.companyId).subscribe({
        next: (res) => {
          this.productsList = res;
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
