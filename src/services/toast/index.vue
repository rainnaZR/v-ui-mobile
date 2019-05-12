<template>
    <div vu-toast class="vu-toast" :class="positionTypes[position]">
        <div class="message" v-text="message"></div>
    </div>
</template>

<script>
import {removeElement} from 'utils_path/index';

let DEFAULT_DURATION = 3000,
    DEFAULT_POSITION = 'middle',
    DEFAULT_TOAST_POSITION_TYPES = {
        'top': 'vu-toast-top',
        'middle': 'vu-toast-middle',
        'bottom':'vu-toast-bottom'
    };

function preventDefault(e){
    e.preventDefault();
}

export default {
    data(){
        return {
            message: '',
            duration: DEFAULT_DURATION,
            position: DEFAULT_POSITION, //0:顶部提示，1:中间提示，2:底部提示
            positionTypes: DEFAULT_TOAST_POSITION_TYPES,
            state: 'hide'
        }
    },

    destroyed(){
        removeElement('vu-toast');
    },

    methods: {
        show(options){
            let {position = DEFAULT_POSITION, message, duration = DEFAULT_DURATION} = options;
            this.position = position;
            this.message = message;

            this.state = 'show'; //标志状态为显示，用于当出现多条消息时，清除之前的消息
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.hide();
            }, duration);

            document.body.addEventListener('touchmove', preventDefault);
        },

        hide(){
            this.state = 'hide';
            this.timer = null;
            this.$destroy();
            document.body.removeEventListener('touchmove', preventDefault);
        },

        getState(){
            return this.state;
        }
    }
}
</script>
