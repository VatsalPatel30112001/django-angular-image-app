import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  images: any[] = [];

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages() {
    this.http.get('http://localhost:8000/image').subscribe(
      (response: any) => {
        this.images = JSON.parse(response);
      },
      (error) => {
        console.error('Error fetching images', error);
      }
    );
  }

  image: File | null = null;
  title: string = '';
  desc: string = '';
  message: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {}
  onFileSelected(event: any): void {
    this.image = event.target.files[0];
  }
  submitForm() {
    if (this.image) {
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.title);
      formData.append('desc', this.desc);

      const httpOptions = {
        headers: new HttpHeaders({
          'X-CSRFToken': this.getCookie('csrftoken'),
        }),
        withCredentials: true,
      };

      this.http
        .post('http://localhost:8000/image', formData, httpOptions)
        .subscribe(
          (response: { failed: string } | any) => {
            console.log(response);
            if (!('success' in response)) {
              this.message = response.failed;
            } else {
              window.location.reload();
            }
          },
          (error) => {
            console.error('Form submission failed', error);
          }
        );
    }
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
