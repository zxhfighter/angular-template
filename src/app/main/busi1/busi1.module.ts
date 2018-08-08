/**
 * @file 业务一模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../common/component/component.module';
import { HttpClientModule } from '@angular/common/http';

import { Busi1RouterModule } from './busi1.router';
import { Busi1Service } from './busi1.service';

import { Busi1FormComponent } from './form';
import { Busi1ListComponent } from './list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Busi1RouterModule,
        ComponentModule
    ],
    declarations: [
        Busi1FormComponent,
        Busi1ListComponent
    ],
    providers: [
        Busi1Service
    ],
    exports: []
})
export class Busi1Module { }
