import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/service/service.index';
import Usuario from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public recuerdame: boolean;
  public email: string = "";
  public auth2: any;

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
    ) {
    this.recuerdame = false;
  }

  ngOnInit(): void {    
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  /* attachSingin(element){
    this.auth2.attachClickHandler(element, {}, googleUser => { */
      //let profile = googleUser.getBasicProfile();
      //console.log(profile);
      /* const token = googleUser.getAuthResponse().id_token;
      this.usuarioService.loginGoogle(token).subscribe(
        r => window.location.href = '#/dashboard' */ /* this.router.navigate(['/dashboard']) */
      /* );
    });
  } */

  ingresar(forma: NgForm){
    if (forma.invalid) {
      return;
    }

     const usuario: Usuario = new Usuario(
      '',
      forma.value.email,
      forma.value.password
    ); 

    this.usuarioService.login(usuario, forma.value.recuerdame).subscribe(() => this.router.navigate(['/dashboard']));
  } 

}
