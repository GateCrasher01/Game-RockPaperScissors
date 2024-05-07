import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers : [AuthService]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  registrationStatus: string | null = null;
 
 
  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.username, this.email,  this.password)
      .subscribe(
        response => {
          if (response.message === 'User registered successfully') {
            this.registrationStatus = 'Registration successful!';
            // Show alert
            console.log(this.registrationStatus);
            window.alert('Registration successful! Please login.');
            // Redirect to login after successful registration
            this.router.navigate(['/login']);
          } else {
            this.registrationStatus = 'User already exists or registration failed!';
            console.log(this.registrationStatus);
          }
        },
        error => {
          this.registrationStatus = 'Error: Could not connect to server';
          console.log(this.registrationStatus);
          console.error('Registration Error:' +error);
        }
      );
  }
}
