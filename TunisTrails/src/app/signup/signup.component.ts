import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and Validators
import { User } from '../Classes/User';
import { UserService } from '../Services/User.Service';
import { Role } from '../Classes/Role.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  roles = Role; // Expose Role enum to the template

  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: Role.USER, // Default role
    phone: '',
    address: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the form with FormBuilder
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [''],
      address: [''],
      role: [Role.USER, Validators.required] // Add role control with default value
    });
  }

  // Getter method to access form controls easily in the template
  get f() { return this.signupForm.controls; }

  onSubmit() {
    // Stop here if the form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Assign form values to user object
    this.user.name = this.f['name'].value;
    this.user.email = this.f['email'].value;
    this.user.password = this.f['password'].value;
    this.user.phone = this.f['phone'].value;
    this.user.address = this.f['address'].value;
    this.user.role = this.f['role'].value;

    // Call UserService to register the user
    this.userService.register(this.user).subscribe(
      response => {
        // Handle successful registration (e.g., navigate to a different page)
        if (this.user.role === Role.AGENCY) {
          this.router.navigate(['/agency-dashboard']); // Navigate to agency dashboard
        } else {
          this.router.navigate(['/login']); // Navigate to login or user dashboard
        }
      },
      error => {
        // Handle error
        console.error(error);
      }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl!.setErrors(null);
    }
  }
}
