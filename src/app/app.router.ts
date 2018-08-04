/**
 * @file 项目路由
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [

    // 默认导航到住模块路由，如果没有权限，然后再导航到登录路由
    { path: '', pathMatch: 'full', redirectTo: 'main' },

    // 主模块路由
    { path: 'main', loadChildren: './main/main.module#MainModule' },

    // 登录路由
    { path: 'login', loadChildren: './login/login.module#LoginModule' },

    // 后台管理路由
    { path: 'manage', loadChildren: './manage/manage.module#ManageModule' },

    // 错误路由，导航到主模块的错误路由
    { path: '**', redirectTo: '/main/error' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // 优先使用 hash 模式
                useHash: true,

                // 启用下边一行，可以预加载所有模块（失去了模块按需加载的效果）
                // preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
