import { Routes, RouterModule } from '@angular/router';

import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard, AdminGuard } from 'src/app/service/service.index';
import { AccionpopularComponent } from './accionpopular/accionpopular.component';

const pagesRouters: Routes = [
    {path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
    {path: 'accionpopular', component: AccionpopularComponent, data: { titulo: 'Accion Popular' }},
    {path: 'graficas', component: GraficasComponent, data: { titulo: 'Estadisticas' }},
    //{path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
    //{path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    //{path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes de tema' } },
    //{path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil' } },
    //mantenimientos
    //{path: 'usuarios', component: UsuarioComponent, canActivate: [AdminGuard], data: { titulo: 'Mantenimiento de Usuarios' } },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRouters);
