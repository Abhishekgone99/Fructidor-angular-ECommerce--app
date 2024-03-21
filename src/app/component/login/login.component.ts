import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SigninModel } from '../../model/signin-model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  signinModel = new SigninModel('', '');

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignIn() {
    console.log(this.signinModel);
    this.router.navigate(['home']);
  }
}
