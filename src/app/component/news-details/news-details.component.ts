import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products-Service/products.service';

@Component({
  selector: 'app-news-details',
  standalone: true,
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css',
  imports: [HeaderComponent, SearchBarComponent],
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any;
  newsId: any;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.newsId = params.get('id');
    });
    this.fetchNewsDetails();
  }

  fetchNewsDetails() {
    this.productsService.getNewsDetails(this.newsId).subscribe({
      next: (res) => {
        this.newsDetails = res;
      },
    });
  }

  navigateToNews() {
    this.router.navigate(['news']);
  }
}
