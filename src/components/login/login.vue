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
      <div  class="input-box">
        <form @submit.prevent="validateForm">
          <input v-validate="'required|checknull|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile') }"
                 name="mobile" type="text" placeholder="请输入手机号码">
          <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>

          <input v-validate="'required|min: 6|max: 16'"
                 :class="{'input': true, 'is-danger': errors.has('passWord') }" name="passWord" type="text"
                 placeholder="请输入登录密码">
          <span v-show="errors.has('passWord')" class="help is-danger">{{ errors.first('passWord') }}</span>

          <blank20></blank20>
          <div class="forget-pwd">
            忘记密码?
          </div>
          <blank20></blank20>
          <!--<mt-button size="large" :type="submit" name="button">立即登录</mt-button>-->
          <button type="submit" name="button">立即登录</button>
          <blank20></blank20>
        </form>
        <mt-button size="large" class="reg" @click="toReg">立即注册</mt-button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import { Header,  Button, Toast } from 'mint-ui'
  import loginPwdInput from 'base/input/login-pwd-input'
  import Blank20 from 'base/blank/blank20'
  import { Login, getMsgCode } from 'api/index'
  import { ERR_OK } from 'api/config'
  import md5 from 'js-md5';
  import { mapActions} from 'vuex'

  export default{
    data () {
      return {
        log: false
      }
    },
    computed: {
    },
    methods: {
      back () {
        return this.$router.go(-1);
      },
      toReg () {
        this.$router.push ({
          path: '/register'
        })
      },
      validateForm() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            let data = {}
            let formData = this.$validator.fields.items
            for (var key in formData) {
              data[formData[key].name] = formData[key].value
            }
            let pwd = md5(data.passWord)
            data.passWord = pwd
            data = JSON.stringify(data)
            console.log(this.saveUserMsg)
            let that = this
            Login(data).then((res) => {
              if (res.reCode === "0") {
                this.saveUserMsg(res.data.user)
                this.$router.push({
                  path: '/mine'
                })
              } else {
                Toast({
                  message: '登录错误，请重新登录！',
                  duration: 2000
                });
              }
            })
          }
        });
      },
      ...mapActions([
        'saveUserMsg'
      ])
    },
    components: {
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
      top: 42px;
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
          padding: 0 30px;
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
