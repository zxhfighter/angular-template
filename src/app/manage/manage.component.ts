/**
 * @file 管理员根页面
 */

import {
    OnInit,
    Component,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.tpl.html',
    styleUrls: ['./manage.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
