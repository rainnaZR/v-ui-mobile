import Vue from 'vue';
// css
import 'scss_path/index.scss'
// components
import Button from './components/button';
import Icon from './components/icon';
import Input from './components/input';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import Search from './components/search';
import Checker from './components/checker';
import Range from './components/range';
import Upload from './components/upload';
import ProgressBar from './components/ProgressBar';
import Countdown from './components/countdown';
import DialogComponent from './components/dialog';
import ModalComponent from './components/modal';
// service
import toast from './services/toast/index.js';
import dialog from './services/dialog/index.js';
import modal from './services/modal/index.js';

function install(Vue){
    // Components
    Vue.component('vu-button', Button);
    Vue.component('vu-icon', Icon);
    Vue.component('vu-input', Input);
    Vue.component('vu-radio', Radio);
    Vue.component('vu-checkbox', Checkbox);
    Vue.component('vu-search', Search);
    Vue.component('vu-checker', Checker);
    Vue.component('vu-range', Range);
    Vue.component('vu-upload', Upload);
    Vue.component('vu-progressbar', ProgressBar);
    Vue.component('vu-countdown', Countdown);
    Vue.component('vu-dialog', DialogComponent);
    Vue.component('vu-modal', ModalComponent);
    //Services
    Vue.prototype.$toast = window.$toast = toast;
    Vue.prototype.$dialog = window.$dialog = dialog;
    Vue.prototype.$modal = window.$modal = modal;
}

export default {
    install
}
export {
    Button,
    Icon,
    Input,
    Radio,
    Checkbox,
    Search,
    Checker,
    Range,
    Upload,
    ProgressBar,
    Countdown,
    DialogComponent,
    ModalComponent,
    toast,
    dialog,
    modal
}
