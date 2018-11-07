// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 路由
import $ from 'jquery' // 引入jquery
import ElementUI from 'element-ui' // 引入 Element-UI
import elementEnLocale from 'element-ui/lib/locale/lang/en' // 引入英文语言包
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // 引入中文语言包
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css' // 重置样式
import VueParticles from 'vue-particles' // 粒子动画特效
import axios from 'axios' // 引入axios
// import api from './api/http'
import 'babel-polyfill'
import VueI18n from 'vue-i18n' // 引入双语言包

Vue.prototype.$http = axios // 修改原型链，就能直接使用$http命令
axios.defaults.withCredentials = true // 为了使每个请求带上session信息
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.use(VueI18n)

const i18n = new VueI18n({ // 决定当前是使用中文还是英文
  locale: sessionStorage.getItem('encn') || (navigator.language === 'zh-CN' || navigator.language === 'zh' ? 'zh-CN' : 'en-US'),
  messages: {
    'zh-CN': require('./common/lang/zh'), // 中文语言包
    'en-US': require('./common/lang/en') // 英文语言包
  }
})

Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
