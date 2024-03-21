import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { ContactUs } from '../../model/contact-us';
import { ProductsService } from '../../service/products-Service/products.service';

@Component({
  selector: 'app-company-contact',
  standalone: true,
  imports: [GoogleMapsModule, FormsModule],
  templateUrl: './company-contact.component.html',
  styleUrl: './company-contact.component.css',
})
export class CompanyContactComponent implements OnInit {
  @Input() companyId: any;
  staffDetails: any;

  center: google.maps.LatLngLiteral = {
    lat: 17.476634220898763,
    lng: 78.38607899554027,
  };
  zoom = 6;
  contactModel = new ContactUs('', '', '');

  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.fetchStaffDetails();
  }

  fetchStaffDetails() {
    this.productService.getStaffDetails(this.companyId).subscribe({
      next: (res) => {
        this.staffDetails = res;
      },
    });
  }

  onSubmit() {
    console.log(this.contactModel);
  }
}
