import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
>>>>>>> cly
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'

import './common/stylus/index.styl'

fastclick.attach(document.body) // 3毫秒

<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
=======
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'

>>>>>>> cly
>>>>>>> cly
Vue.use(VueLazyload, {
  loading: require('common/image/demo.png')
})

<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
fastclick.attach(document.body) // 3毫秒

>>>>>>> cly
>>>>>>> cly
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
  store,
>>>>>>> cly
>>>>>>> cly
  render: h => h(App)
})
