import App from './App'
import Vue from 'vue'

// #ifndef VUE3

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

