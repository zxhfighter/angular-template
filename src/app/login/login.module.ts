/**
 * @file 登录模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRouterModule } from './login.router';

// services
import { LoginService } from './login.service';

// components
import { LoginPageComponent } from './login-page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRouterModule
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
        LoginService
    ],
    exports: []
})
export class LoginModule { }
