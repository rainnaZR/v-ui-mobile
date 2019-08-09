<template>
    <div
        vu-search
        class="vu-search"
        :style="{backgroundColor: bgColor}">

        <form action="" class="search-input">
            <v-input
                :inputBgColor="inputBgColor"
                v-model="keyword"
                type="search"
                :placeholder="placeholder"
                @keydown="keydown">
                <v-icon class="vu-icon-search" :color="searchIconColor" slot="prepend" />
            </v-input>
        </form>

        <button
            class="search-btn"
            @click="cancel"
            v-text="cancelText"
            :style="{color: buttonTextColor}">
        </button>
    </div>
</template>

<script>
import {DEFAULT_COLOR_WHITE, DEFAULT_COLOR_GRAY, DEFAULT_COLOR_GRAY2, DEFAULT_COLOR_GRAY3} from '../constants';
import input from '../input';
import icon from '../icon';

export default {
    components: {
        'v-input': input,
        'v-icon': icon
    },

    props:{
        bgColor: {
            type: String,
            default: DEFAULT_COLOR_GRAY
        },
        inputBgColor: {
            type: String,
            default: DEFAULT_COLOR_WHITE
        },
        searchIconColor: {
            type: String,
            default: DEFAULT_COLOR_GRAY2
        },
        buttonTextColor: {
            type: String,
            default: DEFAULT_COLOR_GRAY3
        },
        value: [String, Number],
        placeholder: {
            type: String,
            default: '请输入关键字'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },

    data(){
        return {
            keyword: this.value
        }
    },

    watch: {
        value(newValue){
            this.keyword = newValue;
        },
        keyword(newValue){
            this.$emit('input', newValue);
        }
    },

    methods: {
        //搜索事件
        keydown(e){
            //点击键盘上的搜索按钮
            if(e.keyCode == 13){
                e.preventDefault();
                this.search(e);
            }
        },

        search(e){
            this.$emit('search', this.keyword, e);
        },

        cancel(e){
            this.keyword = '';
            this.$emit('cancel', e);
        }
    }
}
</script>
