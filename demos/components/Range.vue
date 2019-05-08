<template>
    <div class="m-content">
        <vu-range
            v-model="range"
            :min="10"
            :max="50" />

        <div>range的值为{{range}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            range: 14
        }
    }
}
</script>
