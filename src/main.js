import Vue from 'vue'
import App from './App.vue'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

//自定义指令
Vue.directive('focus',{//自定义指令，自动聚焦
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
