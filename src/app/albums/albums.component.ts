import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private router: Router,private route: ActivatedRoute) {}
 
  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.albums = data;
      })
      .catch(error => console.error('Error fetching albums:', error));
  }

  viewPhotos(albumId: number) {
    this.router.navigate(['/photos', albumId]);
  }
 
}
