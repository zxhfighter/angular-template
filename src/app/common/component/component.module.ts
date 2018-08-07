/**
 * @file 常见组件模块
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ButtonModule,
    BreadcrumbModule,
    TableModule,
    PageModule,
    BoxGroupModule,
    InputModule,
    FormModule,
    TooltipModule,
    DialogModule,
    OverlayModule,
    ToastModule
} from 'xdesign';

const uiModules = [
    ButtonModule,
    BreadcrumbModule,
    TableModule,
    PageModule,
    BoxGroupModule,
    InputModule,
    FormModule,
    TooltipModule,
    DialogModule,
    OverlayModule,
    ToastModule
];

import { LoadingIndicatorComponent } from './loading-indicator';
import { MainMenuComponent } from './main-menu';

const commonComponents = [
    LoadingIndicatorComponent,
    MainMenuComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoadingIndicatorComponent,
        MainMenuComponent
    ],
    providers: [],
    exports: [
        ...commonComponents,
        ...uiModules
    ]
})
export class ComponentModule { }
