import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() titulo = '';
  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
