<template>
    <div vu-modal class="vu-modal" @click.stop="close" v-if="showModal">
        <!-- 普通弹窗容器 -->
        <div v-if="type == 'normal'" class="content" @click="wrapClick">
            <slot></slot>
        </div>

        <!-- 分享弹窗 -->
        <div v-if="type == 'share'" @click="wrapClick">
            <slot>
                <div
                    v-if="content"
                    :style="{
                        position: 'fixed',
                        top: `${content.top || 10}px`,
                        right: `${content.right || 15}px`
                    }">
                    <img
                        :style="{
                            width: `${content.imgWidth}px`,
                            height: `${content.imgHeight}px`
                        }"
                        :src="content.imgUrl" />
                </div>
            </slot>
        </div>

        <!-- 关闭按钮 -->
        <div class="button" v-if="showCloseBtn">
            <vu-icon class="vu-icon-close2" :size="34" color="rgba(255,255,255,.8)" />
        </div>
    </div>
</template>

<script>
import {extend} from 'utils_path/index';

export default {
    props: {
        type: {
            type: [String],
            default: 'normal'
        },
        value: {
            type: Boolean,
            default: false,
        },
        showCloseBtn: {
            type: Boolean,
            default: true
        },
        content: {
            type: [Object]
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
        },

        show(options){
            this.showModal = true;
            extend(this, options);
        }
    }
}
</script>

