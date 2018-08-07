/**
 * @file 表格基类
 */

import { Subject } from 'rxjs';
import { sortFunc } from 'xdesign';

/** 表格搜索、过滤、排序、分页参数接口格式 */
export interface TableArgs {
    /** 排序方式，可选 asc 或 desc，默认 desc */
    order: string;

    /** 排序字段 */
    orderBy: string;

    /** 当前显示页码 */
    page: number;

    /** 每页显示条数 */
    size: number;

    /** 过滤参数 */
    filterMap: {};
}

export class BaseTable {

    /** 分页类型，可选前端（frontend）和后端分页（backend），默认前端分页 */
    pagingType: 'frontend' | 'backend' = 'frontend';

    /** 每页显示记录条数备选列表 */
    sizeList: number[] = [10, 20, 30];

    /** 总条数 */
    totalNum = 0;

    /** 页码，默认第一页 */
    page = 1;

    /** 页数，默认每页 10 条 */
    size = 10;

    /** 排序参数 */
    sortParam: any = {
        order: 'desc',
        orderBy: ''
    };

    /** 筛选/搜索参数 */
    filterMap: any = {};

    /** 当前表格渲染数据源，前端筛选（分页、排序、搜索）的数据源 */
    datasource: any[] = [];

    /** 筛选过滤后的数据集 (注意和 datasource 进行区分) */
    filteredDatasource: any[] = [];

    /** 用于当前页码页面展示的数据 */
    displayTableData: any[] = [];

    /** 表格参数变动的主题（rxjs） */
    paramSubject: Subject<TableArgs> = new Subject<TableArgs>();

    /** 子类可能需要获取路由 */
    activedRoute;

    /**
     * 表格搜索
     *
     * @param {Object} value 搜索关键字
     * @param {Object} field 搜索字段
     */
    onSearch(value: string, field: string) {
        if (value.trim().length) {
            this.filterMap[field] = value;
            this.refresh();
        }
    }

    /**
     * 清空表格搜索
     *
     * @param {Object} value 搜索关键字
     * @param {Object} field 搜索字段
     */
    clearSearch(value: string, field: string) {
        if (!value.length) {
            this.filterMap[field] = value;
            this.refresh();
        }
    }

    /**
     * 响应displayTableData的变化
     *
     * @param data
     */
    onDisplayDataChange(data: Object[]) {
        this.displayTableData = data;
    }

    /**
     * 排序
     *
     * @param sortParam
     */
    onSort(sortParam) {
        this.sortParam = sortParam;
        this.refresh();
    }
    /**
     * 根据entity参数重新过滤、排序、分页表格数据
     */
    refresh() {
        const entity = this.getEntity();
        this.paramSubject.next(entity);
    }
    /**
     * 获取最新的TableArgs表格参数
     */
    getEntity() {
        return {
            order: this.sortParam.order,
            orderBy: this.sortParam.orderBy,
            page: this.page,
            size: this.size,
            filterMap: this.filterMap
        };
    }

    /**
     * 根据最新的TableArgs参数，获取过滤后的数据 和 要展示的当前页数据
     *
     * @param params
     */
    getDisplayDatasource(params: TableArgs) {
        let data: any[] = [...this.datasource];

        // filter
        if (params.filterMap) {
            for (const key of Object.keys(params.filterMap)) {
                data = data.filter(v => v[key].indexOf(params.filterMap[key]) !== -1);
            }
        }

        // update filtered data
        this.filteredDatasource = [...data];

        // sort
        if (params.order && params.orderBy) {
            data = data.sort(sortFunc(params.order, params.orderBy));
        }

        // update page and size for page(component)
        params.page = Math.ceil(data.length / params.size) >= params.page ? params.page : 1;
        this.page = params.page;
        this.size = params.size;

        // page
        if (params.page) {
            data = data.slice((params.page - 1) * params.size, params.page * params.size);
        }

        return data;
    }

    /**
     * 筛选表格字段
     *
     * @param value
     * @param filterParam
     */
    onFilter(value: string, filterParam: any) {
        if (filterParam) {
            const target = filterParam.target;
            this.filterMap[target.field] = value;
            if (!value.length) {
                target.filtered = false;
            }
            this.refresh();
        }
    }

    /**
     * 取消表格字段筛选
     *
     * @param filterParam
     */
    onResetFilter(filterParam: any) {
        if (filterParam) {
            const target = filterParam.target;
            target.value = '';
            this.filterMap[target.field] = target.value;
            this.refresh();
        }
    }

    /**
     * 分页事件
     *
     * @param pageParam
     */
    pageChange(pageParam) {
        if (pageParam.currrentIndex) {
            this.page = pageParam.currrentIndex;
        }
        if (pageParam.count) {
            this.size = pageParam.count;
        }
        this.refresh();
    }
}
