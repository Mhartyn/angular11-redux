import { Component, Input, OnInit } from '@angular/core';
import Tweet from 'src/app/models/tweet.model';

@Component({
  selector: 'app-toptweets',
  templateUrl: './toptweets.component.html',
  styleUrls: ['./toptweets.component.sass']
})
export class ToptweetsComponent implements OnInit {

  @Input() tweets: Tweet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
