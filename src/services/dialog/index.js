import Vue from 'vue';
import {createElement} from 'utils_path/index';
import Dialog from 'components_path/dialog';

class NewDialog{
    constructor(){
        this._vm = undefined
    }

    show(options){
        return new Promise((resolve, reject) => {
            if(!this._vm){
                createElement('vu-dialogs');
                this._vm = new Vue(Dialog).$mount('[vu-dialogs]');
            }
            this._vm.$once('submit', () => resolve());
            this._vm.$once('cancel', () => reject());
            this._vm.show(options);
        })
    }
}

export default new NewDialog()
