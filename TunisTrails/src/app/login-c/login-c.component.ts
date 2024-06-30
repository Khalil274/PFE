import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/Login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      this.loginService.login(email, password).subscribe(
        (authResponse) => {
          if (authResponse.role === 'AGENCY') { // Check if the role is 'AGENCY'
            console.log('Login successful!', authResponse);
            sessionStorage.setItem('token', authResponse.jwt);
            sessionStorage.setItem('name', authResponse.name);
            sessionStorage.setItem('role', authResponse.role);
            
            this.router.navigate(['/agevents']);
          } else {
            this.errorMessage = 'Access denied. Only agencies can log in.';
          }
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      );
    }
  }
}
