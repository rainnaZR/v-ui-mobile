<template>
    <div class="m-content">
        <vu-button @click="isShowModal = true">长文章弹窗提示</vu-button>
        <vu-modal
            v-model="isShowModal"
            :showCloseBtn="showCloseBtn"
            @close="close">
            <div class="title">温馨提示</div>
            <p>1.余额仅支持APP端使用<br />2.点击支付，即表示您已同意《充值协议》</p>
            <p>充值协议</p>
            <p>尊敬的用户，为了保障您的合法权益，请您在充值前，仔细、完整地阅读以下充值协议。当您点击“充值”按钮，即视为已阅读、理解本协议，并同意按本协议规定执行。</p>
            <p>1.充值方式</p>
            <p>您可通过APP客户端在线充值或者在线下门店使用现金充值；充值方式限银联支付、微信支付、支付宝支付、现金支付。</p>
            <p>2.充值活动</p>
            <p>用户通过充值可获取积分如充100元，可获得100个积分（实际请以APP充值配置为准）； 充值金额到账后，相应充值获得的积分也将于1小时内到账，用户可通过重新登录账号进行查看；（如遇特殊积分活动，以活动页面规则为准）。</p>
            <p>3.使用限制</p>
            <p>账户充值的余额仅可用于APP提供的商品支付服务。</p>
            <p>4.充值后，账户余额不设置有效期，如有需要可联系客服申请退款。</p>
            <p>如您对本协议有任何疑问或建议，可随时致电我们的客服：4009600960。</p>
        </vu-modal>

        <vu-button @click="isShowModal2 = true">短文章弹窗提示</vu-button>
        <vu-modal
            v-model="isShowModal2"
            :showCloseBtn="showCloseBtn2"
            @close="close">
            <div class="title">温馨提示</div>
            <p>1.余额仅支持APP端使用<br />2.点击支付，即表示您已同意《充值协议》</p>
            <p>充值协议</p>
            <p>尊敬的用户，为了保障您的合法权益，请您在充值前，仔细、完整地阅读以下充值协议。当您点击“充值”按钮，即视为已阅读、理解本协议，并同意按本协议规定执行。</p>
            <p>1.充值方式</p>
        </vu-modal>

        <vu-button @click="showShareModal">分享蒙层提示</vu-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShowModal: false,
            showCloseBtn: true,
            isShowModal2: false,
            showCloseBtn2: false
        }
    },

    methods: {
        close(){
            console.log('蒙层点击');
        },

        showShareModal(){
            $modal.show({
                type: 'share',
                content: {
                    imgUrl: 'https://image.xxx.com/web/activitygroupbuy/3o5q8rhsl69o.png',
                    imgWidth: 214,
                    top: 10,
                    right: 10
                },
                showCloseBtn: false
            })
        }
    }
}
</script>
