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

  private _newsListUrl = 'https://marketplace.hashagile.com//api/news';

  private _basiccompanyDetailsUrl =
    'https://marketplace.hashagile.com//api/company/basic_company_details';

  private _staffDetailsUrl = 'https://marketplace.hashagile.com//api/company';

  private _companyStatsUrl =
    'https://marketplace.hashagile.com//api/company/company_stats';

  private _additionalComapnyDetailsUrl =
    'https://marketplace.hashagile.com//api/company/additional_details';

  private _companyProfileUrl =
    'https://marketplace.hashagile.com//api/company/company_profile';

  private _currentOffersUrl = 'https://marketplace.hashagile.com//api/company';
  private _currentDemandsUrl = 'https://marketplace.hashagile.com//api/company';

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
    return this.http
      .get(this._produtOfferDetailsUrl)
      .pipe(catchError(this.errorHandler));
  }

  getProductDemandDetails(): Observable<any> {
    return this.http
      .get(this._produtDemandDetailsUrl)
      .pipe(catchError(this.errorHandler));
  }

  getNewsList(): Observable<any> {
    return this.http
      .get(`${this._newsListUrl}?lang=en`)
      .pipe(catchError(this.errorHandler));
  }

  getNewsDetails(newsId: any): Observable<any> {
    return this.http
      .get(`${this._newsListUrl}/${newsId}?lang=en`)
      .pipe(catchError(this.errorHandler));
  }

  getBasicCompanyDetails(companyId: any): Observable<any> {
    return this.http
      .get(`${this._basiccompanyDetailsUrl}/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  getStaffDetails(companyId: any): Observable<any> {
    return this.http
      .get(`${this._staffDetailsUrl}/${companyId}/staffs`)
      .pipe(catchError(this.errorHandler));
  }

  getCompanyStats(companyId: any): Observable<any> {
    return this.http
      .get(`${this._companyStatsUrl}/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  getAdditionalComapnyDetails(companyId: any): Observable<any> {
    return this.http
      .get(`${this._additionalComapnyDetailsUrl}/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  getCompanyprofile(companyId: any): Observable<any> {
    return this.http
      .get(`${this._companyProfileUrl}/${companyId}`)
      .pipe(catchError(this.errorHandler));
  }

  getCurrentOffers(companyId: any): Observable<any> {
    return this.http.get(
      `${this._currentOffersUrl}/${companyId}/offer_details?lang-en`
    );
  }

  getCurrentDemands(companyId: any): Observable<any> {
    return this.http.get(
      `${this._currentDemandsUrl}/${companyId}/demand_details?lang=en`
    );
  }

  getCompanyProducts(companyId: any): Observable<any> {
    const _url = 'https://marketplace.hashagile.com//api/company';
    return this.http.get(`${_url}/${companyId}/offer_details?lang=en`);
  }

  getImportsFrom(companyId: any): Observable<any> {
    const _url = 'https://marketplace.hashagile.com//api/company/imports';
    return this.http.get(`${_url}/${companyId}`);
  }

  getCompanyNews(companyId: any): Observable<any> {
    const _url = 'https://marketplace.hashagile.com//api/company';
    return this.http.get(`${_url}/${companyId}/news`);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.statusText));
  }
}
