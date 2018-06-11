<template>
  <div class="target-invest" @touchmove.prevent>
    <mt-header fixed title="众泰质押【2018031501】">
      <router-link to="/target" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--@scrollToEnd="loadData"-->
    <scroll class="con-box">
      <div class="con" >
        <div class="top">
          <div class="rate">
            <div class="num">12.00%</div>
            <div class="text">预期年化收益率</div>
          </div>
          <div class="tar-nums">
            <div class="floor">
              <div class="item">
                <div class="item-con">15天</div>
                <div class="name">借款期限</div>
              </div>
              <div class="item">
                <div class="item-con">60000</div>
                <div class="name">借款金额（元）</div>
              </div>
              <div class="item">
                <div class="item-con">48000</div>
                <div class="name">剩余可投金额（元）</div>
              </div>
            </div>
            <div class="floor">
              <div class="item">
                <div class="item-con">到期还本息</div>
                <div class="name">还款方式</div>
              </div>
              <div class="item">
                <div class="item-con">100.00</div>
                <div class="name">最小认购金额（元）</div>
              </div>
              <div class="item">
                <div class="item-con">满标复审计息</div>
                <div class="name">起息时间</div>
              </div>
            </div>
          </div>
        </div>
        <blank10></blank10>
        <div class="middle">
          <div class="use">
            可用余额<span class="nums">6000.00元</span>
          </div>
          <div class="input-box">
            <input type="text" class="invest-input" placeholder="请投入金额 50的倍数">
            <div class="btn">自动填入</div>
          </div>
          <div class="select">
            <span>优惠券：</span>
            <span>可用三张</span>
            <span class="select-btn">选择</span>
          </div>
          <div class="get">
            <span>预计收益：</span>
            <span class="money">10.00</span>
            <span class="money">+ 20.00</span>&nbsp;&nbsp;元
          </div>
        </div>
        <checkbox-input></checkbox-input>
        <div class="footer">
          <mt-button size="large">立即投资</mt-button>
          <div class="getDetail" @click="loadData">
            <img src="../../components/target-invest/image/content_btn_xiangshang_normal@2x.png" alt="">
            <span>点击查看详情</span>
          </div>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Header, Button } from 'mint-ui'
  import investInput from 'base/input/invest-input'
  import checkboxInput from 'base/input/checkbox-input'
  import Scroll from 'base/scroll/scroll'
  import Blank10 from 'base/blank/blank10'

  export default {
      data () {
          return {

          }
      },
      methods: {
        loadData () {
//            alert('22')
            this.$router.push({
              path: `/target/2/targetdetail`
            })
        }
      },
      components: {
        investInput,
        checkboxInput,
        Scroll,
        Blank10
      }
  }

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .target-invest{
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    z-index:10;
    background: @color-background;
    .mint-header{
      font-size: @font-size-large-l;
    }
    .con-box{
      height: 100%;
      overflow: hidden;
      background: @color-background;
      .con{
        position: absolute;
        width: 100%;
        top: 44px;
        .top{
          height: 250px;
          background: @color-text-f;
          background-image: url('../../components/target-invest/image/bg_img_beijing_normal@2x.png');
          background-size: 100% 100%;
          background-position: center;
          display: flex;
          flex-direction: column;
          .rate{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: @color-theme;
            .num{
              font-size: @font-size-38;
              line-height: 53px;
            }
            .text{
              font-size: @font-size-medium;
              line-height: 20px;
            }
          }
          .tar-nums{
            flex: 1;
            display: flex;
            flex-direction: column;
            .floor{
              flex: 1;
              display: flex;
              border-bottom: 1px solid @color-text-f;
              &:last-child {
                border-right: 0;
              }
              .item{
                flex: 1;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                display: flex;
                border-right: 1px solid @color-text-f;
                &:nth-child(3n) {
                  border-right: 0;
                }
                .item-con{
                  color: @color-text;
                  font-size: @font-size-medium;
                  line-height: 20px;
                  padding-bottom: 2px;
                }
                .name{
                  color: @color-text-ll;
                  font-size: @font-size-small;
                  line-height: 17px;
                }
              }
            }
          }
        }
        .middle{
          background: @color-text-f;
          .use{
            font-size: @font-size-medium;
            line-height: 20px;
            color: @color-text-53;
            padding: 16px;
            .border-1px(@color-f0);
            .nums{
              color: @color-theme;
            }
          }
          .input-box{
            padding: 16px;
            position: relative;
            .invest-input{
              height: 55px;
              border: 1px solid @color-d2;
              width: 100%;
              border-radius: 5px;
              padding: 0 17px;
              box-sizing: border-box;
              font-size: @font-size-medium-x;
            }
            .btn{
              display: inline-block;
              position: absolute;
              right: 35px;
              top: 50%;
              margin-top: -10px;
              color: @color-theme;
              font-size: 14px;
              line-height: 20px;
              .extend-click();
            }
          }
          .select{
            padding: 0 28px 11px;
            span{
              font-size: @font-size-small;
              color: @color-text-ll;
              line-height: 17px;
              vertical-align: -5px;
              &.select-btn{
                vertical-align: middle;
                float: right;
                border: 1px solid @color-theme;
                color: @color-theme;
                padding: 2px 5px;
                border-radius: 5px;
              }
            }

          }
          .get{
            padding: 0 16px 16px;
            color: @color-c1;
            font-size: @font-size-small;
            .money{
              color: @color-e8;
            }
          }
        }
        .checkbox-input{
          padding: 16px 14px;
        }
        .footer{
          padding: 0 30px;
          .getDetail{
            padding: 30px 0 20px;
            font-size: @font-size-small;
            color: @color-text-ll;
            text-align: center;
            img{
              width: 18px;
              vertical-align: middle;
            }
            span{
              display: inline-block;

            }
          }
        }
      }
    }
  }
</style>
<!--.bg-image('../../components/target-invest/image/bg_img_beijing_normal');-->
