import { Injectable } from '@angular/core';

import { Albums } from '../models/albums';
import { Album } from '../models/album';

@Injectable ()
export class AlbumService {
  public albumList: Array<Album>;
  public album: Album;


  constructor() {
  this.albumList = Albums;
  }


public getAlbums(): Array<Album> {
  console.log('myAlbumList', this.albumList );
 return this.albumList;
}

public getAlbumById(id: number): Album {
this.albumList.forEach(album=> {
if (album.id === id) { this.album = album; }
});

return this.album;
}
}
