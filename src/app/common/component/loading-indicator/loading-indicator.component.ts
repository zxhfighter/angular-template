/**
 * @file 加载指示组件
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.tpl.html',
    styleUrls: ['./loading-indicator.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
