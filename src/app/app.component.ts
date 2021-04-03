import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from './app.reducer';
import { DecrementarAction, IncrementarAction } from './contador/contador.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppStore>){
    //this.contador = 10;
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log(state);
    });
  }

  incrementar(){
    //this.contador ++;
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar(){
    //this.contador --;
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
