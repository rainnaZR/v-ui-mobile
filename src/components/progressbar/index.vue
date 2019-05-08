<template>
    <div vu-progress class="vu-progress">
        <div
            class="bar"
            :style="{height: `${barHeight}px`, backgroundColor: barBgColor}">
            <!-- 进度条 -->
            <div
                class="length"
                ref="bar"
                :style="{backgroundColor: theme}">
            </div>
        </div>

        <!-- 文字描述 -->
        <div class="content">
            <slot>
                <div class="desc">{{desc}}{{progressValue}}{{unit}}</div>
            </slot>
        </div>
    </div>
</template>

<script>
import {DEFAULT_COLOR_RED, DEFAULT_COLOR_GRAY} from '../constants'

export default {
    props: {
        barHeight: {
            type: Number,
            default: 4
        },
        barBgColor: {
            type: String,
            default: DEFAULT_COLOR_GRAY
        },
        theme: {
            type: String,
            default: DEFAULT_COLOR_RED
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        desc: {
            type: String,
            default: '占比'
        },
        value: {
            type: Number,
            default: 0
        },
        unit: {
            type: String,
            default: '%'
        }
    },

    data(){
        return {
            progressValue: this.value
        }
    },

    watch: {
        progressValue(value){
            this.$emit('input', value)
        },
        value(newValue){
            this.setProgressBar(newValue)
        }
    },

    mounted(){
        this.initProgressBar();
    },

    methods: {
        initProgressBar(){
            let progressValue;

            if(this.value > 0 && this.value <= 100){
                progressValue = this.value
            }else{
                let min = this.min/100,
                    max = this.max/100;
                if(min > max) return
                progressValue = parseInt((Math.random()*(max-min)+min)*100);
            }

            this.setProgressBar(progressValue);
        },

        setProgressBar(progressValue){
            let barElem = this.$refs.bar;
            setTimeout(() => {
                barElem.style.width = `${progressValue}%`
            }, 100)

            this.progressValue = progressValue;
        }
    }
}
</script>


