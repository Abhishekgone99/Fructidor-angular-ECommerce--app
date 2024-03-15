import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { NewsDetailsComponent } from './component/news-details/news-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'selectedProduct/:listing_type/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailsComponent,
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
  },
];
