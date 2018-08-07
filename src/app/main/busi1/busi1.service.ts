/**
 * @file service
 */

import { Injectable } from '@angular/core';
import { FormService } from '../../common/form/form.base';
import { of } from 'rxjs';
import { SUCCESS, ERROR } from '../../common/service/app.service';

@Injectable()
export class Busi1Service extends FormService {

    createEntity(entity: any) {
        return of({
            code: Math.random() > 0.5 ? SUCCESS : ERROR,
            msg: '出错啦！'
        });
    }

    updateEntity(entity: any) {
        return of({
            code: Math.random() > 0.5 ? SUCCESS : ERROR,
            msg: '出错啦！'
        });
    }

    loadEntity(formId: any) {
        return of({
            code: SUCCESS,
            data: {
                name: '张三'
            }
        });
    }
}
