import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipes/pipe.module';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeradcrumbsComponent } from './beradcrumbs/beradcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipeModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BeradcrumbsComponent,
        NopagefoundComponent        
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BeradcrumbsComponent,
        NopagefoundComponent,        
    ]
})
export class SharedModule {}
