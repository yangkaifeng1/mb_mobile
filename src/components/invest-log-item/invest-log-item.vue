<template>
  <div class="invest-log-item">
    <div class="item-top">
      <span class="name">众泰质押【2018031502】</span>
      <span class="state">已还款</span>
    </div>
    <div class="item-footer">
      <span class="money">
        投资金额 <span class="money-num">20000.00</span>
      </span>
      <span class="date">
        投资时间 <span class="date-num">2018.02.12</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .invest-log-item {
    padding: 12px 15px;
    color: @color-text;
    font-size: @font-size-medium;
    background: @color-text-f;
    .border-1px(@color-f5);
    .item-top {
      display: flex;
      .name {
        flex: 3;
        text-align: left;
        font-size: @font-size-medium-x;
        line-height: 22px;
      }
      .state {
        flex: 1;
        text-align: right;
        line-height: 20px;
        color: @color-theme;
      }
    }
    .item-footer {
      display: flex;
      line-height: 20px;
      margin-top: 12px;
      .money {
        flex: 1;
        .money-num {
          margin-left: 10px;
          color: @color-theme;
        }
      }
      .date {
        flex: 1;
        text-align: right;
        .date-num {
          margin-left: 10px;
        }
      }
    }
  }
</style>
