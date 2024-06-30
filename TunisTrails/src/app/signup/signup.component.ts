import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Classes/User';  // Adjust the path as necessary
import { Role } from '../Classes/Role.enum'
import { UserService } from '../Services/User.Service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    if (this.signupForm.valid) {
      const user: User = {
        id: 0, // You may set this to 0 or handle it appropriately
        name: this.signupForm.get('name')?.value,
        phone: this.signupForm.get('phone')?.value,
        address: this.signupForm.get('address')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
        role: Role.USER // Assuming Role is imported and properly defined
      };

      this.userService.register(user).subscribe(
        (response) => {
          console.log('Registration successful!', response);
          // Optionally navigate to a success page or handle success scenario
          this.router.navigate(['/login']); // Example: navigate to login page
        },
        (error) => {
          console.error('Registration error:', error);
          this.errorMessage = error.message || 'Registration failed. Please try again.';
          // Handle error scenario, display error message to user
        }
      );
    }
  }
}
