<template>
    <div vu-checkbox class="vu-checkbox" :class="{'vu-checkbox-1' : iconPos === 'right'}">
        <!-- 多选框列表 -->
        <div class="selectitem" v-for="(item, index) in options" :key="index">
            <label>
                <input
                    type="checkbox"
                    :name="name"
                    :value="item.value"
                    :checked="hasChecked(item.value)"
                    @change="change(item.value, $event)" />

                <!-- 选中状态 -->
                <span v-if="hasChecked(item.value)">
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

                <span class="selectlabel">{{item.label}}</span>
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
            default: `checkbox-${Math.random().toString(16).substring(2,8)}`
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        value: [Array]
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
        change(value, e){
            let selectedIndex = this.selectedIndex;

            if(e.target.checked){
                selectedIndex.push(value);
            }else{
                selectedIndex.splice(selectedIndex.indexOf(value), 1);
            }

            this.selectedIndex = selectedIndex;
            this.$emit('change', {
                value,
                selectedIndex
            });
        },

        hasChecked(value){
            return this.selectedIndex.indexOf(value) > -1
        }
    }
}
</script>
