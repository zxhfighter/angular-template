import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';

// global services
import { AppState } from './common/service/app.service';
import { ToastService } from 'xdesign';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        AppState,
        ToastService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
