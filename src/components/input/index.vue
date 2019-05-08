<template>
    <div vu-input class="vu-input" :style="{backgroundColor: inputBgColor}">
        <!-- label -->
        <div class="input-prepend">
            <slot name="prepend">
                <div class="input-label" v-if="label != ''" v-text="label"></div>
            </slot>
        </div>

        <!-- 输入框 -->
        <div class="input-wrap">
            <input
                class="input-field"
                ref="input"
                :type="type"
                :placeholder="placeholder"
                :disabled="disabled"
                :autofocus="autofocus"
                :maxlength="maxlength"
                v-model="inputValue"
                @focus="focus"
                @change="change"
                @keydown="keydown" />

            <div class="input-clear" v-if="showClearButton" @click="clear">
                <vu-icon class="vu-icon-close" color="#ccc" />
            </div>
        </div>

        <div class="input-append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script>
import {DEFAULT_COLOR_WHITE} from '../constants'

export default {
    props:{
        value: [String, Number],
        label: {
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus:{
            type: Boolean,
            default: false
        },
        maxlength: {
            type: Number
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        inputBgColor: {
            type: String,
            default: DEFAULT_COLOR_WHITE
        }
    },
    data(){
        return {
            inputValue: this.value,
            isFocus: this.autofocus
        }
    },
    computed: {
        showClearButton(){
            return this.inputValue && !this.disabled && this.isFocus && this.showCloseIcon
        }
    },
    watch: {
        inputValue(newValue){
            this.$emit('input', newValue);
        },

        value(newValue){
            this.inputValue = newValue;
        }
    },
    methods: {
        focus(e){
            this.isFocus = true;
            this.$emit('focus', e);
        },

        blur(e){
            this.isFocus = false;
            this.$emit('blur', e);
        },

        change(e){
            this.$emit('change', e);
        },

        keydown(e){
            this.$emit('keydown', e);
        },

        clear(){
            this.inputValue = '';
            this.$refs.input.focus();
        }
    }
}
</script>
