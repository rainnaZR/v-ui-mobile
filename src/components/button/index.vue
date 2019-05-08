<template>
    <button
        class="vu-button"
        :style="getStyle()"
        @click="buttonClick">
        <slot></slot>
    </button>
</template>

<script>
import {DEFAULT_COLOR_RED, DEFAULT_COLOR_WHITE, DEFAULT_COLOR_GRAY} from '../constants'

export default {
    props: {
        //宽度
        width: {
            type: [Number, String],
            default: ''
        },
        //高度
        height: {
            type: Number,
            default: 28
        },
        //内间距
        padding: {
            type: Number,
            default: 10
        },
        //是否有边框
        outline: {
            type: Boolean,
            default: false
        },
        //颜色
        color: {
            type: String,
            default: DEFAULT_COLOR_WHITE
        },
        //背景颜色
        backgroundColor: {
            type: String,
            default: DEFAULT_COLOR_RED
        },
        //大小
        fontSize: {
            type: Number,
            default: 12
        }
    },

    methods: {
        getStyle(){
            return {
                width: (this.width && typeof this.width == 'number') ? `${this.width}px` : this.width == '100%' ? this.width : '',
                height: `${this.height}px`,
                paddingLeft: `${this.padding}px`,
                paddingRight: `${this.padding}px`,
                lineHeight: `${this.height - 2}px`,
                fontSize: `${this.fontSize}px`,
                borderColor: this.backgroundColor,
                color: this.outline ? this.backgroundColor : this.color,
                backgroundColor: this.outline ? '' : this.backgroundColor
            }
        },

        buttonClick(event){
            if(this.disabled){
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            this.$emit('click', event);
        }
    }
}
</script>
