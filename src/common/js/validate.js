import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh_CN"
});
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: "validation",
  dictionary: {
    zh_CN
  }
});
// 自定义validate
const Dictionary = {
  zh_CN: {
    messages: {
      required: field => "请输入" + field
    },
    attributes: {
      name: "账号",
      mobile: "手机号码",
      userPwd: "登录密码",
    }
  }
};
// 自定义validate error 信息
Validator.localize(Dictionary);

Validator.extend('mobile', {
  getMessage: field =>'手机号码格式不正确',
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('checkPwd', {
  getMessage: field =>'密码有点简单',
  validate: value => {
    var low_reg1 = /^[0-9]{6,16}$/;
    var low_reg2 = /^[A-Za-z]{6,16}$/;
    if ( low_reg1.test(value) || low_reg2.test(value)) {
      return false
    }
    return true
  }
});

Validator.extend('checknull', {
  getMessage: field =>'输入不能含有空格',
  validate: value => {
    var regNull=/\s/g;
    if ( regNull.test(value)) {
      return false
    }
    return true
  }
});



