/**
 * @file 主菜单
 */

import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

/**
 * @file 菜单选项接口
 * @author zengxiaohui(zengxiaohui@baidu.com)
 */

/**
 * 菜单选项接口
 */
export interface MenuItem {

    key?: string;

    /**
     * 菜单显示名称
     */
    name: string;

    /**
     * 菜单路径，用于路由导航，格式如：'/setting/region'
     */
    path?: string;

    /**
     * 菜单图表名称，例如 'report'
     */
    icon?: string;

    /**
     * 子菜单
     */
    children?: MenuItem[];

    /**
     * 是否隐藏
     */
    hide?: boolean;

    /**
     * 权限数组，有其中之一的权限即可显示
     */
    role?: string[];

    /**
     * 额外的查询参数对象
     */
    queryParams?: Object;

    /** 是否展开 */
    expanded?: boolean;

    /** 是否置灰 */
    disabled?: boolean;

    show?: boolean;

    [prop: string]: any;
}


@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.tpl.html',
    styleUrls: ['./main-menu.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent {
    @Output() menuClick = new EventEmitter<MenuItem>();
    @Input() menus: MenuItem[];
    @Input() activedPath: string;

    onClickMenu(menu: MenuItem) {
        this.menuClick.emit(menu);
    }
}
