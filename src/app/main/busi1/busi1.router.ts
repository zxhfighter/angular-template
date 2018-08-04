/**
 * @file 业务一路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Busi1FormComponent } from './form';
import { Busi1ListComponent } from './list';

const routes: Routes = [

    // 默认导航到列表路由
    { path: '', pathMatch: 'full', redirectTo: 'list' },

    // 列表路由
    { path: 'list', component: Busi1ListComponent },

    // 表单路由
    { path: 'form', component: Busi1FormComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class Busi1RouterModule { }
