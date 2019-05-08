<template>
  <div vu-main class="m-box">
    <div class="m-title">
      <h1>v-ui-mobile</h1>
      <p>A Component Library, based on Vue.js.</p>
    </div>

    <div class="m-list">
      <div v-for="(list, lIndex) in componentList" :key="lIndex">
        <div class="title">{{list.title}}</div>
        <ul class="list">
            <li v-on:click="$router.forward(item.router)" v-for="(item, index) in list.childList" :key="index">
                <div class="item">
                    <vu-icon class="vu-icon-correct" color="green" v-if="item.done"/>
                    {{item.name}}
                </div>
                <div class="item">{{item.desc}}&nbsp;<vu-icon class="vu-icon-right" :size="12" color="green"/></div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../data/config';

export default {
  data(){
    return {
        componentList: config.componentList
    }
  }
}
</script>

<style lang="scss">
.m-box{
    padding:50px 0;
    font-size: 14px;

    .m-title{
        text-align: center;
        h1{
            font-size: 24px;
        }
    }

    .m-list{
        margin:30px 0 0;
        line-height: 50px;
        .title{
            margin: 0 10px;
        }
       .list{
            background: #fff;
            li{
                display: flex;
                flex-direction: row;
                padding: 0 10px;
                border-bottom: 1px solid #ddd;
            }
            .item{
                flex: 1;
                &:last-child{
                    text-align: right;
                }
            }
       }
    }
}
</style>
