import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers : [AuthService]
})
export class LoginComponent {
username: string = '';
password: string = '';
loginStatus: string = '';

constructor(private authService: AuthService, private router: Router) { }

login() {
  this.authService.login(this.username, this.password).subscribe(
    response => {
      this.loginStatus = 'Login successful!';
      window.alert('Login successful! Redirecting to home-screen.');
      this.router.navigate(['/home']);
    },
    error => {
      this.loginStatus = 'Login failed!';
      const errorMessage = error.error.error || 'An error occurred';
      console.error('Login Error:', errorMessage);
      window.alert(errorMessage); 
    }
  );
}
}
