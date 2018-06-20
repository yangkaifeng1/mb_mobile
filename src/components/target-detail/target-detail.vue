<template>
  <transition name="slider-col">
    <div class="target-detail" @touchmove.prevent>
      <mt-header fixed title="众泰质押【2018031501】">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
      </mt-header>
      <div class="con">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">项目信息</mt-tab-item>
            <mt-tab-item id="2">投标记录</mt-tab-item>
            <mt-tab-item id="3">风险控制</mt-tab-item>
          </mt-navbar>
          <blank10></blank10>

          <mt-tab-container v-model="selected">
            <!--项目信息-->

            <mt-tab-container-item id="1">
              <scroll class="msg-box">
                <div class="target-msg">
                  <!--项目信息-->
                  <div class="msg">
                    <ul>
                      <li class="msg-item">
                        <span class="left">项目名称：</span>
                        <span class="right">众泰质押【2018031501】</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">预计年化收益率：</span>
                        <span class="right">12.00%</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">项目金额：</span>
                        <span class="right">600000.00元</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">项目期限：</span>
                        <span class="right">15天</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">借款用途：</span>
                        <span class="right">短期周转</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">还款方式：</span>
                        <span class="right">到期还本息</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">起投金额：</span>
                        <span class="right">起投金额100元，且以50元的整数倍递增</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">发标日期：</span>
                        <span class="right">2018-04-04</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">投标期限：</span>
                        <span class="right">10天</span>
                      </li>
                      <li class="msg-item">
                        <span class="left">起息日期：</span>
                        <span class="right">满标复审计息</span>
                      </li>

                    </ul>
                  </div>
                  <blank10></blank10>
                  <!--项目描述-->
                  <div class="des">
                    <div class="des-title"> 借款描述 </div>
                    <div class="des-con">
                      <div class="des-item">
                        <div class="title">
                          借款人简介
                        </div>
                        <div class="des-detail">
                          <p>客户王某浙江省人，1987年出生，此次借款用于短期资金周转，故申请此笔贷款。</p>
                        </div>
                      </div>

                      <div class="des-item">
                        <div class="title">
                          项目描述
                        </div>
                        <div class="des-detail">
                          <p>此项目为汽车质押借款项目。</p>
                          <p>质押车为东风日产牌轿车，购于2014年，无不良记录。</p>
                          <p>该车市场价值为5万元，现借款金额为3.7万元。</p>
                          <p>经审核，借款人信誉良好、还款来源稳定且质押物实际价值远大于借款金额，因此予以借款。</p>
                        </div>
                      </div>

                      <div class="des-item">
                        <div class="title">
                          资金用途
                        </div>
                        <div class="des-detail">
                          <p>债务人借款用于短期资金周转。</p>
                        </div>
                      </div>

                      <div class="des-item">
                        <div class="title">
                          还款来源
                        </div>
                        <div class="des-detail">
                          <p>债务人信用良好，还款来源为其经营收入，有充足的偿还能力。</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <blank10></blank10>
                  <!--项目合同-->
                  <div class="agreement">
                    <div class="agr-title"> 借款合同 </div>
                    <div class="agr-con">
                      <div class="agr-item">
                        <div class="title">借款合同</div>
                        <div class="agr-detail">
                          <div class="detail-item">
                            <img src="https://www.zjmb158.com/public/attachment/201805/26/11/5b08d2b395b35_100x100.jpg" alt="">
                          </div>
                          <div class="detail-item">
                            <img src="https://www.zjmb158.com/public/attachment/201805/26/11/5b08d2b395b35_100x100.jpg" alt="">
                          </div>

                        </div>
                      </div>

                      <div class="agr-item">
                        <div class="title">抵押物</div>
                        <div class="agr-detail">
                          <div class="detail-item">
                            <img src="https://www.zjmb158.com/public/attachment/201805/26/11/5b08d2cf0194c_100x100.jpg" alt="">
                          </div>
                          <div class="detail-item">
                            <img src="https://www.zjmb158.com/public/attachment/201805/26/11/5b08d2cf0194c_100x100.jpg" alt="">
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </scroll>

            </mt-tab-container-item>

            <!--投标记录-->
            <mt-tab-container-item id="2">
              <div class="log-list">
                <div class="log-item border-1px-scale">
                  <div class="icon"></div>
                  <div class="name">里**</div>
                  <div class="number">1500.00</div>
                  <div class="date">2019-04-12 18:15:58</div>
                </div>
                <div class="log-item border-1px-scale">
                  <div class="icon"></div>
                  <div class="name">里**</div>
                  <div class="number">1500.00</div>
                  <div class="date">2019-04-12 18:15:58</div>
                </div>
                <div class="log-item border-1px-scale">
                <div class="icon"></div>
                <div class="name">里**</div>
                <div class="number">1500.00</div>
                <div class="date">2019-04-12 18:15:58</div>
              </div>
                <div class="log-item border-1px-scale">
                  <div class="icon"></div>
                  <div class="name">里**</div>
                  <div class="number">1500.00</div>
                  <div class="date">2019-04-12 18:15:58</div>
                </div>
                <div class="log-item border-1px-scale">
                  <div class="icon"></div>
                  <div class="name">里**</div>
                  <div class="number">1500.00</div>
                  <div class="date">2019-04-12 18:15:58</div>
                </div>
                <div class="log-item border-1px-scale">
                  <div class="icon"></div>
                  <div class="name">里**</div>
                  <div class="number">1500.00</div>
                  <div class="date">2019-04-12 18:15:58</div>
                </div>
              </div>
            </mt-tab-container-item>

            <!--风险控制-->
            <mt-tab-container-item id="3">
              <div class="control">
                <div class="control-title">风险控制</div>
                <div class="control-con">
                  <div class="control-item">
                    <div class="title">
                      风控措施
                    </div>
                    <div class="control-detail">
                      <p>借款人按比例缴纳保证金 </p>
                      <p>车辆完成合法质押手续 </p>
                      <p>车辆已入库保管（质押车辆仍需安装GPS定位设备）</p>
                      <p>通过智能数据分析，保证车辆评估价格合理</p>
                      <p>电话核实借款人提供信息无误</p>
                    </div>
                  </div>

                  <div class="control-item">
                    <div class="title">
                      资金保障
                    </div>
                    <div class="control-detail">
                      <p>满宝金服与第三方资金托管机构富友支付联动协作，由富友支付系统来实现交易和资金的结算。用户在平台上的交易资金由富友第三方支付平台处理，满宝金服无法接触交易资金，保障实现资金与平台分隔。</p>
                    </div>
                  </div>

                  <div class="control-item">
                    <div class="title">
                      风险提示
                    </div>
                    <div class="control-detail">
                      <p>市场有风险、投资需谨慎。</p>
                    </div>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>


          </mt-tab-container>

      </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Navbar, TabItem, TabContainer, TabContainerItem, Cell } from  'mint-ui'
  import Blank10 from 'base/blank/blank10';
  import Scroll from 'base/scroll/scroll'

  export default {
    data() {
      return {
        selected: '1',
        loading: true
      };
    },
    methods: {
      back () {
        return this.$router.go(-1);
      }
    },
    components: {
      Blank10,
      Scroll
    }
  };
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .msg-box{
    height: 100%;
    overflow: hidden;
    background: @color-background;
  }

  .target-detail{
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
    .con{
      position: absolute;
      width: 100%;
      top: 42px;
      bottom: 0;
      .mint-tab-container{
        position: absolute;
        width: 100%;
        top: 50px;
        bottom: 0;
        .mint-tab-container-item{
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          .msg-box{
            height: 100%;
            overflow: hidden;
            background: @color-background;
            .target-msg{
              .msg{
                background: @color-text-f;
                font-size: @font-size-medium;
                padding: 22px 16px;
                .msg-item{
                  line-height: 20px;
                  margin-bottom: 16px;
                  .left{
                    color: @color-text-d;
                  }
                  .right{
                    color: @color-text-ll;
                  }
                }
                .item:last-child{
                  margin-bottom: 0;
                }
              }
              .des{
                background: @color-text-f;
                font-size: @font-size-medium;
                padding: 22px 16px;
                .des-title{
                  color: @color-text-d;
                  font-size: @font-size-medium-x;
                  line-height: 22px;
                  margin-bottom: 31px;
                }
                .des-con{
                  .des-item{
                    margin-bottom: 31px;
                    .title{
                      font-size: @font-size-medium;
                      color: @color-text-53;
                      line-height: 26px;
                    }
                    .des-detail{
                      line-height: 26px;
                      color: @color-text-l;
                    }
                  }
                  .des-item:last-child{
                    margin-bottom: 0;
                  }
                }
              }
              .agreement {
                background: @color-text-f;
                font-size: @font-size-medium;
                padding: 22px 16px;
                .agr-title {
                  color: @color-text-d;
                  font-size: @font-size-medium-x;
                  line-height: 22px;
                  margin-bottom: 31px;
                }
                .agr-con{
                  .agr-item{
                    .title{
                      font-size: @font-size-medium;
                      color: @color-text-53;
                      line-height: 26px;
                    }
                    .agr-detail{
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      .detail-item{
                        flex: 0 1 33.3%;
                        margin: 5px 0;
                        img{
                          width: 92%;
                          margin: 0 4%;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          .log-list{
            background: @color-text-f;
            .log-item{
              height: 44px;
              font-size: @font-size-medium;
              color: @color-text-ll;
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              line-height: 44px;
              .border-1px(#d2d2d2);
              .name{
                display: inline-block;
              }
              .number{
                display: inline-block;
                color: @color-theme;
              }
              .date{
                display: inline-block;
              }
            }
          }
          .control{
            background: @color-text-f;
            font-size: @font-size-medium;
            padding: 22px 16px;
            .control-title{
              color: @color-text-d;
              font-size: @font-size-medium-x;
              line-height: 22px;
              margin-bottom: 31px;
            }
            .control-con{
              .control-item{
                margin-bottom: 31px;
                .title{
                  font-size: @font-size-medium;
                  color: @color-text-53;
                  line-height: 26px;
                }
                .control-detail{
                  line-height: 26px;
                  color: @color-text-l;
                }
              }
              .control-item:last-child{
                margin-bottom: 0;
              }
            }
          }
        }
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
