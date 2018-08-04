/**
 * @file 主业务根组件
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './main.component.tpl.html',
    styleUrls: ['./main.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
