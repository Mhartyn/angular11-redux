import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/service/service.index';
import enumServicio from 'src/app/config/enumServicio';

@Injectable({
  providedIn: 'root'
})
export class IntercerptorService implements HttpInterceptor {

  constructor(private usuarioService: UsuarioService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers: HttpHeaders = new HttpHeaders().set(enumServicio.header_seguridad_services, this.usuarioService.token);
    
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: Error) {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.name}\nMessage: ${error.message}`;
    }
    console.log('throwError', errorMessage);
    return throwError(error);
  }
}
