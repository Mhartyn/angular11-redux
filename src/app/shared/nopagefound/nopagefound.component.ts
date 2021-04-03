import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.sass']
})
export class NopagefoundComponent implements OnInit {

  public anio: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
