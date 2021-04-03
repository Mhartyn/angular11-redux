import { Routes, RouterModule } from '@angular/router';

import { LoginGuard, VerificaTokenGuard } from 'src/app/service/service.index';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
//import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const appRouter: Routes = [
    {path: 'login', component: LoginComponent },
    //{path: 'register', component: RegisterComponent },
    {path: '', component: PagesComponent, canActivate: [LoginGuard, VerificaTokenGuard], 
    loadChildren: './pages/pages.module#PagesModule'},
    {path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRouter, {useHash: true});
