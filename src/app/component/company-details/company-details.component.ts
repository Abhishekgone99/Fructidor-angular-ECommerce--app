import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products-Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-company',
  standalone: true,
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css',
  imports: [HeaderComponent],
})
export class CompanyDetailsComponent implements OnInit {
  companyId: any;
  basicCompanyDetails: any;
  staffDetails: any;
  companyStats: any;
  additionalCompanyDetails: any;
  companyProfile: any;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.companyId = params.get('id');
    });
  }

  fetchBasicCompanyDetails() {
    this.productService.getBasicCompanyDetails(this.companyId).subscribe({
      next: (res) => {
        this.basicCompanyDetails = res;
      },
    });
  }

  fetchStaffDetails() {
    this.productService.getStaffDetails(this.companyId).subscribe({
      next: (res) => {
        this.staffDetails = res;
      },
    });
  }

  fetchCompanyStats() {
    this.productService.getCompanyStats(this.companyId).subscribe({
      next: (res) => {
        this.companyStats = res;
      },
    });
  }

  fetchAdditionalCompanyDetails() {
    this.productService.getAdditionalComapnyDetails(this.companyId).subscribe({
      next: (res) => {
        this.additionalCompanyDetails = res;
      },
    });
  }

  fetchCompanyProfile() {
    this.productService.getCompanyprofile(this.companyId).subscribe({
      next: (res) => {
        this.companyProfile = res;
      },
    });
  }
}
