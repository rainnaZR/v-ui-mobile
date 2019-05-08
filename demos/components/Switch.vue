<template>
    <div class="m-content">
        <vu-switch v-model="selects[0]">默认开关是否打开</vu-switch>
        <vu-switch v-model="selects[1]" theme="#00c0ef">是否选择蓝色</vu-switch>
        <vu-switch v-model="selects[2]" theme="#f39c12">是否选择橙色</vu-switch>
        <vu-switch v-model="selects[3]" theme="#d22147">是否选择红色</vu-switch>

        <div>开关值为：{{selects.join(',')}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selects: [true, false, true, true]
        }
    }
}
</script>

<style lang="scss" scoped>
.m-content .vu-switch{
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
}
</style>
