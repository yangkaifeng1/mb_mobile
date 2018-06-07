<template>
  <div class="get-code">
    <div class="input">
      <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('msgCode') }" name="msgCode"
             type="text" placeholder="请输入手机验证码" @focus="scrollTop">
      <span v-show="errors.has('msgCode')" class="help is-danger">{{ errors.first('msgCode') }}</span>
    </div>
    <div class="get">
      <div class="get-btn" @click="getcode" v-show="getFlag">获取验证码</div>
      <div class="get-btn dis" v-show="!getFlag">重新获取({{second}}s)</div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  const SECOND = 60

  export default{
    data () {
      return {
        second: SECOND,
        getFlag: true
      }
    },
    methods: {
      getcode () {
        this.getFlag = false
        this.set_timer()
        //发送提示
        Toast({
          message: '验证码已发送',
          duration: 1000
        });
      },
      set_timer () {
        let timer = setInterval( () => {
          this.second --
          if (this.second === 0) {
            clearInterval(timer)
            this.getFlag = true
            this.second = SECOND
          }
        }, 1000)
      },
      scrollTop () {
        setTimeout(function(){
          document.body.scrollTop = document.body.scrollHeight;
        },300);
      }
    }
  }


//
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .get-code {
    width: 100%;
    height: 64px;
    display: flex;
    .input {
      flex: 2;
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
    .get {
      flex: 1;
      width: 100%;
      height: 44px;
      /*line-height: 44px;*/
      text-align: center;
      font-size: @font-size-medium;
      border-bottom: 1px solid @color-d2;
      .get-btn {
        line-height: 20px;
        margin: 11px 0;
        border-left: 1px solid @color-d2;
        color: @color-theme;
        &.dis {
          color: @color-background-d;
        }
      }
    }
  }
</style>
