<template>
    <div vu-checker class="vu-checker" :class="className">
        <div
            class="checker-item"
            :class="getItemClass(item)"
            v-for="(item, i) in list"
            :key="i"
            @click="click(item)">

            <slot :item="item" :index="i">
                <div v-text="item.label"></div>
            </slot>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: () => [],
            required: true
        },
        value: {
            type: Array,
            default: () => []
        },
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    data(){
        return {
            checkedValue: this.value
        }
    },
    watch: {
        checkedValue(newValue){
            this.$emit('input', newValue);
        }
    },
    methods: {
        getItemClass(item){
            return item.disabled ? 'checker-item-disabled' : this.checkedValue.indexOf(item.value) > -1 ? 'checker-item-checked' : '';
        },

        click(item){
            if(item.disabled){
                return
            }
            let index = this.checkedValue.indexOf(item.value);
            if(index > -1){
                if(this.checkMinValid()){
                    this.checkedValue.splice(index, 1);
                }
            }else{
                 if(this.checkMaxValid()){
                     this.checkedValue.push(item.value);
                 }
            }
        },

        checkMinValid(){
            let length = this.checkedValue.length;
            if(length <= this.min){
                alert('已选标签数量低于最小选择数');
                return false;
            }
            return true;
        },

        checkMaxValid(){
            //如果min==max，等于是单选框，需要先清除this.checkedValue的值
            if(this.min === this.max){
                this.checkedValue = [];
                return true;
            }
            let length = this.checkedValue.length;
            if(length >= this.max){
                alert('已选标签数量高于最大选择数');
                return false;
            }
            return true;
        }
    }
}
</script>
