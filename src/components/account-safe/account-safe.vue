<template>
  <transition name="slider">
    <div class="account-safe">
    <mt-header fixed title="账户安全">
      <router-link to="/mine" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="con">
      <mt-cell title="18809481111" is-link class="bigcell">
        <img slot="icon" src="" width="24" height="24">
      </mt-cell>
      <blank10></blank10>
      <mt-cell title="实名认证" is-link>
      </mt-cell>
      <mt-cell title="银行卡管理" is-link>
      </mt-cell>
      <blank10></blank10>
      <mt-cell title="登录密码" is-link>
      </mt-cell>
      <mt-cell title="交易密码" is-link>
      </mt-cell>
      <blank10></blank10>
      <mt-cell title="风险评估" is-link>
      </mt-cell>
    </div>

  </div>
  </transition>
</template>

<script>
  import { Header, Cell } from 'mint-ui'
  import Blank10 from 'base/blank/blank10'

  export default{
      components: {
          Blank10
      }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .account-safe{
    position:fixed;
    top:0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: @color-background;
    .con{
      position: absolute;
      width: 100%;
      top: 42px;
      bottom: 0;
      .exit-account{
        background: @color-text-f;
        color: @color-theme;
      }
    }
  }
  .slider-enter-active, .slider-leave-active{
    transition: all .3s
  }
  .slider-enter, .slider-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
