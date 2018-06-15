<template>
  <div class="tabbar tc">
    <router-link tag="div" class="tab-item" to="/index">
      <div class="tab-icon">
        <!--<img src="../../components/tabbar/image/home_page.png" alt="">-->
        <i class="icon-home"></i>
      </div>
      <div class="tab-text">首页</div>
    </router-link>

    <router-link tag="div" class="tab-item" to="/target">
      <div class="tab-icon">
        <!--<img src="../../components/tabbar/image/touzi.png" alt="">-->
        <i class="icon-stack"></i>
      </div>
      <div class="tab-text">项目</div>
    </router-link>

    <router-link tag="div" class="tab-item" to="/welfare">
      <div class="tab-icon">
        <!--<img src="../../components/tabbar/image/fuli.png" alt="">-->
        <i class="icon-coin-yen"></i>
      </div>
      <div class="tab-text">福利</div>
    </router-link>

    <router-link tag="div" class="tab-item" to="/mine">
      <div class="tab-icon">
        <!--<img src="../../components/tabbar/image/my.png" alt="">-->
        <i class="icon-user"></i>
      </div>
      <div class="tab-text">我的</div>
    </router-link>
  </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';

  export default{
    data() {
      return {
        selected: 'home_page'
      };
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 47px;
    display: flex;
    background: @color-text-f;

    .tab-item{
      flex: 1;
      padding: 7px 0 2px;
      color: @color-text-ll;
      .tab-icon{
        i{
          font-size: @font-size-large-l;
        }
      }
      .tab-text{
        font-size: @font-size-small;
      }
      &.router-link-active{
        color: @color-theme;
      }
    }
  }

</style>
