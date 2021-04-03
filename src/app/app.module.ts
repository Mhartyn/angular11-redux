import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//rutas
import { APP_ROUTES } from './app-router';

//module
import { ServiceModule } from './service/service.module';
import { SharedModule } from './shared/shared.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercerptorService } from './service/interceptors/intercerptor.service';

//@ngrx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IntercerptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
