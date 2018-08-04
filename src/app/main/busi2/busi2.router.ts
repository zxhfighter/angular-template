/**
 * @file 业务二路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Busi2FormComponent } from './form';
import { Busi2ListComponent } from './list';

const routes: Routes = [

    // 默认导航到列表路由
    { path: '', pathMatch: 'full', redirectTo: 'list' },

    // 列表路由
    { path: 'list', component: Busi2ListComponent },

    // 表单路由
    { path: 'form', component: Busi2FormComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class Busi2RouterModule { }
