<template>
    <div vu-switch class="vu-switch">
        <div class="switch-text">
            <slot></slot>
        </div>

        <label>
            <input type="checkbox" v-model="selected" :checked="selected"/>
            <div class="switch-button" :style="{
                backgroundColor: selected ? theme : defaultBgColor,
                borderColor: selected ? theme : defaultBorderColor
            }">
                <i class="circle" :style="{left: `${selected ? 25 : 0}px`}"></i>
            </div>
        </label>
    </div>
</template>

<script>
import {DEFAULT_COLOR_RED} from '../constants'

export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: DEFAULT_COLOR_RED
        }
    },

    data(){
        return {
            selected: this.value,
            defaultBgColor: '#f1f1f1',
            defaultBorderColor: '#f1f1f1'
        }
    },

    watch: {
        value(newValue){
            this.selected = newValue;
        },
        selected(newValue){
            this.$emit('input', newValue);
        }
    }
}
</script>
