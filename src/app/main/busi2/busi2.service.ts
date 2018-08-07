/**
 * @file service
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Busi2Service {

    getData(value: any): Promise<string[]> {
        return Promise.resolve(['亚当', '夏娃']);
    }
}
