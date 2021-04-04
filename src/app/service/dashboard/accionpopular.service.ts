import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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

  public cantidadPost(){
    const url = `${environment.url_services}/${enumServicio.url_cantidad_post_ap}`;

    return this.http.get(url)
                    .pipe(
                      map((resp: any) => {
                        return resp[0];
                      })
                    );                    
}
}
