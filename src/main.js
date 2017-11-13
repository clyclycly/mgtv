import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'

Vue.use(VueLazyload, {
  loading: require('common/image/demo.png')
})

fastclick.attach(document.body) // 3毫秒

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
