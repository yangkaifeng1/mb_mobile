<template>
  <div class="index">
    <!--<mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈"></mt-header>-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../components/index/download.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../components/index/download.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../components/index/download.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <blank10></blank10>
    <div class="newer-target">
      <progress-circle :percent="0.5" :radius="214">
        <div class="con">
          <div class="name">满宝盈金标</div>
          <div class="rate-num">12.0</div>
          <div class="rate-text">预期年化收益(%)</div>
          <div class="des"><span>新人专享</span></div>
        </div>
      </progress-circle>
      <div class="target-total">
        项目总额：100,000元
      </div>
      <div class="target-des">
        <div>100元起投</div>
        <div>15天回款</div>
      </div>
      <blank10></blank10>
      <mt-button size="large">立即投资</mt-button>
      <blank10></blank10>
      <blank10></blank10>
    </div>
    <blank10></blank10>
    <div class="normal-target">
      <mt-cell
        title="众泰质押【2018031501】"
        is-link>
      </mt-cell>
      <blank10></blank10>
      <div class="normal-con">
        <div class="rate">
          <div class="rate-num">9.0</div>
          <blank5></blank5>
          <div class="rate-text">预期年化收益(%)</div>
        </div>
        <div class="days">
          <div class="days-num">30天</div>
          <blank5></blank5>
          <div class="days-text">投资期限</div>
        </div>
        <div class="money">
          <div class="money-num">100</div>
          <blank5></blank5>
          <div class="money-text">起投金额</div>
        </div>
      </div>
      <blank10></blank10>
      <blank10></blank10>
      <blank5></blank5>
    </div>
  </div>
</template>

<script>
  import { Header, Swipe, SwipeItem, Button, Cell, Tabbar, TabItem } from 'mint-ui';
  import progressCircle from 'base/progress-circle/progress-circle';
  import blank10 from 'base/blank/blank10';
  import blank5 from 'base/blank/blank5';
  import { getIndex } from 'api/index'
  import { ERR_OK } from 'api/config'

  export default{
    data () {
      return {
        indexData: []
      }
    },
    created () {
      this._getIndex()
    },
    methods: {
      _getIndex() {
        getIndex().then((res) => {
          if (res.code === ERR_OK) {
//            this.indexData = this._normalizeSinger(res.data.list);
            console.log(res.data)
          }
        })
      },
    },
    components: {
      progressCircle,
      blank10,
      blank5
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  .index{
    .mint-header{
      height: 44px;
      background: @color-theme;
      font-size: @font-size-large-l;
    }
    .mint-swipe{
      height: 142px;
      .mint-swipe-item{
        img{
          width: 100%;
        }
      }
    }
    .newer-target{
      background: #fff;
      text-align: center;
      padding: 0 30px;
      .progress-circle{
        position: relative;
        .con{
          position: absolute;
          left: 0;
          right: 0;
          top: 38px;
          color: @color-theme;
          line-height: 18px;
          font-size: @font-size-small;
          .rate-num{
            font-size: @font-size-large-xx;
            line-height: 66px;
          }
          .rate-text{
            margin-top: 4px;
            color: @color-text-l;
          }
          .des{
            margin-top: 14px;
            span{
              border: 1px solid @color-theme;
              padding: 0 10px;
              border-radius: 20px;
            }
          }
        }
      }
      .target-total{
        font-size: @font-size-small;
      }
      .target-des{
        display: flex;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-text-ll;
        margin-top: 16px;
        line-height: 20px;
        div{
          flex: 1;
        }
      }
    }
    .normal-target{
      background: @color-text-f;
      .normal-con{
        display: flex;
        padding: 0 15px;
        font-size: @font-size-medium;
        color: @color-text-53;
        .rate{
          flex: 4;
          .rate-num{
            font-size: @font-size-large-xl;
            color: @color-theme;
            height: 33px;
          }
        }
        .days{
          flex: 3;
          .days-num{
            font-size: @font-size-medium-x;
            color: @color-theme;
            height: 33px;
            line-height: 22px;
          }
        }
        .money{
          flex: 2;
          .money-num{
            font-size: @font-size-medium-x;
            color: @color-theme;
            height: 33px;
            line-height: 22px;
          }
        }
      }

    }
  }

</style>
