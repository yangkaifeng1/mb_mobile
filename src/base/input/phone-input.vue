<template>
  <div class="phone-input">
    <input v-validate="'required|checknull|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }"
           name="mobile" type="text" placeholder="请输入手机号码" @focus="scrollTop">
    <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
  </div>
</template>

<script>
  export default{
    methods: {
      scrollTop () {
        setTimeout(function () {
          document.body.scrollTop = document.body.scrollHeight;
        }, 300);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .phone-input {
    width: 100%;
    height: 64px;
    input {
      width: 100%;
      height: 44px;
      text-indent: 10px;
      font-size: @font-size-medium;
      border-bottom: 1px solid @color-d2;
    }
    .help {
      display: inline-block;
      padding: 5px 0 0 10px;
    }
  }
</style>
