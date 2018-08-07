/**
 * @file 业务二模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Busi2RouterModule } from './busi2.router';
import { Busi2FormComponent } from './form';
import { Busi2ListComponent } from './list';

@NgModule({
    imports: [
        CommonModule,
        Busi2RouterModule
    ],
    declarations: [
        Busi2FormComponent,
        Busi2ListComponent
    ],
    providers: [],
    exports: []
})
export class Busi2Module { }
