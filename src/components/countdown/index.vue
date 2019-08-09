<template>
    <div vu-countdown
        class="vu-countdown"
        :style="{
            fontSize: `${fontSize}px`,
            color
        }">
        {{desc}}
        <span v-if="timeBgColor">
            <span v-if="showDay"><span class="time" :style="{backgroundColor: timeBgColor,color: timeColor}">{{leftDay}}</span>天</span>
            <span v-if="showHour"><span class="time" :style="{backgroundColor: timeBgColor,color: timeColor}">{{leftHour}}</span>时</span>
            <span v-if="showMinute"><span class="time" :style="{backgroundColor: timeBgColor,color: timeColor}">{{leftMin}}</span>分</span>
            <span v-if="showSeconds"><span class="time" :style="{backgroundColor: timeBgColor,color: timeColor}">{{leftSecond}}</span>秒</span>
        </span>
        <span v-else>{{leftDay}}天{{leftHour}}时{{leftMin}}分{{leftSecond}}秒</span>
    </div>
</template>

<script>
import {getCountDown} from 'utils_path/time'
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
        timeBgColor: {
            type: String,
            default: ''
        },
        timeColor: {
            type: String,
            default: ''
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

    data(){
        return {
            leftDay: 0,
            leftHour: 0,
            leftMin: 0,
            leftSecond: 0,
            showDay: true,
            showHour: true,
            showMinute: true,
            showSeconds: true
        }
    },

    mounted(){
        this.initFormat()
        this.initCountdown()
    },

    methods: {
        initFormat(){
            let format = this.format;
            if(!format) return;
            this.showDay = format.indexOf('dd') > -1;
            this.showHour = format.indexOf('hh') > -1;
            this.showMinute = format.indexOf('mm') > -1;
            this.showSeconds = format.indexOf('ss') > -1;
        },

        initCountdown(){
            if(!this.leftTime) return;

            getCountDown(this.leftTime, res => {
                if(res){
                    this.leftDay = res.day
                    this.leftHour = res.hour
                    this.leftMin = res.min
                    this.leftSecond = res.second
                }else{
                    this.$emit('stop')
                }
            })
        }
    }
}
</script>

