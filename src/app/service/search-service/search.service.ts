import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTermSource = new BehaviorSubject<string>('');
  searchTerm = this.searchTermSource.asObservable();

  constructor() {}

  changeSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }
}
