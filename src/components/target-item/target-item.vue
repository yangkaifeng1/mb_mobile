<template>
  <div class="invest-item">
    <div class="item-con">
      <div class="top">
        <div class="name">众泰质押【2018031501】</div>
        <div class="reward tc">奖励</div>
        <div class="type newtype">理财推荐</div>
      </div>
      <div class="content">
        <div class="earnings">
          <div class="num">12.0</div>
          <div class="des">预计年化收益(%)</div>
        </div>
        <div class="term">
          <div class="num">15天</div>
          <div class="des">投资期限</div>
        </div>
        <div class="total">
          <div class="num">19.00万</div>
          <div class="des">项目总额</div>
        </div>
        <div class="progress">
          <progress-circle :percent="1" :radius="70">
            <div class="num">25%</div>
          </progress-circle>
        </div>
      </div>
    </div>
    <blank10></blank10>
  </div>
</template>

<script>
  import progressCircle from 'base/progress-circle/progress-circle'
  import blank10 from 'base/blank/blank10'

  export default{
    components: {
      progressCircle,
      blank10
    }
  }

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .invest-item{
    .item-con{
      background: @color-text-f;
      color: @color-text-ll;
      padding: 10px 0 15px 9px;
      .top{
        height: 20px;
        line-height: 20px;
        margin-bottom: 12px;
        .name{
          display: inline-block;
          color: @color-text;
          font-size: @font-size-medium;
        }
        .reward{
          display: inline-block;
          border: 1px solid @color-theme;
          color: @color-theme;
          border-radius: 8px;
          width: 35px;
          font-size: @font-size-small;
          line-height: 17px;
        }
        .type{
          font-size: @font-size-small;
          float: right;
          line-height: 22px;
          border-top-left-radius: 11px;
          border-bottom-left-radius: 11px;
          color: @color-text-f;
          padding: 0 21px 0 16px;
          &.newtype{
            background: @color-theme;
          }
          &.normaltype{
            background: @color-theme-d;
          }
        }
      }
      .content{
        display: flex;
        justify-content: space-between;
        .earnings{
          flex: 3;
          .num{
            height: 50px;
            font-size: @font-size-36;
            line-height: 50px;
            color: @color-theme;
          }
          .des{
            font-size: @font-size-small;
            color: @color-text-ll;
            line-height: 17px;
            text-indent: 1px;
          }
        }
        .term{
          flex: 2;
          .num{
            height: 50px;
            font-size: @font-size-large;
            line-height: 60px;
            color: @color-theme;
          }
          .des{
            font-size: @font-size-small;
            color: @color-text-ll;
            line-height: 17px;
          }
        }
        .total{
          flex: 2;
          .num{
            height: 50px;
            font-size: @font-size-large;
            line-height: 60px;
            color: @color-text;
          }
          .des{
            font-size: @font-size-small;
            color: @color-text-ll;
            line-height: 17px;
          }
        }
        .progress{
          flex: 2;
          .progress-circle{
            position: relative;
            width: 70px;
            .num{
              position: absolute;
              line-height: 22px;
              top: 50%;
              margin-top: -11px;
              left: 5px;
              right: 0;
              font-size: @font-size-medium-x;
              color: @color-theme;
              text-align: center;
            }
          }
        }
      }
    }

  }
</style>
