import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public usuarioServicio: UsuarioService, public router: Router){

  }

  canActivate(): boolean {
    if (this.usuarioServicio.estaLogeado()) {
      return true;
    }
    else{
      this.router.navigate(["/login"]);      
      return false;
    }
  }

}
