import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './pages.routers';
import { SharedModule } from '../shared/shared.module';
//import { ChartsModule } from 'ng2-charts';

import { PipeModule } from '../pipes/pipe.module';
//import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { HomeComponent } from './home/home.component';
import { AccionpopularComponent } from './accionpopular/accionpopular.component';
//import { AccountSettingComponent } from './account-setting/account-setting.component';
//import { GraficaDonaComponent } from '../component/grafica-dona/grafica-dona.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { RxjsComponent } from './rxjs/rxjs.component';
//import { ProfileComponent } from './profile/profile.component';
//import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
//import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
    declarations: [
        //ProgressComponent,
        GraficasComponent,
        HomeComponent,
        AccionpopularComponent,
        //IncrementadorComponent,
        //GraficaDonaComponent,
        //AccountSettingComponent,
        //PromesasComponent,
        //RxjsComponent,
        //ProfileComponent,
        //UsuarioComponent
    ],
    exports: [
        //ProgressComponent,
        GraficasComponent,
        HomeComponent,
        //IncrementadorComponent,
        //GraficaDonaComponent,
        //AccountSettingComponent,
        //PromesasComponent,
        //RxjsComponent,
        //ProfileComponent,
        //UsuarioComponent
    ],
    imports: [
        PAGES_ROUTES,
        CommonModule,
        SharedModule,
        FormsModule,
        //ChartsModule,
        PipeModule
    ]
})
export class PagesModule {}