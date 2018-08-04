/**
 * @file 出错页面
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.tpl.html',
    styleUrls: ['./error.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
