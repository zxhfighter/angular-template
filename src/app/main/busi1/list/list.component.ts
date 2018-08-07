/**
 * @file 业务一列表组件
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

import { Field } from 'xdesign';

@Component({
    selector: 'app-busi1-list',
    templateUrl: './list.component.tpl.html',
    styleUrls: ['./list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Busi1ListComponent implements OnInit {

    page = 1;
    size = 10;
    sizeList: number[] = [10, 20, 30];

    breadcrumbs = [
        { text: '业务一', path: '/main/busi1/list' },
        { text: '业务一列表' }
    ];

    fields: Field[] = [
        { name: 'id', title: '学号',  },
        { name: 'name', title: '姓名' },
        { name: 'age', title: '年龄' },
        { name: 'gender', title: '性别' },
        { name: 'rank', title: '排名' }
    ];

    datasource = [
        { id: 1, name: '张三', age: 16, gender: '男', rank: 1 },
        { id: 2, name: '李四', age: 17, gender: '男', rank: 2 },
        { id: 3, name: '王五', age: 16, gender: '男', rank: 3 },
        { id: 4, name: '李雷', age: 15, gender: '男', rank: 4 },
        { id: 5, name: '韩梅梅', age: 14, gender: '女', rank: 5 },
        { id: 6, name: '莉莉', age: 15, gender: '女', rank: 6 }
    ];

    constructor() {

    }

    ngOnInit() {

    }

    onPageChange() {

    }
}
