import { Routes, RouterModule } from '@angular/router';

import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';
//import { /* LoginGuard, */ AdminGuard } from 'src/app/service/service.index';

const pagesRouters: Routes = [
    //{path: '', component: PagesComponent, canActivate: [LoginGuard], children: [
        {path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
        //{path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
        {path: 'graficas', component: GraficasComponent, data: { titulo: 'Graficas' }},
        //{path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
        //{path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
        //{path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Ajustes de tema' } },
        //{path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil' } },
        //mantenimientos
        //{path: 'usuarios', component: UsuarioComponent, canActivate: [AdminGuard], data: { titulo: 'Mantenimiento de Usuarios' } },
        {path: '', redirectTo: '/home', pathMatch: 'full' },
    //] }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRouters);
