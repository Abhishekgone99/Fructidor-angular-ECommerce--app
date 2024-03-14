import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SearchBarComponent, HeaderComponent, ProductsComponent],
})
export class HomeComponent {}
