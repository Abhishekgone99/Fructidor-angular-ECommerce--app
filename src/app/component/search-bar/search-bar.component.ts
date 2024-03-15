import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../service/search-service/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  onSearchTermChange() {
    this.searchService.changeSearchTerm(this.searchTerm);
  }
}
