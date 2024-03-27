import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsService } from '../service/products-Service/products.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolver implements Resolve<any> {
  constructor(private productService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const companyId = route.paramMap.get('id');
    
    // Fetching required data for the company using forkJoin to handle multiple HTTP requests
    return forkJoin([
      this.productService.getBasicCompanyDetails(companyId),
      this.productService.getStaffDetails(companyId),
      this.productService.getCompanyStats(companyId),
      this.productService.getAdditionalComapnyDetails(companyId),
      this.productService.getCompanyprofile(companyId),
      this.productService.getCurrentOffers(companyId),
      this.productService.getCurrentDemands(companyId),
      this.productService.getCompanyProducts(companyId),
      this.productService.getImportsFrom(companyId),
      this.productService.getCompanyNews(companyId)
    ]).pipe(
      catchError(error => {
        console.error('Error occurred while resolving company data:', error);
        return []; // Return empty array or handle error as per your requirement
      })
    );
  }
}
