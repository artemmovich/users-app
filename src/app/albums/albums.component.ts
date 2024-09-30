import { Component, OnInit } from '@angular/core';

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
}
