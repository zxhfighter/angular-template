/**
 * @file 登录服务
 */


import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    login(userName: string, password: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
