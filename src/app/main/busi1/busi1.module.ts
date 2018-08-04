/**
 * @file 业务一模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Busi1RouterModule } from './busi1.router';

import { Busi1FormComponent } from './form';
import { Busi1ListComponent } from './list';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Busi1RouterModule
    ],
    declarations: [
        Busi1FormComponent,
        Busi1ListComponent
    ],
    providers: [],
    exports: []
})
export class Busi1Module { }
