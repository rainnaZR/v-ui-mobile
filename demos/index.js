//scss引入
import './css/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import vui from 'v-ui-mobile';
import 'v-ui-mobile/dist/vui.min.css';
Vue.use(vui);

import config from './data/config';
import Index from './components/Index';
import Main from './components/Main';
import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Switch from './components/Switch';
import Search from './components/Search';
import Checker from './components/Checker';
import Range from './components/Range';
import Upload from './components/Upload';
import ProgressBar from './components/ProgressBar';
import Countdown from './components/Countdown';
import Toast from './components/Toast';
import Dialog from './components/Dialog';
import Modal from './components/Modal';

const routes = [
    {path: '/', component: Main},
    {path: '/basic/button', component: Button},
    {path: '/basic/icon', component: Icon},
    {path: '/basic/search', component: Search},
    {path: '/basic/checker', component: Checker},
    {path: '/basic/range', component: Range},
    {path: '/basic/upload', component: Upload},
    {path: '/basic/progressbar', component: ProgressBar},
    {path: '/form/input', component: Input},
    {path: '/form/radio', component: Radio},
    {path: '/form/checkbox', component: Checkbox},
    {path: '/form/switch', component: Switch},
    {path: '/date/countdown', component: Countdown},
    {path: '/notice/toast', component: Toast},
    {path: '/notice/dialog', component: Dialog},
    {path: '/notice/modal', component: Modal}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const pushMethod = config.__push_method__;
router[`_${pushMethod}`] = router[pushMethod];
router.forward = router[pushMethod] = (target) => {
    setTimeout(() => {
        router[`_${pushMethod}`](target);
    });
};
router.back = (target) => {
    setTimeout(() => {
        router[`_${pushMethod}`](target);
    });
};

//组件注册
Vue.component('vu-index', Index);
new Vue({
    router
}).$mount('vu-index');
