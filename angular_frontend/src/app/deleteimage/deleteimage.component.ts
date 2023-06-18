import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteimage',
  templateUrl: './deleteimage.component.html',
  styleUrls: ['./deleteimage.component.css'],
})
export class DeleteimageComponent {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.deleteImage();
  }
  deleteImage() {
    this.http.get(`http://localhost:8000/delete/${this.id}`).subscribe(
      (response: any) => {
        this.router.navigate(['/image']);
      },
      (error) => {
        console.error('Error fetching image', error);
      }
    );
  }
}
