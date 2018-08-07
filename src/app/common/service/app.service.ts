/**
 * @file 全局服务
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// application global constants
export const SUCCESS = 'ok';
export const ERROR = 'error';

export const SUCCESS_TEXT = 'ok';
export const ERROR_TEXT = 'error';

export interface InternalStateType {
    [key: string]: any;
}

@Injectable()
export class AppState {

    public sidebar$ = new Subject();

    public _state: InternalStateType = {};

    // already return a clone of the current state
    public get state() {
        return this._state = this._clone(this._state);
    }

    // never allow mutation
    public set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }

    public get(prop?: any) {
        // use our state getter for the clone
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : null;
    }

    public set(prop: string, value: any) {
        // internally mutate our state
        return this._state[prop] = value;
    }

    private _clone(object: InternalStateType) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    }
}
