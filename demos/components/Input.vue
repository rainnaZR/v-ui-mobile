<template>
    <div class="m-content">
        <vu-input v-model="userInfo.title"/>

        <vu-input
            label="用户名"
            placeholder="请输入用户名"
            v-model="userInfo.name"
            :autofocus="autofocus"
            @change="handler('name','change',$event)"
            @focus="handler('name','focus',$event)" />

        <vu-input
            type="number"
            label="手机号码"
            placeholder="请输入手机号码"
            v-model="userInfo.phone"
            @change="handler('phone','change',$event)"
            @focus="handler('phone','focus',$event)" />

        <vu-input
            label="输入框禁用"
            :disabled="disabled" />

        <vu-input v-model="keywords">
            <vu-icon class="vu-icon-search" color="green" slot="prepend" />
            <vu-icon class="vu-icon-correct" color="green" slot="append" />
        </vu-input>

        <div>标题：{{userInfo.title}}<br /> 用户名：{{userInfo.name}}<br /> 手机号码：{{userInfo.phone}} <br /> {{desc}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo: {
                title: '',
                name: 'rainnaZR',
                phone: ''
            },
            disabled: true,
            autofocus: true,
            keywords: "",
            desc: ''
        }
    },

    methods:{
        handler(name, handlerName, e){
            this.desc = `${name}输入框-${handlerName}事件触发,参数值为${e.target.value}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.m-content{
    .vu-input{
        margin: 0 0 15px;
    }
    .vu-icon-search{
        margin: 0 10px 0 0;
    }
    .vu-icon-correct{
        margin: 0 0 0 10px;
    }
}
</style>

