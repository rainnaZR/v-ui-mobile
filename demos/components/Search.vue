<template>
    <div class="m-content">
        <vu-search
            v-model="keyword"
            @cancel="cancel"
            @search="search" />

        <vu-search
            bgColor="green"
            buttonTextColor="#fff"
            placeholder="搜索商品名称"
            cancelText="Cancel"
            v-model="keyword2"
            @cancel="cancel"
            @search="search" />

        <vu-search
            bgColor="#fff"
            inputBgColor="#eee"
            searchIconColor="#999"
            buttonTextColor="#333"
            placeholder="麻辣方便火锅 仅3.45元"
            cancelText="取消"
            v-model="keyword3"
            @cancel="cancel"
            @search="search" />

        <div>搜索框1的关键字是：{{keyword}}</div>
        <div>搜索框2的关键字是：{{keyword2}}</div>
        <div>搜索框2的关键字是：{{keyword3}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            keyword: '',
            keyword2: '',
            keyword3: ''
        }
    },

    methods: {
        cancel(e){
            alert('cancel事件触发')
        },

        search(value){
            alert(`search事件触发，关键字为${value}`)
        }
    }
}
</script>
