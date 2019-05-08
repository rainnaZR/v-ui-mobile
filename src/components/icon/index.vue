<template>
    <i vu-icon class="vu-icon" :style="style"></i>
</template>

<script>
import {DEFAULT_COLOR_RED} from '../constants'

export default {
    props: {
        //图标大小
        size: {
            type: Number,
            default: 16
        },
        //图标颜色
        color: {
            type: String,
            default: DEFAULT_COLOR_RED
        }
    },
    computed: {
        style(){
            if(!this.size && !this.color){
                return;
            }

            let styleMap = {};
            if(this.size){
                let size  = `${this.size}px`;

                styleMap.width = size;
                styleMap.height = size;
                styleMap.fontSize = size;
            }
            if(this.color){
                styleMap.color = `${this.color}`;
            }

            return styleMap;
        }
    }
}
</script>
