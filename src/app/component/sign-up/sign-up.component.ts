import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../../model/signup-model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  signupModel = new SignupModel('', '', '');

  constructor(private router: Router) {}
  ngOnInit(): void {}

  createAccount() {
    console.log(this.signupModel);
    this.router.navigate(['loginorsiginup']);
  }
}
