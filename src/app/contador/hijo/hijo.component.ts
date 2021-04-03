import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.reducer';
import { DuplicarAction, MitadAction } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
  contador: number = 0;

  constructor(private store: Store<AppStore>){    
  }

  doble(){
    //this.contador*=2;
    //this.cambioContador.emit(this.contador);
    const accion = new DuplicarAction(2);    
    this.store.dispatch(accion);
  }

  mitad(){
    //this.contador/=2;
    //this.cambioContador.emit(this.contador);
    const accion = new MitadAction(2);    
    this.store.dispatch(accion);
  }  

  ngOnInit(): void {
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state);
    });
  }

}
