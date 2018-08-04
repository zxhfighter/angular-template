/**
 * @file 登录组件
 */

import {
    OnInit,
    Component,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login-page.component.tpl.html',
    styleUrls: ['./login-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
