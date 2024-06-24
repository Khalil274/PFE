import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/Login.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.userService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        this.successMessage = 'Login successful!';
        // Redirect to userblogs page upon successful login
        this.router.navigate(['/user-events']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }
}
