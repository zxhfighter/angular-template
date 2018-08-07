/**
 * @file 主业务模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRouterModule } from './main.router';

import { ComponentModule } from '../common/component/component.module';
import { ToastService } from 'xdesign';

import { Busi1Module } from './busi1/busi1.module';
import { Busi2Module } from './busi2/busi2.module';

import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        CommonModule,
        MainRouterModule,
        ComponentModule,

        Busi1Module,
        Busi2Module
    ],
    declarations: [
        MainComponent,
        ErrorComponent
    ],
    providers: [
        ToastService
    ],
    exports: []
})
export class MainModule { }
