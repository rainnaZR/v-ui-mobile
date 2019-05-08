<template>
    <div class="m-content">
        <vu-checkbox
            v-model="checkBox1.value"
            :options="checkBox1.options"
            :name="checkBox1.name"
            :iconPos="checkBox1.iconPos"
            @change="change" />

        <vu-checkbox
            v-model="checkBox2.value"
            :options="checkBox2.options"
            :name="checkBox2.name"
            :iconPos="checkBox2.iconPos"
            @change="change">
            <vu-icon class="vu-icon-correct" :size="20" color="green" slot="selected" />
            <vu-icon class="vu-icon-close" :size="20" color="#999" slot="unselected" />
        </vu-checkbox>

        <div>checkbox1选中项是{{checkBox1.value.join(',')}}</div>
        <div>checkbox2选中项是{{checkBox2.value.join(',')}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            checkBox1: {
                options: [{
                    label: '南京',
                    value: 1001
                },{
                    label: '杭州',
                    value: 1002
                },{
                    label: '北京',
                    value: 1003
                }],
                name: 'checkbox-1',
                iconPos: 'left',
                value: []
            },
            checkBox2: {
                options: [{
                    label: '语文',
                    value: 11
                },{
                    label: '数学',
                    value: 22
                },{
                    label: '英语',
                    value: 33
                }],
                name: 'checkbox-2',
                iconPos: 'right',
                value: [22, 33]
            }
        }
    },

    methods: {
        change(res){
            console.log('checkbox选中返回值', res)
        }
    }
}
</script>
