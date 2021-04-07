import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import enumServicio from 'src/app/config/enumServicio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccionpopularService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  public cantidadPost() {
    const url = `${environment.url_services}/${enumServicio.url_cantidad_post}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp[0];
        })
      );
  }

  public mensiones() {
    const url = `${environment.url_services}/${enumServicio.url_menciones_t}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  public analisisSentimiento() {
    const url = `${environment.url_services}/${enumServicio.url_analisis_sentimiento}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  public palabras() {
    const url = `${environment.url_services}/${enumServicio.url_palabras}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  public top_twitter() {
    const url = `${environment.url_services}/${enumServicio.url_top_twitter}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  public mension_positivas() {
    const url = `${environment.url_services}/${enumServicio.url_mensiones_positivas_populares}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }

  public mension_negativas() {
    const url = `${environment.url_services}/${enumServicio.url_mensiones_negativas_populares}ap`;

    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }
}
