import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

//rutas
import { APP_ROUTES } from './app-router';

//module
import { ServiceModule } from './service/service.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTES,
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
