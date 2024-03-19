import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-contact',
  standalone: true,
  imports: [],
  templateUrl: './company-contact.component.html',
  styleUrl: './company-contact.component.css',
})
export class CompanyContactComponent {
  @Input() companyId: any;
}
