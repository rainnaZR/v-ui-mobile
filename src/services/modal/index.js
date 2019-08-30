import Vue from 'vue';
import {createElement} from 'utils_path/index';
import Modal from 'components_path/modal';

class ModalClass{
    constructor(){
        this._vm = undefined
    }

    show(options){
        return new Promise((resolve, reject) => {
            if(!this._vm){
                createElement('vu-modal');
                this._vm = new Vue(Modal).$mount('[vu-modal]');
            }
            this._vm.$once('close', resolve);
            this._vm.show(options);
        })
    }
}

export default new ModalClass();
