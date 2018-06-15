<template>
  <div class="red-packets">
    <mt-header fixed title="我的红包">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="con">
      <mt-navbar ref="navbar">
        <mt-tab-item id="1">待满标</mt-tab-item>
        <mt-tab-item id="2">待回款</mt-tab-item>
        <mt-tab-item id="3">已结束</mt-tab-item>
      </mt-navbar>
      <div class="packets-box">

      </div>
    </div>
  </div>
</template>

<script>
  import {Header} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'

  export default{
    methods: {
      back () {
        return this.$router.go(-1);
      },
    },
    components: {
      Blank10
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
      top: 44px;
      bottom: 0;
    }
  }
</style>
