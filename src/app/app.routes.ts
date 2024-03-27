import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { NewsDetailsComponent } from './component/news-details/news-details.component';
import { CompanyOverviewComponent } from './component/company-overview/company-overview.component';
import { CompanyProductsComponent } from './component/company-products/company-products.component';
import { CompanyContactComponent } from './component/company-contact/company-contact.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CompanyResolver } from './resolver/company.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loginorsiginup', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'news', component: NewsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'selectedProduct/:listing_type/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailsComponent,
    resolve: {
      companyData: CompanyResolver
    },
    children: [
      { path: 'overview', component: CompanyOverviewComponent },
      { path: 'ourProducts', component: CompanyProductsComponent },
      { path: 'contactUs', component: CompanyContactComponent },
    ],
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
  },
];
