/**
 * @file 业务一表单组件
 */

import {
    Component,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'xdesign/toast';

import { AppState, SUCCESS } from '../../../common/service/app.service';
import { BaseForm } from '../../../common/form/form.base';
import { Busi1Service } from '../busi1.service';

@Component({
    selector: 'app-busi1-form',
    templateUrl: './form.component.tpl.html',
    styleUrls: ['./form.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Busi1FormComponent extends BaseForm implements OnInit {

    /** 表单实体标识 */
    entity = 'busi1';

    /** 表单实体名称 */
    entityName = '业务一';

    /** 返回链接 */
    returnPath = '/main/busi1/list';

    /** 面包屑 */
    breadcrumbs = [
        { text: '业务一', path: '/main/busi1/list' },
        { text: '业务一列表' }
    ];

    genders = [
        { text: '男', value: '0' },
        { text: '女', value: '1' },
        { text: '未知', value: '2' }
    ];
    genderValue = [ '0' ];

    constructor(
        public fb: FormBuilder,
        public service: Busi1Service,
        public router: Router,
        public state: AppState,
        public activatedRoute: ActivatedRoute,
        public toastService: ToastService
    ) {
        super(router, state, activatedRoute, service, toastService);
    }

    async ngOnInit() {
        super.ngOnInit();

        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            gender: [ this.genderValue ]
        });
    }
}
