import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../../service/products-Service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  imports: [HeaderComponent, SearchBarComponent],
})
export class NewsComponent implements OnInit {
  newsList: any[] = [];
  @Input() companyId: any;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchNewsList();
  }

  fetchNewsList() {
    this.productsService.getNewsList().subscribe({
      next: (res) => {
        this.newsList = res;
      },
    });
  }

  navigateToNewsDetails(newsId: number) {
    this.router.navigate(['news', newsId]);
  }

  onSearchChanged(searchTerm: string) {
    // Navigate to products component with the search term
    this.router.navigate(['/home']);
  }
}
