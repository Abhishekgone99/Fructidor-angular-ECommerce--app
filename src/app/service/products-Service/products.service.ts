import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private _productsUrl = 'https://marketplace.hashagile.com/api/search?lang=en';
  private _filterCategoriesUrl =
    'https://marketplace.hashagile.com/api/filter_categories?lang=en';

  private _produtOfferDetailsUrl =
    'https://marketplace.hashagile.com/api/offer_details?lang=en';

  private _produtDemandDetailsUrl =
    'https://marketplace.hashagile.com/api/demand_details?lang=en';

  getProducts(payload: any): Observable<any> {
    return this.http
      .post(this._productsUrl, payload)
      .pipe(catchError(this.errorHandler));
  }

  getFilterCategories(): Observable<any> {
    return this.http
      .get(this._filterCategoriesUrl)
      .pipe(catchError(this.errorHandler));
  }

  getProductOfferDetails(): Observable<any> {
    debugger;
    return this.http
      .get(this._produtOfferDetailsUrl)
      .pipe(catchError(this.errorHandler));
  }

  getProductDemandDetails(): Observable<any> {
    debugger;
    return this.http
      .get(this._produtDemandDetailsUrl)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.statusText));
  }
}
