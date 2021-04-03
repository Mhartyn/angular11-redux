import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService,
    private router: Router
    ){    
  }

  canActivate(): boolean {
    //if (this.usuarioService.usuario.rol === 'ADMIN') {
    //  return true;
    //}

    this.router.navigate(['/home']);
    return false;
  }

}
