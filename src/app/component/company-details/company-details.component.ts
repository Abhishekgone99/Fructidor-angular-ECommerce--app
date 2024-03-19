import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products-Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CompanyOverviewComponent } from '../company-overview/company-overview.component';
import { CompanyProductsComponent } from '../company-products/company-products.component';
import { NewsComponent } from '../news/news.component';
import { CompanyContactComponent } from '../company-contact/company-contact.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-company',
  standalone: true,
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css',
  imports: [
    HeaderComponent,
    CompanyOverviewComponent,
    CompanyProductsComponent,
    NewsComponent,
    CompanyContactComponent,
    NgbProgressbarModule,
  ],
})
export class CompanyDetailsComponent implements OnInit {
  companyId: any;
  basicCompanyDetails: any;
  staffDetails: any;
  companyStats: any;
  additionalCompanyDetails: any;
  companyProfile: any;
  selectedTab: any;
  newsList: any;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.companyId = params.get('id');
    });
    this.fetchBasicCompanyDetails();
    this.fetchStaffDetails();
    this.fetchCompanyStats();
    this.fetchAdditionalCompanyDetails();
    this.fetchCompanyProfile();
    this.fetchCompanyNews();

    this.selectedTab = 'overview';
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

  // navigateToOverview() {
  //   this.router.navigate(['/overview']);
  // }

  // navigateToProducts() {}

  // navigateToNews() {}

  // navigateToContactus() {}

  showTab(tabName: string) {
    this.selectedTab = tabName;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tabName },
      queryParamsHandling: 'merge',
    });
  }

  fetchCompanyNews() {
    this.productService.getCompanyNews(this.companyId).subscribe({
      next: (res) => {
        this.newsList = res;
      },
    });
  }

  navigateToNewsDetails(newsId: number) {
    this.router.navigate(['news', newsId]);
  }
}
