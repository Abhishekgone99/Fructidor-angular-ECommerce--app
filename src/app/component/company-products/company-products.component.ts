import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products-Service/products.service';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-company-products',
  standalone: true,
  templateUrl: './company-products.component.html',
  styleUrl: './company-products.component.css',
  imports: [RatingComponent],
})
export class CompanyProductsComponent implements OnInit {
  ourProducts: any;
  importCountries: any;
  @Input() companyId: any;

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.fetchCompanyProducts();
    this.fetchImportsFrom();
  }

  fetchCompanyProducts() {
    this.productService.getCompanyProducts(this.companyId).subscribe({
      next: (res) => {
        this.ourProducts = res;
      },
    });
  }

  fetchImportsFrom() {
    this.productService.getImportsFrom(this.companyId).subscribe({
      next: (res) => {
        this.importCountries = res;
      },
    });
  }
}
