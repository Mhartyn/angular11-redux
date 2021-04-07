import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { PAGES_ROUTES } from './pages.routers';
import { SharedModule } from '../shared/shared.module';

import { PipeModule } from '../pipes/pipe.module';
import { GraficasComponent } from '../componentes/graficas/graficas.component';
import { HomeComponent } from './home/home.component';
import { AccionpopularComponent } from './accionpopular/accionpopular.component';
import { CantidadtwitterComponent } from '../componentes/cantidadtwitter/cantidadtwitter.component';
import { WordcloudComponent } from '../componentes/wordcloud/wordcloud.component';
import { ToptweetsComponent } from '../componentes/toptweets/toptweets.component';
import { PostComponent } from '../componentes/post/post.component';

@NgModule({
    declarations: [
        WordcloudComponent,
        GraficasComponent,
        HomeComponent,
        AccionpopularComponent,
        CantidadtwitterComponent,
        ToptweetsComponent,
        PostComponent
    ],
    exports: [
        WordcloudComponent,
        GraficasComponent,
        HomeComponent,
        CantidadtwitterComponent,
        ToptweetsComponent,
        PostComponent
    ],
    imports: [
        PAGES_ROUTES,
        CommonModule,
        SharedModule,
        FormsModule,
        PipeModule,
        NgxEchartsModule.forRoot({
            echarts,
        }),
        TagCloudModule
    ]
})
export class PagesModule { }