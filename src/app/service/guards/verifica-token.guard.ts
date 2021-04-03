import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService
  ){

  }

  canActivate(): /* Promise<boolean | */ boolean {
    const token = this.usuarioService.token;
    const payload = JSON.parse( atob(token.split('.')[1]) );    

    if (this.expirado(payload.exp)){
      this.usuarioService.logOut();
    }

    return true;
  }

  expirado(fechaExp: number){
    const ahora = new Date().getTime() / 1000;
    return (fechaExp - ahora) < 0;
  }
}