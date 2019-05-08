<template>
    <div class="m-content">
        <vu-radio
            v-model="radio1.selected"
            :options="radio1.options"
            :name="radio1.name" />

        <vu-radio
            v-model="radio2.selected"
            :options="radio2.options"
            :iconPos="radio2.iconPos"
            @change="change">

            <vu-icon class="vu-icon-correct" :size="20" color="#d22147" slot="selected" />
            <vu-icon class="vu-icon-correct" :size="20" color="#999" slot="unselected" />
        </vu-radio>

        <div>Radio1选中索引为{{radio1.selected}}</div>
        <div>Radio2选中索引为{{radio2.selected}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            radio1: {
                options: ['语文', '数学', '物理', '英语'],
                selected: 2,
                name: 'radio1'
            },
            radio2: {
                options: ['合肥', '安徽', '杭州'],
                iconPos: 'right'
            }
        }
    },

    methods: {
        change(res){
            console.log(res)
        }
    }
}
</script>

<style lang="scss" scoped>
.m-content .vu-radio{
  margin: 0 0 15px;
}
</style>



