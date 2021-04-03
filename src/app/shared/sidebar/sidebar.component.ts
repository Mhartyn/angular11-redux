import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/usuario.model';
import { SidebarService, UsuarioService } from 'src/app/service/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public menu: any;
  public usuario: Usuario;

  constructor(
    private sidebar: SidebarService,
    private usuarioService: UsuarioService) {
      this.usuario = usuarioService.usuario;
    }

    ngOnInit(): void {
      this.menu = this.usuarioService.menu;
      this.usuarioService.notificacion.subscribe(
        (usuario: Usuario) => this.usuario = usuario
      );
    }

    logOut(){
      this.usuarioService.logOut();
    }

}
