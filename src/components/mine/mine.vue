<template>
  <div class="mine">
    <div class="top">
      <svg-banner>
        <div class="unsign-con" v-show="!user.userId">
          <div class="title">满宝金服</div>
          <blank25></blank25>
          <router-link to="/login">
            <div class="sign-btn">登录/注册</div>
          </router-link>
        </div>
        <div class="signed-con" v-show="user.userId">
          <div class="topfloor">
            <div class="text">账户总资产（元）</div>
            <div class="number">{{user.money}}</div>
          </div>
          <div class="get">累计回报500.00元</div>
        </div>
      </svg-banner>
      <blank35></blank35>
      <div class="money-about">
        <div class="des">可用余额（元）<span class="num">--</span></div>
        <div class="operate">
          <span class="get-btn">提现</span>
          <span class="recharge-btn">充值</span>
        </div>
      </div>
      <blank10></blank10>
    </div>
    <blank10></blank10>
    <div class="middle">
      <div class="item-box">
        <div class="item">
          <router-link to="/mine/investlog">
            <div class="item-title">投资记录</div>
            <div class="item-con">投资明细记录</div>
          </router-link>
        </div>

        <div class="item">
          <router-link to="/mine/moneylog">
            <div class="item-title">资金记录</div>
            <div class="item-con">账户资金详情</div>
          </router-link>
        </div>
      </div>
      <div class="item-box">
        <div class="item">
          <router-link to="/mine/redpackets">
            <div class="item-title">红包</div>
            <div class="item-con">——张</div>
          </router-link>
        </div>
        <div class="item">
          <div class="item-title">加息券</div>
          <div class="item-con">——张 </div>
        </div>
      </div>

    </div>
    <blank10></blank10>
    <div class="footer">
      <div class="item-box">
        <div class="item">
          <div class="item-title">邀请好友</div>
          <div class="item-con">佣金上不封顶</div>
        </div>
        <div class="item">
          <router-link to="/mine/accountsafe">
            <div class="item-title">账户安全</div>
            <div class="item-con">账户安全设置</div>
          </router-link>
        </div>
      </div>
      <div class="item-box">
        <div class="item">
          <router-link to="/mine/question">
            <div class="item-title">帮助中心</div>
            <div class="item-con">疑难解答</div>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/mine/about">
            <div class="item-title">关于</div>
            <div class="item-con">满宝家庭</div>
          </router-link>
        </div>
      </div>
    </div>
    <blank10></blank10>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import svgBanner from 'base/svg-banner/svg-banner'
  import Tabbar from 'components/tabbar/tabbar'
  import Blank25 from 'base/blank/blank25'
  import Blank35 from 'base/blank/blank35'
  import Blank10 from 'base/blank/blank10'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    components: {
      svgBanner,
      Tabbar,
      Blank25,
      Blank35,
      Blank10
    }
  }

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .mine{
    margin-bottom: 47px;
    .top{
      background: @color-text-f;
      .unsign-con{
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: @color-text-f;
        .title{
          font-size: @font-size-28;
          line-height: 40px;
        }
        .sign-btn{
          font-size: @font-size-large;
          border: 1px solid @color-text-f;
          color: @color-text-f;
          line-height: 40px;
          border-radius: 20px;
          width: 140px;
          text-align: center;
        }
      }
      .signed-con{
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        color: @color-text-f;
        .topfloor{
          margin-top: 72px;
          text-align: center;
          .text{
            font-size: @font-size-medium;
            line-height: 20px;
          }
          .number{
            font-size: @font-size-36;
            line-height: 50px;
          }
        }
        .get{
          margin-top: 35px;
          font-size: @font-size-medium-x;
          line-height: 22px;
        }
      }
      .money-about{
        padding: 0 16px 10px;
        .clearfloat();
        .des{
          display: inline-block;
          float: left;
          font-size: @font-size-medium;
          color: @color-text-ll;
          line-height: 20px;
          margin-top: -6px;
          .num{
            font-size: @font-size-medium-x;
            color: @color-text-m;
            line-height: 22px;
          }
        }
        .operate{
          display: inline-block;
          float: right;
          font-size: @font-size-medium;
          span{
            border-radius: 20px;
            padding: 6px 20px;
            &.get-btn{
              border: 1px solid @color-theme;
              color: @color-theme;
              margin-right: 10px;
            }
            &.recharge-btn{
              background: @color-theme;
              color: @color-text-f;
            }
          }
        }
      }
    }
    .middle, .footer{
      background: @color-text-f;
      .item-box{
        display: flex;
        flex-wrap: wrap;
        .border-1px(@color-f5);
        .item{
          flex: 1;
          box-sizing: border-box;
          margin: 15px 0;
          padding-left: 15px;
          &:nth-child(1){
            border-right: 1px solid @color-f5;
          }
          .item-title{
            font-size: @font-size-medium;
            color: @color-text-d;
            line-height: 20px;
            margin-bottom: 6px;
          }
          .item-con{
            font-size: @font-size-small;
            color: @color-text-ll;
            line-height: 17px;
          }
        }
      }


    }
  }

</style>
