<template>
    <div class="m-content">
        <vu-checker
            v-model="checker1.checked"
            :list="checker1.list"
            :min="1"
            :max="3" />

        <vu-checker
            v-model="checker2.checked"
            :list="checker2.list">
            <div slot-scope="props">{{props.index}}-{{props.item.label}}</div>
        </vu-checker>

        <div>check1选择项是：{{checker1.checked}}</div>
        <div>check2选择项是：{{checker2.checked}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            checker1: {
                list: [{
                    value: 0,
                    label: '和善'
                },{
                    value: 1,
                    label: '友好',
                    disabled: true
                },{
                    value: 2,
                    label: '漂亮'
                },{
                    value: 3,
                    label: '颜值高'
                },{
                    value: 4,
                    label: '准时'
                }],
                checked: [0]
            },
            checker2: {
                list: [{
                    value: 0,
                    label: '和善'
                },{
                    value: 1,
                    label: '友好',
                    disabled: true
                },{
                    value: 2,
                    label: '漂亮'
                }],
                checked: [2]
            }
        }
    }
}
</script>
