<template>
  <div class="m-content">
    <vu-button @click="toast('领券成功', 1000)">领券-提示1秒</vu-button>
    <vu-button @click="toast('优惠券已领取完')">领券-默认3秒</vu-button>

    <vu-button @click="toast('优惠券领取已结束，下次再来哦，顶部提示！', 2000, 'top')">领券-上提示</vu-button>
    <vu-button @click="toast('优惠券领取已结束，下次再来哦，中间提示！', 2000, 'middle')">领券-中提示</vu-button>
    <vu-button @click="toast('优惠券领取已结束，下次再来哦，底部提示！', 2000, 'bottom')">领券-下提示</vu-button>
  </div>
</template>

<script>
export default {
    methods: {
        toast(message, duration, position){
            $toast.show({
                message,
                duration,
                position
            });
        }
    }
}
</script>
