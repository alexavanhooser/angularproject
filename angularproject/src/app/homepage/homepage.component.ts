import { Component, OnInit } from '@angular/core';

import { Albums } from '../albums';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  albumList: Array<Albums>
  public query: string;
  public queryString: string;
  title = "albumList";
  constructor() { }



  ngOnInit() {
    this.albumList = [
      {
      title: 'Room on Fire',
      artist: 'The Strokes',
      released: '2004',
      thumbnail: '',
      notes: ""
    },
      {
      title: 'An American Prayer',
      artist: 'The Doors',
      released: '1978',
      thumbnail: '',
      notes: ""
    },
      {
      title: 'To Pimp a Butterfly',
      artist: 'Kendrick Lamar',
      released: '2015',
      thumbnail: '',
      notes: ""
    },
      {
      title: 'III',
      artist: 'Led Zeppelin',
      released: '1970',
      thumbnail: '',
      notes: ""
    },
      {
      title: 'I Love You, Honeybear',
      artist: 'Father John Misty',
      released: '2015',
      thumbnail: '',
      notes: ""
    },
    {
    title: "What's Going On",
    artist: 'Marvin Gaye',
    released: '1971',
    thumbnail: '',
    notes: ""
  },

  ]}
};
  // getBooks(): void {
  //   this.bookList(this.queryString)
  //       .subscribe(result=> {
  //       this.bookList = result.data.children;
  //       console.log('this.bookList', this.bookList);
  //       this.bookList.forEach(post=> {
  //         post.data.created = post.data.created * 1000;
  //       })
  //     })
//   }
