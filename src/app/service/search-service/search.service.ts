import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchTerm = new BehaviorSubject<string>('');
  // searchTerm = this.searchTermSource.asObservable();

  get searchTerm() {
    return this._searchTerm.asObservable();
  }

  constructor() {}

  setSearchTerm(term: string) {
    this._searchTerm.next(term);
  }
}
