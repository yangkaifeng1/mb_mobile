<template>
  <transition name="slider">
    <div class="login">
    <mt-header fixed>
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="con">
      <div class="logo">
        <img src="../../components/login/image/login_top_bg.png" alt="">
      </div>
      <blank20></blank20>
      <div class="input-box">
        <phone-input></phone-input>
        <login-pwd-input :log="log"></login-pwd-input>
        <div class="forget-pwd">
          忘记密码?
        </div>
        <blank20></blank20>
        <mt-button size="large">立即登录</mt-button>
        <blank20></blank20>
        <mt-button size="large" class="reg" @click="toReg">立即注册</mt-button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import { Header,  Button } from 'mint-ui'
  import phoneInput from 'base/input/phone-input'
  import loginPwdInput from 'base/input/login-pwd-input'
  import Blank20 from 'base/blank/blank20'

  export default{
    data () {
      return {
        log: false
      }
    },
    computed: {},
    methods: {
      back () {
        return this.$router.go(-1);
      },
      toReg () {
        console.log('11')
        this.$router.push ({
          path: '/register'
        })
      }
    },
    components: {
      phoneInput,
      Blank20,
      loginPwdInput
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .login {
    position: fixed;
    background: @color-text-f;
    width: 100%;
    height: 100%;
    .mint-header {
      background: @color-text-f;
      color: @color-text-d;
    }
    .con {
      position: absolute;
      width: 100%;
      top: 44px;
      bottom: 0;
      background: @color-text-f;
      .logo {
        padding: 0 71px;
        margin-top: 65px;
        img {
          width: 100%;
        }
      }
      .input-box{
        padding: 0 30px;
        .forget-pwd{
          color: @color-theme;
          text-align: right;
          font-size: @font-size-medium;
        }
        .reg{
          background: @color-text-f;
          color: @color-theme;
        }
      }
    }
  }

  .slider-enter-active, .slider-leave-active{
    transition: all 0.3s
  }
  .slider-enter, .slider-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
