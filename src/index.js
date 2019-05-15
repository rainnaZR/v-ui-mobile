import Vue from 'vue'
//引入组件需要的css
import 'scss_path/index.scss'
//components
import Button from './components/button';
import Icon from './components/icon';
import Input from './components/input';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
// import Switch from './components/switch';
import Search from './components/search';
import Checker from './components/checker';
import Range from './components/range';
import Upload from './components/upload';
import ProgressBar from './components/ProgressBar';
import Countdown from './components/countdown';
import DialogComponent from './services/dialog/index.vue';
//service
import toast from './services/toast/index.js';
import dialog from './services/dialog/index.js';

function install(){
    //Basic Components
    Vue.component('vu-button', Button);
    Vue.component('vu-icon', Icon);
    Vue.component('vu-input', Input);
    Vue.component('vu-radio', Radio);
    Vue.component('vu-checkbox', Checkbox);
    // Vue.component('vu-switch', Switch);
    Vue.component('vu-search', Search);
    Vue.component('vu-checker', Checker);
    Vue.component('vu-range', Range);
    Vue.component('vu-upload', Upload);
    Vue.component('vu-progressbar', ProgressBar);
    Vue.component('vu-countdown', Countdown);
    Vue.component('vu-dialog', DialogComponent);
    //Services
    Vue.prototype.$toast = window.$toast = toast;
    Vue.prototype.$dialog = window.$dialog = dialog;
}


export default {
    install,
    Button,
    Icon,
    Input,
    Radio,
    Checkbox,
    // Switch,
    Search,
    Checker,
    Range,
    Upload,
    ProgressBar,
    Countdown,
    toast,
    dialog
}
