<template>
    <div class="m-content">
        <vu-button @click="isShowDialog = true">弹窗提示</vu-button>
        <vu-dialog
            v-model="isShowDialog"
            :title="info[0].title"
            :content="info[0].content"
            :showCancelBtn="info[0].showCancelBtn"
            :submitBtnText="info[0].submitBtnText"
            :cancleBtnText="info[0].cancleBtnText"
            @submit="submit"
            @cancel="cancel">
        </vu-dialog>

        <!-- 使用插槽定制的弹窗 -->
        <vu-button @click="isShowDialog2 = true">定制弹窗提示</vu-button>
        <vu-dialog
            v-model="isShowDialog2"
            :title="info[0].title"
            :content="info[0].content"
            @submit="submit"
            @cancel="cancel">
            <div class="selfbutton" slot="button">
                <vu-button backgroundColor="green">我是自定义按钮</vu-button>
                <p>想要了解更多详情，请咨询400-2300-2323</p>
            </div>
        </vu-dialog>

        <vu-button @click="showDialog(info[0])">提示框</vu-button>
        <vu-button @click="showDialog(info[1])">确认框</vu-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info: [{
                title: '提示',
                content: '确定要删除该条日程吗？',
                showCancelBtn: true,
                submitBtnText: '确认删除',
                cancelBtnText: '取消删除'
            },{
                title: '提示',
                content: '升级app才能体验更多功能哦！',
                submitBtnText: '确认升级',
                showCancelBtn: false
            }],
            isShowDialog: false,
            isShowDialog2: false
        }
    },

    methods: {
        showDialog(data){
            $dialog.show(data).then(() => $toast.show({message: '弹窗确认按钮点击事件触发'}), () => $toast.show({message: '弹窗取消按钮点击事件触发'}))
        },

        submit(){
            $toast.show({message: '弹窗确认按钮点击事件触发'})
        },

        cancel(){
            $toast.show({message: '弹窗取消按钮点击事件触发'})
        }
    }
}
</script>

<style lang="scss" scoped>
.selfbutton{
    margin:0 10px 20px;
    text-align: center;
    p{
        margin: 10px 0 0;
        font-size: 10px;
        color: #999;
    }
}
</style>

