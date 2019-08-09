<template>
    <div vu-radio class="vu-radio" :class="{'vu-radio-1' : iconPos === 'right'}">
        <!-- 单选框列表 -->
        <div class="selectitem" v-for="(item, i) in options" :key="i">
            <label>
                <input
                    type="radio"
                    :name="name"
                    :value="i"
                    v-model="selectedIndex"
                    @change="change(item, i, $event)" />

                <!-- 选中状态 -->
                <span v-if="selectedIndex === i">
                    <slot name="selected">
                        <v-icon class="vu-icon-correct" :size="20" :color="selectDefaultColor" />
                    </slot>
                </span>

                <!-- 未选中状态 -->
                <span v-else>
                    <slot name="unselected">
                        <v-icon class="vu-icon-correct" :size="20" :color="unselectDefaultColor" />
                    </slot>
                </span>

                <span class="selectlabel">{{item}}</span>
            </label>
        </div>
    </div>
</template>

<script>
import {DEFAULT_COLOR_RED, DEFAULT_COLOR_GRAY} from '../constants';
import icon from '../icon';

export default {
    components: {
        'v-icon': icon
    },

    props: {
        options: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            default: `radio-${Math.random().toString(16).substring(2,8)}`
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        value: {
            type: [Number, String],
            default: ''
        }
    },

    data(){
        return {
            selectedIndex: this.value,
            selectDefaultColor: DEFAULT_COLOR_RED,
            unselectDefaultColor: DEFAULT_COLOR_GRAY
        }
    },

    watch: {
        value(newValue){
            this.selectedIndex = newValue;
        },
        selectedIndex(newValue){
            this.$emit('input', newValue);
        }
    },

    methods: {
        change(value, index, e){
            this.$emit('change', {
                value,
                index
            });
        }
    }
}
</script>
