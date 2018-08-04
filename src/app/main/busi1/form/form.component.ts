/**
 * @file 业务一表单组件
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-busi1-form',
    templateUrl: './form.component.tpl.html',
    styleUrls: ['./form.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Busi1FormComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
