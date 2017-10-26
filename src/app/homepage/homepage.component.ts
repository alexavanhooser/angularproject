import { Component, OnInit } from '@angular/core';

import { Album } from '../models/album';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  albumList: Array<Album>
  public query: string;
  public queryString: string;
  title = "Alexa's Music Library";
  constructor() { }



  ngOnInit() {
}
}
