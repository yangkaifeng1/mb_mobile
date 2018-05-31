<template>
  <div class="welfare">
    <div class="banner">
      <div class="total-score">10000 <span>分</span></div>
      <div class="sign">签到领积分</div>
    </div>
    <mt-navbar>
      <mt-tab-item id="1">积分明细</mt-tab-item>
      <mt-tab-item id="2">兑换记录</mt-tab-item>
    </mt-navbar>
    <blank10></blank10>
    <div class="packets-con">
      <div class="title">积分兑换</div>
      <div class="packets-box">
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
        <div class="packets-item">
          <img src="../../components/welfare/image/content_img_50hongbao_normal.png" alt="">
          <blank10></blank10>
          <div class="score">5000</div>
        </div>
      </div>
    </div>
    <blank10></blank10>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import { Navbar, TabItem,} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import Tabbar from 'components/tabbar/tabbar'

  export default{
      components: {
        Blank10,
        Tabbar
      }
  }

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .welfare{
    margin-bottom: 47px;
    .banner{
      width: 100%;
      height: 177px;
      background-image: url("../../components/welfare/image/fuli_banner.png");
      background-size: 100% 100%;
      text-align: center;
      position: relative;
      .total-score{
        position: absolute;
        font-size: @font-size-36;
        color: @color-text-f;
        line-height: 50px;
        top: 50%;
        margin-top: -25px;
        left: 0;
        right: 0;
        span{
          font-size: 16px;
        }
      }
      .sign{
        position: absolute;
        color: @color-text-f;
        font-size: @font-size-medium;
        background: @color-theme;
        padding: 4px 10px 4px 12px;
        right: 0;
        top: 30%;
        border-radius: 13px 0 0 13px;
      }
    }
    .mint-navbar{
      height: 44px;
    }
    .packets-con{
      background: @color-text-f;
      .title{
        height: 39px;
        line-height: 39px;
        padding-left: 10px;
        color: @color-text-d;
        font-size: @font-size-medium;
        .border-1px(@color-f2);
      }
      .packets-box{
        display: flex;
        flex-wrap: wrap;
        .packets-item{
          flex: 0 50%;
          text-align: center;
          padding: 12px 0;
          &:nth-child(2n+1){
            box-sizing: border-box;
            border-right: 1px solid @color-f2;
          }
          img{
            width: 110px;
          }
          .score{
            font-size: @font-size-small;
            color: @color-text;
            line-height: 17px;
          }
        }

      }
    }
  }
</style>
