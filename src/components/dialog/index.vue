<template>
    <div vu-dialog class="vu-dialog" @click="cancel" v-show="showDialog">
        <slot name="wrap">
            <div class="wrap" @click="wrapClick">
                <!-- 标题 -->
                <slot name="title">
                    <div class="title">{{title}}</div>
                </slot>

                <!-- 内容 -->
                <slot name="content">
                    <div class="content">{{content}}</div>
                </slot>

                <!-- 按钮 -->
                <slot name="button">
                    <div class="buttons">
                        <!-- 确认 -->
                        <div class="btn" @click="submit">{{submitBtnText}}</div>
                        <!-- 取消 -->
                        <div class="btn btn-1" v-if="showCancelBtn" @click="cancel">{{cancelBtnText}}</div>
                    </div>
                </slot>
            </div>
        </slot>
    </div>
</template>

<script>
import {extend} from 'utils_path/index';

export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: ''
        },
        showCancelBtn: {
            type: Boolean,
            default: true
        },
        submitBtnText: {
            type: String,
            default: '确认'
        },
        cancelBtnText: {
            type: String,
            default: '取消'
        }
    },

    data(){
        return {
            showDialog: this.value
        }
    },

    watch: {
        showDialog(newValue){
            this.$emit('input', newValue);
        },
        value(newValue){
            this.showDialog = this.value;
        }
    },

    methods: {
        show(options){
            this.showDialog = true;
            extend(this, options);
        },

        wrapClick(e){
            e.stopPropagation();
        },

        hide(){
            this.showDialog = false;
        },

        cancel(){
            this.hide();
            this.$emit('cancel');
        },

        submit(){
            this.hide();
            this.$emit('submit');
        }
    }
}
</script>

