<template>
<div class="m-content">
    <vu-progressbar v-model="values[0]"/>

    <vu-progressbar
        desc="固定值"
        unit="件"
        v-model="values[1]" />

    <vu-progressbar
        :barHeight="10"
        barBgColor="#ccc"
        theme="green"
        :min="50"
        :max="80"
        desc="已完成"
        unit="个任务"
        v-model="values[2]" />

    <div>进度条的值为{{values.join(',')}}</div>


    <vu-progressbar
        :barHeight="10"
        theme="orange"
        v-model="loadingValue">
        <div class="desc">页面已加载{{loadingValue}}%</div>
    </vu-progressbar>
</div>
</template>

<script>
export default {
    data(){
        return {
            values: [0, 10, 0],
            loadingValue: 1
        }
    },

    mounted(){
        let that = this;
        let id = setInterval(() => {
            if(that.loadingValue == 100){
                clearInterval(id)
            }
            that.loadingValue ++
        }, 100)
    }
}
</script>

