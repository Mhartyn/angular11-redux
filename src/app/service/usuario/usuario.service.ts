import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import Usuario from '../../models/usuario.model';
import enumServicio from '../../config/enumServicio';
import enumStorage from '../../config/enumStorage';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuario: Usuario = new Usuario();
  public token: string = "";
  public menu: any[] = [];
  public notificacion = new EventEmitter<Usuario>();

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
    this.cargarDatos();
  }

  public estaLogeado(): boolean{
    return this.token.length > 5;
  }

  private cargarDatos(){
    this.token = '';
    this.usuario = new Usuario();
    this.menu = [];

    if (localStorage.getItem(enumStorage.token) != null) {
      this.token = <string>localStorage.getItem(enumStorage.token);
      this.usuario = JSON.parse(<string>localStorage.getItem(enumStorage.usuario));
      this.menu = JSON.parse(<string>localStorage.getItem(enumStorage.menu));
    }
  }

  private guardarStorage(resp: any){
    const {respuesta: usuario, token, menu} = resp;

    if (!usuario) {
      return;
    }

    localStorage.setItem(enumStorage.token, token);
    localStorage.setItem(enumStorage.usuario, JSON.stringify(usuario));
    if (resp.menu) {
      localStorage.setItem(enumStorage.menu, JSON.stringify(menu));
      this.menu = menu;
    }

    this.usuario = usuario;
    this.token = token;

    this.notificacion.emit(this.usuario);
  }

  private actualizarTokenStorage(token: string){
    if (token === '') {
      return;
    }
    localStorage.setItem(enumStorage.token, token);
    this.token = token;
  }

  public actualizarStorage(id: string, resp: any){
    if (id === this.usuario._id) {
      this.guardarStorage(resp);
    }
    else{
      this.actualizarTokenStorage(resp.token);
    }
  }

  public logOut(){
    this.token = '';
    this.usuario = new Usuario();
    this.menu = [];

    localStorage.removeItem(enumStorage.token);
    localStorage.removeItem(enumStorage.usuario);
    localStorage.removeItem(enumStorage.menu);

    this.router.navigate(['/login']);
  }

  public loginGoogle(token: string){
    const url = `${enumServicio.url_services}/${enumServicio.url_services_googleLogin}`;

    return this.http.post(url, {token})
              .pipe(
                map((resp: any) => {
                  this.guardarStorage(resp);
                  return true;
                })
                );
  }

  public login(usuario: Usuario, recuerdame: boolean = false){
      const url = `${enumServicio.url_services}/${enumServicio.url_services_login}`;

      if (recuerdame) {
          localStorage.setItem(enumStorage.email, usuario.email);
      }
      else{
          localStorage.removeItem(enumStorage.email);
      }

      return this.http.post(url, usuario)
                      .pipe(
                        map((resp: any) => {
                          this.guardarStorage(resp);
                          return true;
                        })
                      );                    
  }

  public crearUsuario(usuario: Usuario){
    const url = `${enumServicio.url_services}/${enumServicio.url_services_usuario}`;

    return this.http.post(url, usuario)
              .pipe(
                map((resp: any) => {
                  alert(`usuario creado: ${usuario.email}`);
                  return resp.usuario;
                })
              );
  }

  public actualizarUsuario(usuario: Usuario){
    const url = `${enumServicio.url_services}/${enumServicio.url_services_usuario}/${usuario._id}`;

    return this.http.put(url, usuario)
    .pipe(
      map((resp: any) => {
        this.actualizarStorage(<string>usuario._id, resp);

        alert(`usuario modificado: ${usuario.email}`);
        return true;
      }));
  }

  public consultaUsuarios( nombre: string, pagina: number = 1, tamanio: number = 5, orden: string = 'nombre', direccion: number = 1){
    const url = `${enumServicio.url_services}/${enumServicio.url_services_usuario}s/${nombre}`;

    let params: HttpParams = new HttpParams()
                .set('pagina', pagina.toString())
                .set('tamanio', tamanio.toString())
                .set('orden', orden.toString())
                .set('direccion', direccion.toString());
    return this.http.get(url, { params })
              .pipe(
                map((resp: any) => {
                  this.actualizarTokenStorage(resp.token);
                  return resp.respuesta;
                })
              );
  }

  public borrarUsuario(id: string){
    const url = `${enumServicio.url_services}/${enumServicio.url_services_usuario}/logico/${id}`;
    return this.http.delete(url)
              .pipe(
                map((resp: any) => {
                  this.actualizarTokenStorage(resp.token);
                  return resp;
                })
              );
  }
}
