import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuoteModel } from '../../model/quote-model';
import { ProductsService } from '../../service/products-Service/products.service';
@Component({
  selector: 'app-quote-modal',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './quote-modal.component.html',
  styleUrl: './quote-modal.component.css',
})
export class QuoteModalComponent implements OnInit {
  @Input() productId: any;
  @Input() productDetails: any;
  quoteModel = new QuoteModel('', '', '', '', 0, '');
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    debugger;
    this.productDetails;
  }

  navigateToProductDetails(listingType: string, productId: number) {
    this.router.navigate(['selectedProduct', listingType, productId]);
  }

  navigateToCompany(companyId: number) {
    this.router.navigate(['company', companyId]);
  }

  onSubmit() {
    debugger;
    console.log(this.quoteModel);
    this.productService
      .postQuoteRequest(this.productDetails[0].company_id, this.quoteModel)
      .subscribe({
        next: (res) => {
          console.log('Quote request submitted successfully:', res);
          alert('successfully posted the request');
        },
        error: (err) => {
          console.error('Error submitting quote request:', err);
          alert('Error Occured');
        },
      });
  }
}
