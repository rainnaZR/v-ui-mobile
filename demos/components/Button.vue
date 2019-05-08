<template>
  <div class="m-content">
    <p class="u-title">主题一（不带边框）</p>
    <vu-button>按钮默认样式</vu-button>

    <vu-button
        :outline="false"
        :fontSize="10"
        :color="'#eee'"
        :backgroundColor="'#67739B'"
        @click="buttonClick">按钮
    </vu-button>

    <vu-button
        :height="34"
        :padding="15"
        :outline="false"
        :fontSize="14"
        :color="'#fff'"
        :backgroundColor="'#00a65a'"
        @click="buttonClick">按钮
    </vu-button>

    <vu-button
        :height="40"
        :padding="20"
        :outline="false"
        :fontSize="16"
        :color="'#fff'"
        :backgroundColor="'#f39c12'"
        @click="$router.forward('/basic/icon')">查看图标
    </vu-button>

    <vu-button
        :width="'100%'"
        :height="40"
        :padding="20"
        :outline="false"
        :fontSize="16"
        :color="'#fff'"
        :backgroundColor="'#00a046'"
        @click="$router.forward('/')">返回首页
    </vu-button>



    <p class="u-title">主题二（带边框）</p>
    <vu-button :outline="true">按钮默认样式</vu-button>

    <vu-button
        :outline="true"
        :fontSize="10"
        :color="'#67739B'"
        :backgroundColor="'#67739B'"
        @click="buttonClick">按钮
    </vu-button>

    <vu-button
        :height="34"
        :padding="15"
        :outline="true"
        :fontSize="14"
        :color="'#00a65a'"
        :backgroundColor="'#00a65a'"
        @click="buttonClick">按钮
    </vu-button>

    <vu-button
        :height="40"
        :padding="20"
        :outline="true"
        :fontSize="16"
        :color="'#f39c12'"
        :backgroundColor="'#f39c12'"
        @click="$router.forward('/basic/icon')">查看图标
    </vu-button>

    <vu-button
        :width="'100%'"
        :height="40"
        :padding="20"
        :outline="true"
        :fontSize="16"
        :color="'#00a046'"
        :backgroundColor="'#00a046'"
        @click="$router.forward('/')">返回首页
    </vu-button>
  </div>
</template>

<script>
export default {
    methods: {
        buttonClick(event){
            console.info(`button按钮点击事件触发，参数是${event}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.m-content{
    & .vu-button{
      margin:0 0 15px;
    }
}
</style>
