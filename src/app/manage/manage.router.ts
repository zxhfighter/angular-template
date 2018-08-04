/**
 * @file 后台管理业务路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

const routes: Routes = [

    // 默认导航
    { path: '', pathMatch: 'full', component: ManageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ManageRouterModule { }
