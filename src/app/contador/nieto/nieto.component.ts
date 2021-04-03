import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/app.reducer';
import { ResetAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
  contador: number = 0;
  
  constructor(private store: Store<AppStore>){    
  }

  reset(){
    const accion = new ResetAction();    
    this.store.dispatch(accion);
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state);
    });
  }

}
