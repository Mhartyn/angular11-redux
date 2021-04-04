import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cantidadtwitter',
  templateUrl: './cantidadtwitter.component.html',
  styleUrls: ['./cantidadtwitter.component.sass']
})
export class CantidadtwitterComponent implements OnInit {

  @Input() cantidad: number = 0;
  @Input() porcentaje: number = 0;
  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
