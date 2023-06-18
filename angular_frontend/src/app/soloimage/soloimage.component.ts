import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-soloimage',
  templateUrl: './soloimage.component.html',
  styleUrls: ['./soloimage.component.css'],
})
export class SoloimageComponent {
  id: number = 0;
  image: any[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fetchImage();
  }

  fetchImage() {
    this.http.get(`http://localhost:8000/soloimage/${this.id}`).subscribe(
      (response: any) => {
        console.log(response);
        this.image = JSON.parse(response);
      },
      (error) => {
        console.error('Error fetching image', error);
      }
    );
  }
}
