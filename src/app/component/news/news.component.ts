import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  imports: [HeaderComponent, SearchBarComponent],
})
export class NewsComponent {}
