<template>
    <div class="m-content">
        <vu-countdown
            :leftTime="123120000"
            @stop="stop('倒计时1')"/>

        <vu-countdown
            color="red"
            :leftTime="50000"
            @stop="stop('倒计时2')"/>

        <vu-countdown
            :fontSize="14"
            color="green"
            desc="距离活动结束"
            format="dd-hh-mm"
            :leftTime="123120000"
            @stop="stop('倒计时3')"/>
    </div>
</template>

<script>
export default {
    methods: {
        stop(name){
            alert(`${name}倒计时结束`)
        }
    }
}
</script>



