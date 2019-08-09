<template>
    <div vu-modal class="vu-modal" @click="close" v-show="showModal">
        <!-- 弹窗容器 -->
        <div class="content" @click="wrapClick">
            <slot></slot>
        </div>

        <!-- 关闭按钮 -->
        <div class="button" v-if="showCloseBtn">
            <vu-icon class="vu-icon-close2" :size="34" color="rgba(255,255,255,.8)" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        showCloseBtn: {
            type: Boolean,
            default: true
        }
    },

    data(){
        return {
            showModal: this.value
        }
    },

    watch: {
        showModal(newValue){
            this.$emit('input', newValue);
        },
        value(newValue){
            this.showModal = this.value;
        }
    },

    methods: {
        wrapClick(e){
            e.stopPropagation();
        },

        close(){
            this.showModal = false;
            this.$emit('close');
        }
    }
}
</script>

