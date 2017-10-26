import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../models/album';
import { AlbumService} from '../services/album.service';
@Component({
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  public album: Album;
  public albumId: number;

  constructor(private albumService: AlbumService,
  private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.params.id;
    this.album = this.albumService.getAlbumById(this.albumService);
  }

}
