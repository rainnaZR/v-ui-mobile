<template>
    <div vu-range class="vu-range">
        <div class="range-min">
            <slot name="min">
                <span v-text="min"></span>
            </slot>
        </div>

        <input type="range" :min="min" :max="max" v-model="rangeValue" />

        <div class="range-max">
            <slot name="max">
                <span v-text="max"></span>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        value: [Number, String]
    },

    data(){
        return {
            rangeValue: this.value
        }
    },

    watch: {
        value(newValue){
            this.rangeValue = newValue;
        },
        rangeValue(newValue){
            this.$emit('input', newValue);
        }
    }
}
</script>
