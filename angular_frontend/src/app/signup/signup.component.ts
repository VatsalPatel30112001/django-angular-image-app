import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  constructor(private http: HttpClient, private router: Router) {}
  submitForm() {
    const formData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true,
    };

    this.http
      .post('http://localhost:8000/signup', formData, httpOptions)
      .subscribe(
        (response: { failed: string } | any) => {
          if (!('success' in response)) {
            this.message = response.failed;
          } else {
            this.router.navigate(['/image']);
            console.log('successfully done');
          }
        },
        (error) => {
          console.error('Form submission failed', error);
        }
      );
  }

  getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || '';
    }
    return '';
  }
}
