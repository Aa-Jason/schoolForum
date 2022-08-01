import App from './App'
import Vue from 'vue'
import {myRequest} from 'utils/api'
// #ifndef VUE3

import {request} from 'common/request.js'
Vue.prototype.$request = request

Vue.prototype.$myRequest=myRequest
Vue.config.productionTip = false
App.mpType = 'app'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

const app = new Vue({
    ...App
})
app.$mount()
console.log("启动成功")
// #endif

