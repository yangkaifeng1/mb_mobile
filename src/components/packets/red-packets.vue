<template>
  <transition name="slider-row">
    <div class="red-packets" @touchmove.prevent>
      <mt-header fixed title="我的红包">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
      </mt-header>
      <div class="con">
        <mt-navbar ref="navbar">
          <mt-tab-item id="1">待满标</mt-tab-item>
          <mt-tab-item id="2">待回款</mt-tab-item>
          <mt-tab-item id="3">已结束</mt-tab-item>
        </mt-navbar>
        <scroll class="packets-box">
          <ul>
            <li v-for="item in 10">
              <packets-item></packets-item>
            </li>
          </ul>
        </scroll>
      </div>
  </div>
  </transition>
</template>

<script>
  import {Header} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import packetsItem from 'components/packets-item/packets-item'
  import Scroll from 'base/scroll/scroll'

  export default{
    methods: {
      back () {
        return this.$router.go(-1);
      },
    },
    components: {
      Blank10,
      packetsItem,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .red-packets {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: @color-background;
    .con {
      position: absolute;
      width: 100%;
      top: 42px;
      bottom: 0;
      .packets-box{
        position: absolute;
        top: 40px;
        bottom: 0;
        width: 100%;
        overflow: hidden;
        ul{
          padding: 15px 10px;
          li{
            padding-bottom: 10px;
            &:last-child{
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
