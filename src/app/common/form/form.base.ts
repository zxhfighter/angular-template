/**
 * omni
 * Copyright 2018 Baidu Inc. All rights reserved.
 *
 * @file 表单基类，这个表单包括如下选项
 *
 * - 面包屑
 * - 表单
 * - 确定-取消按钮
 *
 * 如果存在 formId，说明是修改模式
 *
 * @author zengxiaohui(zengxiaohui@baidu.com)
 */

import { OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState, SUCCESS } from '../service/app.service';
import { ToastService } from 'xdesign/toast';

export abstract class FormService {
    abstract createEntity(...args);
    abstract updateEntity(...args);
    abstract loadEntity(formId: string);
}

export class BaseForm implements OnInit, OnDestroy {

    /** 表单实体标识 */
    entity: string;

    /** 表单实体名称 */
    entityName: string;

    /** 表单根组件 */
    form: FormGroup;

    /** 表单ID，修改表单时的ID */
    formId: string;

    /** 返回链接 */
    returnPath: string;

    /** 面包屑 */
    breadcrumbs: any = [];

    /** 面包屑跳转链接参数 */
    breadcrumbParams: any;

    constructor(
        protected router: Router,
        protected appState: AppState,
        protected activatedRoute: ActivatedRoute,
        protected service: FormService,
        protected toastService: ToastService
    ) {
        // 获取表单ID
        this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    async ngOnInit() {

        // 隐藏侧边栏
        this.appState.set('hideSidebar', true);

        // 设置面包屑参数
        this.breadcrumbParams = { targetUserId: this.getTargetUserId() };

        if (this.formId) {
            const entity = await this.loadEntityData(this.formId);
            this.renderEntity(entity);
        }
    }

    /**
     * 获取任务数据
     *
     * @param {string} formId 表单ID
     * @returns 任务数据
     */
    async loadEntityData(formId: string) {
        try {
            const data = await this.service.loadEntity(formId).toPromise();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 取消新建，返回
     */
    onCancel() {
        this.gotoList();
    }

    /**
     * 返回列表
     */
    gotoList() {
        this.router.navigate([this.returnPath], {
            queryParams: { targetUserId: this.getTargetUserId() }
        });
    }

    /**
     * 获取当前用户ID
     *
     * @returns 当前用户ID
     */
    getTargetUserId() {
        return this.appState.get('global')
            ? this.appState.get('global').targetUserId : '';
    }

    /**
     * 获取表单状态，并调整为后端需要的参数格式
     *
     * @returns 表单状态对象
     */
    getEntity() {
        return this.form ? this.form.value : {};
    }

    /**
     * 设置表单状态
     *
     * @param {*} entity 表单数据
     */
    setEntity(entity: any) {

    }

    /**
     * 设置表单状态
     *
     * @param {*} entity 表单数据
     */
    renderEntity(entity: any) {

    }

    /**
     * 获取表单组件
     *
     * @param {string} name 组件名称
     * @returns
     */
    getFormControl(name: string) {
        return this.form.get(name);
    }

    /**
     * 提交表单，根据是否存在 formId 进行判断，如果存在 formId 表明修改，否则新建
     */
    onSubmit() {
        const entity = this.getEntity();
        const isUpdate = !!this.formId;
        const request = isUpdate
            ? this.service.updateEntity(this.formId, entity)
            : this.service.createEntity(entity);

        request.subscribe(
            this.successHandler.bind(this),
            this.errorHandler.bind(this)
        );
    }

    successHandler(data: any) {
        const verb = this.formId ? '修改' : '新建';
        if (data.code === SUCCESS) {
            this.toastService.success(`${verb}${this.entityName}成功`);
            this.gotoList();
        } else {
            this.toastService.error(`${verb}${this.entityName}失败`);
        }
    }

    errorHandler(error: any) {
        console.error(error);
    }

    /**
     * 显示侧边栏
     */
    ngOnDestroy() {
        this.appState.set('hideSidebar', false);
    }
}
