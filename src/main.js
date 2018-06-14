// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'lib-flexible/flexible'
import 'common/js/validate'
import store from './store'

import 'mint-ui/lib/style.css'
import './common/style/index.less'

// import qs from 'qs'
// /* 注入vue全局中，这样我们可以在组件内或者JS内通过使用this.$qs来使用qs库*/
// Vue.use(qs)

Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
