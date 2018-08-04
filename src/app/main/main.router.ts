/**
 * @file 主业务路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';

const routes: Routes = [

    // 默认导航到列表路由
    { path: '', pathMatch: 'full', redirectTo: 'busi1' },

    // 列表路由
    { path: 'busi1', loadChildren: './busi1/busi1.module#Busi1Module' },

    // 表单路由
    { path: 'busi2', loadChildren: './busi2/busi2.module#Busi2Module' },

    // 错误路由
    { path: 'error', component: ErrorComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class MainRouterModule { }
