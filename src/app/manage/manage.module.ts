/**
 * @file 后台管理模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRouterModule } from './manage.router';
import { ManageComponent } from './manage.component';

@NgModule({
    imports: [
        CommonModule,
        ManageRouterModule
    ],
    declarations: [
        ManageComponent
    ],
    providers: [],
    exports: []
})
export class ManageModule { }
