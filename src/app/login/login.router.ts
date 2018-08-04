/**
 * @file 登录模块业务路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page';

const routes: Routes = [

    // 默认导航
    { path: '', pathMatch: 'full', component: LoginPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class LoginRouterModule { }
