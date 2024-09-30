import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.fetchPhotos();
    });
  }

  fetchPhotos() {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.photos = data;
      })
      .catch(error => console.error('Error fetching photos:', error));
  }
}
