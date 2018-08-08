/**
 * @file 主业务根组件
 */

import {
    Component,
    OnInit
} from '@angular/core';

import { MenuItem } from '../common/component/main-menu';
import { Router } from '@angular/router';

@Component({
    selector: 'app-name',
    templateUrl: './main.component.tpl.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

    mainMenus: MenuItem[] = [
        {
            name: '业务一',
            path: '/main/busi1'
        },
        {
            name: '比较长的业务二',
            path: '/main/busi2'
        }
    ];

    activedPath = this.mainMenus[0].path;

    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {

    }

    onClickMainMenu(menu: MenuItem) {
        this.activedPath = menu.path;

        this.router.navigate([menu.path]);
    }
}
