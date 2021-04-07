import { Component, Input, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.sass']
})
export class WordcloudComponent implements OnInit {

  @Input() cloudData: CloudData[] = [
    {text: 'accionpopular', weight: 445, color: '#red'},
    {text: 'partido', weight: 61, color: 'blue'},
    {text: 'congreso', weight: 60, color: 'red'},
    {text: 'pbodigital', weight: 44, color: 'blue'},
    {text: 'peru', weight: 43, color: 'red'}
  ];
  constructor() {
    //console.log(this.cloudData);
  }
  
  ngOnInit(): void {
    //console.log(this.cloudData);
  }
  
}
