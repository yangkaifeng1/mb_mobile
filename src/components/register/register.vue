<template>
  <transition name="slider">
    <div class="register">
    <mt-header fixed title="注册">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="con">
      <blank40></blank40>
      <div class="input-box">
        <phone-input></phone-input>
        <get-code></get-code>
        <login-pwd-input></login-pwd-input>
        <blank30></blank30>
        <mt-button size="large" class="reg">完成注册</mt-button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import { Header,  Button } from 'mint-ui'
  import phoneInput from 'base/input/phone-input'
  import loginPwdInput from 'base/input/login-pwd-input'
  import getCode from 'base/input/get-code'
  import Blank20 from 'base/blank/blank20'
  import Blank30 from 'base/blank/blank30'
  import Blank40 from 'base/blank/blank40'

  export default{
    data () {
      return {
//            back: ";"
      }
    },
    computed: {},
    methods: {
      back () {
        return this.$router.go(-1);
      }
    },
    components: {
      Blank20,
      Blank30,
      Blank40,
      phoneInput,
      loginPwdInput,
      getCode
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .register {
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
        .mint-button{
          background: @color-theme;
          color: @color-text-f;
        }
      }
    }
  }

  .slider-enter-active, .slider-leave-active{
    transition: all 0.3s
  }
  .slider-enter, .slider-leave-to{
    transform: translate3d(-100%, 0, 0);
  }
</style>
