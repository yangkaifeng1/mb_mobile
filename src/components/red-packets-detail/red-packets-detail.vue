<template>
  <transition name="slider-row">
    <div class="red-packets-detial">
      <mt-header fixed title="红包详情">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
      </mt-header>
      <div class="con">
        <div class="top">
          <red-packets-item></red-packets-item>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import redPacketsItem from 'components/red-packets-item/red-packets-item'

  export default {
    methods: {
      back () {
        return this.$router.go(-1);
      }
    },
    components: {
      redPacketsItem
    }
  }

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";

  .red-packets-detial{
    position:fixed;
    top:0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: @color-background;
    .con {
      position: absolute;
      width: 100%;
      top: 42px;
      bottom: 0;
      .top{
        background: @color-text-f;
        width: 100%;
        height: 315px;
        padding-top: 63px;
        .red-packets-item {
          box-sizing: border-box;
          width: 207px;
          height: 126px;
          margin: 0 auto 63px;
        }
      }
    }
  }

</style>
