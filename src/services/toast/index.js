import Vue from 'vue';
import Toast from './Toast';
import {createElement} from 'utils_path/index';

function ToastInit(){
    let vm;

    function show(options){
        //toast已经消失,确保页面只有一个toast展示
        if(!vm || (vm && vm.getState() == 'hide')){
            createElement('vu-toasts');
            vm = new Vue(Toast).$mount('[vu-toasts]');
        }
        vm.show(options);
    }

    function hide(){
        if(vm){
            vm.hide();
        }
    }

    return {
        show,
        hide
    }
}

let toastFunc = new ToastInit();

export default {
    show: toastFunc.show,
    hide: toastFunc.hide
}
