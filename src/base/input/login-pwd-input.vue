<template>
  <div class="login-pwd">
    <div class="login-pwd-input">
      <input v-validate="{required: true,min: 6,max: 16,checknull: log,checkPwd: log}"
             :class="{'input': true, 'is-danger': errors.has('userPwd') }" name="userPwd" type="text"
             placeholder="请输入登录密码" @focus="scrollTop">
      <span v-show="errors.has('userPwd')" class="help is-danger">{{ errors.first('userPwd') }}</span>
    </div>
    <div class="login-pwd-confirm-input" v-show="log">
      <input v-validate="'required|confirmed:userPwd'"
             :class="{'input': true, 'is-danger': errors.has('userPwdAgain') }" name="userPwdAgain" type="text"
             placeholder="请确认登录密码" @focus="scrollTop">
      <span v-show="errors.has('userPwdAgain')" class="help is-danger">{{ errors.first('userPwdAgain') }}</span>
    </div>
  </div>

</template>

<script>
  export default{
    props: {
      log: {
        type: Boolean,
        default: true
      }
    },
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

  .login-pwd {
    .login-pwd-input, .login-pwd-confirm-input {
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
  }

</style>
