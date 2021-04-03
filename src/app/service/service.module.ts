import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService, UsuarioService, LoginGuard, AdminGuard, VerificaTokenGuard }
from 'src/app/service/service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuard,
    AdminGuard,
    VerificaTokenGuard
  ]
})
export class ServiceModule { }
