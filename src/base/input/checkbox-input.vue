<template>
  <div class="checkbox-input">
    <input type="checkbox" id="agree" hidden name="agree">
    <label for="agree" class="">我已阅读并同意 <span>《风险告知书》</span></label>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .checkbox-input{
    label{
      font-size: 12px;
      color: @color-text-53;
      line-height: 18px;
      span{
        color: @color-theme;
      }
    }
    input[type="checkbox"] + label::before {
      content: "\a0";  /*不换行空格*/
      display: inline-block;
      /*vertical-align: .2em;*/
      width: 18px;
      height: 18px;
      .bg-image('../../base/input/image/content_btn_weiyudu_press');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      /*<!--.bg-image('../../base/input/image/content_btn_weiyuedu_press');-->*/
      /*margin-right: .2em;*/
      /*border-radius: .2em;*/
      /*background-color: silver;*/
      /*text-indent: .15em;*/
      /*line-height: .65;  !*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*!*/
    }
    input[type="checkbox"]:checked + label::before {
      /*<!--.bg-image('../,./base/input/image/content_btn_woyiyuedu_press');-->*/
      .bg-image('../../base/input/image/content_btn_woyiyuedu_press');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
