<template>
  <div class="packets-item">
    <div class="left">
      <div class="name">新手红包</div>
      <div class="condition">
        <div>仅限购买≥15天项目</div>
        <div>任意金额使用</div>
        <div>有效期至:2018-05-18</div>
      </div>
    </div>
    <div class="right">
      <span>50</span>元
    </div>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .packets-item{
    height: 125px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    .bg-image("../../components/packets-item/image/content_img_msg_jiaxijuankeshiyong_normal");
    display: flex;
    align-items: center;
    font-size: @font-size-medium-x;
    .left{
      flex: 2;
      padding-left: 25px;
      .name{
        line-height: 22px;
        margin-bottom: 16px;
      }
      .condition{
        font-size: @font-size-small;
        line-height: 17px;
      }
    }
    .right{
      flex: 1;
      text-align: center;
      color: @color-text-f;
      line-height: 22px;
      margin-top: 16px;
      span{
        font-size: @font-size-36;
        line-height: 48px;
      }
    }
  }
</style>
