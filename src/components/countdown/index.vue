<template>
    <div vu-countdown
        class="vu-countdown"
        ref="countdown"
        :style="{
            fontSize: `${fontSize}px`,
            color
        }">
    </div>
</template>

<script>
import time from 'utils_path/time'
import {DEFAULT_COLOR_GRAY2} from '../constants'

export default {
    props: {
        fontSize: {
            type: Number,
            default: 12
        },
        color: {
            type: String,
            default: DEFAULT_COLOR_GRAY2
        },
        desc: {
            type: String,
            default: '倒计时剩余'
        },
        leftTime: [Number],
        format: {
            type: String,
            default: 'dd-hh-mm-ss'
        }
    },

    mounted(){
        this.initCountdown()
    },

    methods: {
        initCountdown(){
            if(!this.leftTime) return;

            let elem = this.$refs.countdown;

            time.getCountDown(this.leftTime, res => {
                if(res){
                    let date = this.format
                        .replace(/\-/g,'')
                        .replace('dd', `${res.day}天 `)
                        .replace('hh', `${res.hour}时 `)
                        .replace('mm', `${res.min}分 `)
                        .replace('ss', `${res.second}秒`)
                    elem.innerHTML = `${this.desc} ${date}`
                }else{
                    this.$emit('stop')
                }
            })
        }
    }
}
</script>

