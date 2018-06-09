<template>
  <div class="contact" @touchmove.prevent>
    <mt-header fixed title="联系我们">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <scroll class="scroll-con">
      <div class="con">
        <div class="item">
          <div class="title">客户服务</div>
          <div class="item-con">
            <span>客服热线：</span>
            <span class="phone">4008-507-568</span>
          </div>
          <div class="item-con">
            <span>微信公众号：</span>
            <span>满宝订阅号（mbjfdyh）</span>
          </div>
        </div>
        <blank10></blank10>
        <div class="item">
          <div class="title">市场合作</div>
          <div class="item-con">
            <span>公司邮箱：</span>
            <span>inof@zjmb158.com</span>
          </div>
          <div class="item-con">
            <span>前台电话：</span>
            <span>0571-8778001转601</span>
          </div>
          <div class="item-con">
            <span>传真电话：</span>
            <span>0571-8778001转602</span>
          </div>
        </div>
        <blank10></blank10>
        <div class="item">
          <div class="title">公司地址</div>
          <div class="item-con">
            <span>办公地址：</span>
            <p>浙江省杭州市萧山区钱江世纪城保亿中心 B座12楼</p>
          </div>
          <div class="item-con">
            <span> 邮政编码：</span>
            <span>310000</span>
          </div>
          <div class="item-img">
            <img src="../../components/contact/image/map.png" alt="">
          </div>

        </div>
        <div class="work">
          工作日：9:00-17:30
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Blank10 from 'base/blank/blank10'
  import Scroll from 'base/scroll/scroll'

  export default{
    methods: {
      back () {
        return this.$router.go(-1);
      },
    },
    components: {
      Blank10,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .contact {
    position: fixed;
    background: @color-background;
    z-index: 10;
    width: 100%;
    top: 0;
    bottom: 0;
    .mint-header {
      color: @color-text-f;
    }
    .scroll-con{
      position: absolute;
      width: 100%;
      top: 54px;
      bottom: 0;
      .con {
        .item{
          background: @color-text-f;
          padding: 12px 16px;
          font-size: @font-size-medium;
          line-height: 25px;
          .title{
            color: @color-text-53;
          }
          .item-con{
            color: @color-text-l;
            text-indent: 1em;
            .phone{
              color: @color-1a;
            }
          }
          .item-img{
            img{
              width: 100%;
            }
          }
        }
        .work{
          padding: 10px 0;
          text-align: center;
          font-size: @font-size-medium;
          line-height: 20px;
        }
      }

    }
  }
</style>
