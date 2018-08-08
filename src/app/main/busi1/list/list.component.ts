/**
 * @file 业务一列表组件
 */

import {
    Component,
    OnInit
} from '@angular/core';

import { Field } from 'xdesign';
import { Busi1Service } from '../busi1.service';
import { BaseTable } from '../../../common/table/table.base';

@Component({
    selector: 'app-busi1-list',
    templateUrl: './list.component.tpl.html',
    styleUrls: ['./list.component.less']
})
export class Busi1ListComponent extends BaseTable implements OnInit {

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

    constructor(
        private service: Busi1Service
    ) {
        super();
    }

    ngOnInit() {
        this.paramSubject.subscribe(params => {
            this.displayTableData = this.getDisplayDatasource(params);
        });

        this.service.getEntityList().subscribe((result: any) => {
            this.datasource = result.data;
            this.filteredDatasource = [...this.datasource];
            this.totalNum = this.datasource.length;
        });
    }
}
