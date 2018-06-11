<template>
  <div class="money-log-item">
    <div class="item-top">
      <span class="type">每日签到</span>
      <span class="num">+10积分</span>
    </div>
    <div class="item-footer">
      <span class="date">
        2018.02.12
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

  .money-log-item {
    padding: 12px 15px;
    color: @color-text;
    font-size: @font-size-medium;
    background: @color-text-f;
    .border-1px(@color-f5);
    .item-top {
      display: flex;
      font-size: @font-size-medium-x;
      line-height: 22px;
      .type {
        flex: 1;
        text-align: left;
      }
      .num {
        flex: 1;
        text-align: right;
        color: @color-theme;
      }
    }
    .item-footer {
      display: flex;
      line-height: 20px;
      margin-top: 12px;
      .money {
        flex: 1;
        .date {
          margin-left: 10px;
          color: @color-theme;
        }
      }
      .usenum {
        flex: 1;
        text-align: right;
        .date-num {
          margin-left: 10px;
        }
      }
    }
  }
</style>
